import { Session } from '@supabase/supabase-js';
import { Tabs, Redirect } from 'expo-router';
import { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { Users } from '@/lib/icons/Users';
import { Cog } from '@/lib/icons/Cog';
import { OpenAPI as OpenAPIConfig } from '@/lib/sdk/requests/core/OpenAPI';
import { supabase } from '@/lib/supabase';
import { cn } from '@/lib/utils';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';



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

  OpenAPIConfig.BASE = process.env.EXPO_PUBLIC_BACKEND_API_URL!;
  OpenAPIConfig.HEADERS = {
    'Authorization': `Bearer ${session.access_token}`,
  };

  return (
    <ReactQueryProvider>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => <Users size={28} className={cn(focused ? 'text-primary' : 'text-muted-foreground')} />,
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused }) => <Cog size={28} className={cn(focused ? 'text-primary' : 'text-muted-foreground')} />,
          }}
        />
      </Tabs>
    </ReactQueryProvider>
  );
}
