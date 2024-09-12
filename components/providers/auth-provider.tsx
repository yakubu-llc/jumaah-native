import { FC, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import { Account, AccountService } from '@/lib/sdk/requests';
import { supabase } from '@/lib/supabase';
import { useState } from 'react';
import { useEffect } from 'react';
import { OpenAPI as OpenAPIConfig } from '@/lib/sdk/requests/core/OpenAPI';

export type AuthContextType = {
  session: Session | null
  account: Account | null
  accessToken: string | undefined
  user: User | undefined
  isLoading: boolean
  refresh: () => void
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  account: null,
  accessToken: undefined,
  user: undefined,
  isLoading: true,
  refresh: () => { },
});

export function useAuth() {
  return useContext(AuthContext);
}

export interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null)
  const [account, setAccount] = useState<Account | null>(null)
  const [accessToken, setAccessToken] = useState<string | undefined>(undefined)
  const [user, setUser] = useState<User | undefined>(undefined)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchSession = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    return session
  }

  const handleSessionChange = async (session: Session | null) => {
    setSession(session)

    if (session) {
      setAccessToken(session.access_token)
      setUser(session.user)

      OpenAPIConfig.HEADERS = {
        ...OpenAPIConfig.HEADERS,
        'Authorization': `Bearer ${session.access_token}`,
      };

      try {
        const { account } = await AccountService.getAccountByUserId({ userId: session.user.id })
        setAccount(account)
      } catch (error) {
        setAccount(null)
        console.log("account fetch error", error)
      }
    } else {
      setAccount(null)
      setUser(undefined)
      setAccessToken(undefined)
    }
  }

  const refreshSession = async () => {
    setIsLoading(true)
    const session = await fetchSession()
    await handleSessionChange(session)
    setIsLoading(false)
  }

  useEffect(() => {
    const initializeAuth = async () => {
      console.log("initializing auth")
      await refreshSession()
    }

    initializeAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      console.log("session changed")
      setIsLoading(true)
      await handleSessionChange(session)
      setIsLoading(false)
    })

    return () => {
      subscription?.unsubscribe()
    }
  }, [])



  return (
    <AuthContext.Provider
      value={{
        session,
        account,
        accessToken,
        user,
        isLoading,
        refresh: refreshSession
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}