import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Auth } from '@/components/auth';

export default function Login() {
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

