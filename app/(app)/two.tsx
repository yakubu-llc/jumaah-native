import { Stack } from 'expo-router';
import { View } from 'react-native';

import { ScreenContent } from '../../components/screen-content';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab Two' }} />
      <View className="flex-1 p-24">
        <ScreenContent path="app/(tabs)/two.tsx" title="Tab Two" />
      </View>
    </>
  );
}
