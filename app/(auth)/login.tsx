import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/ui/text'
import { Auth } from '@/components/auth';

export default function Login() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.container}>
        <Text>Login</Text>
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
