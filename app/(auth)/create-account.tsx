import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native'
import { Text } from '@/components/ui/text'

export default function CreateAccount() {
  return (
    <>
      <Stack.Screen options={{ title: 'Create Account' }} />
      <View style={styles.container}>
        <Text>Create Account</Text>
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
