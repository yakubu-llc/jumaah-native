import { Stack, Redirect, router } from 'expo-router';
import { View } from 'react-native'
import { Text } from '@/components/ui/text'
import { CreateAccountForm } from '@/components/auth/create-account-form';
import { useAuth } from '@/components/providers/auth-provider';
import { useEffect } from 'react';

export default function CreateAccount() {
  const { user, account } = useAuth()

  // this was needed to remove "bad setState() call" warning
  useEffect(() => {
    if (!user) {
      router.replace("/login");
    } else if (account) {
      router.replace("/");
    }
  }, [user, account]);

  if (!user || account) {
    return null; // Return null while redirecting
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Create Account' }} />
      <View className="bg-slate-950 justify-center items-center flex-1">
        <View className="bg-blue-950 p-10 rounded-xl">
          <Text className="text-white text-2xl p-5 text-center font-bold">Create an Account</Text>
          <CreateAccountForm userId={user?.id} />
        </View>
      </View>
    </>
  );
}