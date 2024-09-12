import '@/global.css';

import { Stack } from 'expo-router';
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/lib/useColorScheme';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PortalHost } from '@rn-primitives/portal';
import { supabase } from '@/lib/supabase';
import { AuthProvider } from '@/components/providers/auth-provider';
import { Account, AccountService } from '@/lib/sdk/requests';
import { Text } from '@/components/ui/text';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();
  const [session, setSession] = useState<Session | null>(null)
  const [account, setAccount] = useState<Account | null>(null)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    if (session) {
      AccountService.getAccountByUserId({ userId: session.user.id }).then(({ account }) => {
        setAccount(account)
      })
    }

    setIsLoading(false);
  }, [])

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ThemeProvider>
      <ReactQueryProvider bearerToken={session?.access_token}>
        <AuthProvider session={session} account={account}>
          <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
          <Stack />
          <PortalHost />
        </AuthProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}