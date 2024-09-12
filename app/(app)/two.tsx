import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Text } from '@/components/ui/text'

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <View className="flex-1 p-24">
        <Text>Tab Two</Text>
      </View>
    </>
  );
}
