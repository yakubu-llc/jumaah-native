import { ComponentPropsWithoutRef, FC } from 'react';

import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { Text } from './text';

import { Moon } from '@/lib/icons/Moon';
import { Sun } from '@/lib/icons/Sun';
import { useColorScheme } from '@/lib/useColorScheme';

export interface ModeToggleProps extends ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {}

export const ModeToggle: FC<ModeToggleProps> = ({ ...props }) => {
  const { setColorScheme } = useColorScheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild {...props}>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onPress={() => setColorScheme('light')}>
          <Text>Light</Text>
        </DropdownMenuItem>
        <DropdownMenuItem onPress={() => setColorScheme('dark')}>
          <Text>Dark</Text>
        </DropdownMenuItem>
        <DropdownMenuItem onPress={() => setColorScheme('system')}>
          <Text>System</Text>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
