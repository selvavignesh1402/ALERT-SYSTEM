import { Stack } from 'expo-router';
import { Provider as PaperProvider } from 'react-native-paper';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';

export default function RootLayout() {
  return (
     <PaperProvider>

    <Stack screenOptions={{ headerShown: false }}>

      <Stack.Screen name="index" />
      <Stack.Screen name="Login" />
      <Stack.Screen name="Otp" />

      <Stack.Screen name="(tabs)" />
    </Stack>
  </PaperProvider>
  );
}
