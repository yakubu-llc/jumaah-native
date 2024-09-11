import { Session } from '@supabase/supabase-js';
import { Stack, Redirect } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { supabase } from '@/utils/supabase';

export default function AppLayout() {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoading(false);
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href="/login" />
  }

  return <Stack />
}
