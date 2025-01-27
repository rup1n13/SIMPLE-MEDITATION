import { Slot, Stack } from 'expo-router';
import '../global.css';
import TimerProvider from '@/context/TimerContext';

export default function RootLayout(){
  return (
		<TimerProvider>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
				<Stack.Screen name='index' options={{ headerShown: false }} />
				<Stack.Screen name='meditate/[id]' options={{ headerShown: false }} />
				<Stack.Screen name='(modal)/adjust-meditation-duration' options={{ headerShown: false,presentation: 'modal' }} />
			</Stack>
		</TimerProvider>
	);
}
