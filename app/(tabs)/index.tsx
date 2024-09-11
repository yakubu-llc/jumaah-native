import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import { useState, useEffect } from 'react'
import { supabase } from '~/utils/supabase'
import { Auth } from '~/components/auth/Auth';
import { ScreenContent } from '~/components/ScreenContent';
import { LogoutButton } from '~/components/auth/LogoutButton';

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

  return (
    <>
      <Stack.Screen options={{ title: 'Tab One1' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(tabs)/index.tsx" title="Tab One" />
        {session ? <Text>Logged in, {session.user.id}</Text> : <Auth />}
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
