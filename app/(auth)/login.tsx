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
      <Stack.Screen options={{ title: 'Login Page' }} />
      <View className="bg-slate-950 justify-center items-center flex-1">
        <View className="bg-blue-950 p-10 rounded-xl">
          <Text className="text-white text-2xl p-5 text-center font-bold">Login</Text>
          <Auth />
        </View>
      </View>
    </>
  );
}

