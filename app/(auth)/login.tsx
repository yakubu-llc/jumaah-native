import { Stack } from 'expo-router';
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Auth } from '@/components/auth';
import { useAuth } from '@/components/providers/auth-provider';
import { useEffect } from 'react';
import { router } from 'expo-router';

export default function Login() {
  const { user } = useAuth()

  // this was needed to remove "bad setState() call" warning
  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user]);

  if (user) {
    return null; // Return null while redirecting
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <View className="flex-1 p-24">
        <Text>Login</Text>
        <Auth />
      </View>
    </>
  );
}

