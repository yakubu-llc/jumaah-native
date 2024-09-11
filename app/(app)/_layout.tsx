import { Session } from '@supabase/supabase-js';
import { Tabs, Redirect } from 'expo-router';
import { Home, Cog } from 'lucide-react-native';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';

import { supabase } from '@/lib/supabase';

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

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'orange' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <Cog size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
