import { ComponentPropsWithoutRef, FC } from 'react';
import { View, Text } from 'react-native';

import { cn } from '@/lib/utils';
import { AppState } from 'react-native';
import { supabase } from '@/lib/supabase';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export interface AuthProps extends ComponentPropsWithoutRef<typeof View> { }

export const Auth: FC<AuthProps> = ({ className, ...props }) => {
  return (
    <View className={cn('flex-1 p-24', className)} {...props}>
      <Text>TODO: web auth</Text>
    </View>
  );
};
