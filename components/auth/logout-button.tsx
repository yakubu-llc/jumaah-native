import { router } from 'expo-router';
import { ComponentPropsWithoutRef, FC, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/utils';
import { supabase } from '../../lib/supabase';

export interface LogoutButtonProps extends ComponentPropsWithoutRef<typeof Button> { }

export const LogoutButton: FC<LogoutButtonProps> = ({ className, ...props }) => {
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
    <Button
      onPress={handleLogout}
      className={cn(className="bg-white w-[40vw]")}
      {...props}
    >
      <Text className="text-blue-950">Logout</Text>
    </Button>
  );
}
