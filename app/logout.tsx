import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native'

import { ScreenContent } from '@/components/ScreenContent';
import { LogoutButton } from '@/components/auth/LogoutButton';

export default function Logout() {
  return (
    <>
      <Stack.Screen options={{ title: 'Logout' }} />
      <View style={styles.container}>
        <ScreenContent path="app/(auth)/logout.tsx" title="Logout" />
        <LogoutButton />
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
