import { ComponentPropsWithoutRef, FC } from 'react';
import { Text, View } from 'react-native';

export interface ScreenContentProps extends ComponentPropsWithoutRef<typeof View> {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent: FC<ScreenContentProps> = ({ title, children }: ScreenContentProps) => {
  return (
    <View className="items-center flex-1 justify-center">
      <Text className="h-[1px] my-7 w-4/5 bg-gray-200">{title}</Text>
      <View className="text-xl font-bold" />
      {children}
    </View>
  );
};
