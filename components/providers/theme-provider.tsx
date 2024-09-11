import '@/global.css';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { Theme, ThemeProvider as BaseThemeProvider } from '@react-navigation/native';
import { SplashScreen } from 'expo-router';
import { useEffect, useState, FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import { Platform } from 'react-native';

import { NAV_THEME } from '@/lib/constants';
import { useColorScheme } from '@/lib/useColorScheme';

const LIGHT_THEME: Theme = {
  dark: false,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  dark: true,
  colors: NAV_THEME.dark,
};

// Prevent the splash screen from auto-hiding before getting the color scheme.
SplashScreen.preventAutoHideAsync();

export interface ThemeProviderProps
  extends Omit<ComponentPropsWithoutRef<typeof BaseThemeProvider>, 'value'> {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
}) => {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      const theme = await AsyncStorage.getItem('theme');
      if (Platform.OS === 'web') {
        // Adds the background color to the html element to prevent white background on overscroll.
        document.documentElement.classList.add('bg-background');
      }
      if (!theme) {
        AsyncStorage.setItem('theme', colorScheme);
        setIsColorSchemeLoaded(true);
        return;
      }
      const colorTheme = theme === 'dark' ? 'dark' : 'light';
      if (colorTheme !== colorScheme) {
        setColorScheme(colorTheme);

        setIsColorSchemeLoaded(true);
        return;
      }
      setIsColorSchemeLoaded(true);
    })().finally(() => {
      SplashScreen.hideAsync();
    });
  }, []);

  if (!isColorSchemeLoaded) {
    return null;
  }

  return (
    <BaseThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      {children}
    </BaseThemeProvider>
  );
};
