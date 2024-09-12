import { FC, ReactNode } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import { Account } from '@/lib/sdk/requests';

export type AuthContextType = {
  session: Session | null
  account: Account | null
};

const AuthContext = createContext<AuthContextType & {
  accessToken: string | undefined
  user: User | undefined
}>({
  session: null,
  account: null,
  accessToken: undefined,
  user: undefined,
});

export function useAuth() {
  return useContext(AuthContext);
}

export interface AuthProviderProps extends AuthContextType {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = ({ children, session, account }) => {
  const accessToken = session?.access_token
  const user = session?.user

  return (
    <AuthContext.Provider value={{ session, account, accessToken, user }}>
      {children}
    </AuthContext.Provider>
  );
}