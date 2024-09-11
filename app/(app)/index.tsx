import { Stack } from 'expo-router';
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { supabase } from '@/utils/supabase'

import { ScreenContent } from '@/components/ScreenContent';
import { LogoutButton } from '@/components/auth/LogoutButton';

export default function Home() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  // Remove the session check here
  // if (!session) {
  //   throw new Error('No session')
  // }

  return (
    <>
      <Stack.Screen options={{ title: 'Tab One1' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        {session && <Text>Logged in, {session.user.id}</Text>}
        <LogoutButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});