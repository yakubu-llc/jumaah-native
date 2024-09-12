import { Tabs, Redirect } from 'expo-router';
import { Users } from '@/lib/icons/Users';
import { Cog } from '@/lib/icons/Cog';
import { OpenAPI as OpenAPIConfig } from '@/lib/sdk/requests/core/OpenAPI';
import { cn } from '@/lib/utils';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { useAuth } from '@/components/providers/auth-provider';

export default function AppLayout() {
  const { session, account } = useAuth()

  if (!session) {
    return <Redirect href="/login" />
  }

  if (!account) {
    return <Redirect href="/create-account" />
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
