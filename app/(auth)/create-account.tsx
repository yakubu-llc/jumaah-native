import { Stack, Redirect, router } from 'expo-router';
import { View } from 'react-native'
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
      <View className="flex-1 p-24">
        <CreateAccountForm userId={user?.id} />
      </View>
    </>
  );
}