import '@/global.css';

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from '@/lib/useColorScheme';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { PortalHost } from '@rn-primitives/portal';
// import { AuthProvider } from '@/components/providers/auth-provider';
import { ReactQueryProvider } from '@/components/providers/react-query-provider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { Toaster } from 'sonner-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <ThemeProvider>
          <ReactQueryProvider>
            {/* <AuthProvider> */}
              {/* <Text>{session?.access_token}</Text> */}
              <StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
              <Stack />
              <PortalHost />
              {/* <Toaster /> */}
            {/* </AuthProvider> */}
          </ReactQueryProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}