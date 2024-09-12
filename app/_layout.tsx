import '@/global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/lib/useColorScheme';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PortalHost } from '@rn-primitives/portal';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <ThemeProvider>
        <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
        <Stack />
        <PortalHost />
    </ThemeProvider>
  );
}