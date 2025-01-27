import beachImage from '@/assets/meditation-images/beach.webp';
import AppGradient from '@/components/AppGradient';
import CustomButton from '@/components/CustumButton';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const App = () => {
	const router = useRouter();
	return (
		<View className='flex-1'>
			<ImageBackground source={beachImage} resizeMode='cover' className='flex-1 '>
				<AppGradient colors={['rgba(0,0,45,0.4)', 'rgba(0,0,0,0.8)']}>
					<View>
						<Text className='text-center font-bold text-white text-4xl'>Simple meditation</Text>
						<Text className='text-center text-white text-2xl mt-3 text-regular'>
							Simplify Meditation for everyone
						</Text>
					</View>

					<View>
						<CustomButton
							onPress={() => router.push('/nature-meditate')}
							title='Get started'
							containerStyle={'h-16'}
						/>
					</View>
					
					<StatusBar style='light' backgroundColor='rgba(0,0,0,0.4)' />
				</AppGradient>
			</ImageBackground>
		</View>
	);
};
export default App;
