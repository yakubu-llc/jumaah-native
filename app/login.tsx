import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native'

import { Auth } from '@/components/auth';
import { ScreenContent } from '@/components/screen-content';

export default function Login() {

  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(auth)/login.tsx" title="Login" />
        <Auth />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
