import { ComponentPropsWithoutRef, FC } from 'react';
import { Text, View } from 'react-native';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export interface LoginButtonProps extends ComponentPropsWithoutRef<typeof View> { }

export const LoginButton: FC<LoginButtonProps> = ({  ...props }) => {
  return (
    <View  {...props}>
      <Text>TODO: web LoginButton</Text>
    </View>
  );
};
