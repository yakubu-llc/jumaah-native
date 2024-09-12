import { Tabs, Redirect, router } from 'expo-router';
import { Users } from '@/lib/icons/Users';
import { Cog } from '@/lib/icons/Cog';
import { cn } from '@/lib/utils';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { useAuth } from '@/components/providers/auth-provider';
import { Text } from '@/components/ui/text';

export default function AppLayout() {
  const {isLoading, account } = useAuth()

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  if (!account) {
    return router.replace("/create-account")
  }
  
  console.log("account", account)

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
