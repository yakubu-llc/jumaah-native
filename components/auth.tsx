import { ComponentPropsWithoutRef, FC } from 'react';
import { View, Text } from 'react-native';
import { cn } from '@/lib/utils';

export interface AuthProps extends ComponentPropsWithoutRef<typeof View> { }

export const Auth: FC<AuthProps> = ({ className, ...props }) => {
  return (
    <View className={cn("flex-1 p-24", className)} {...props}>
      <Text>TODO: web auth</Text>
    </View>
  );
}
