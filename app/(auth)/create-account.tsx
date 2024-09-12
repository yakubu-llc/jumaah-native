import { Stack, Redirect, router } from 'expo-router';
import { View } from 'react-native'
import { CreateAccountForm } from '@/components/auth/create-account-form';
import { useAuth } from '@/components/providers/auth-provider';

export default function CreateAccount() {
  console.log("create account")
  const { user, account } = useAuth()

  if (!user) {
    return router.replace("/login")
  }

  if (account) {
    return router.replace("/")
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
