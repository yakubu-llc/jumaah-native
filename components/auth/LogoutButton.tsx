import { router } from 'expo-router';
import { forwardRef, useState } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { supabase } from '../../utils/supabase';

export const LogoutButton = forwardRef<TouchableOpacity, TouchableOpacityProps>(
  ({ ...touchableProps }, ref) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
      setIsLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error(error);
      } else {
        router.replace('/login');
      }

      setIsLoading(false);
    };

    return (
      <TouchableOpacity
        ref={ref}
        disabled={isLoading}
        className={`${styles.button} ${touchableProps.className}`}
        onPress={handleLogout}
      >
        <Text className={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    );
  }
);

const styles = {
  button: 'items-center bg-indigo-500 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
};
