import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import CustumButton from '@/components/CustumButton';
import { TimerConstexte } from '@/context/TimerContext';

const AdjustMeditationDuration = () => {

  const {setDuration} = useContext(TimerConstexte);

  const handlePresss = (duration : number) => {
    setDuration(duration);
    router.back();
  }
  return (
		<View className='flex-1 relative'>
			<AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
				<Pressable onPress={router.back} className='absolute top-12 left-5 z-10'>
					<AntDesign name='leftcircleo' size={50} color='white' />
				</Pressable>

				<View className='justify-center h-4/5'>
					<Text className='text-center font-bold text-3xl text-white mb-8'>
						Adjust your Meditation Duration
					</Text>

					<View>
						<CustumButton
							title='10 seconds'
							onPress={() => handlePresss(10)}
							containerStyle={'mb-5'}
						/>
						<CustumButton
							title='5 minutes'
							onPress={() => handlePresss(5*60)}
							containerStyle={'mb-5'}
						/>
						<CustumButton
							title='10 minutes'
							onPress={() => handlePresss(10*60)}
							containerStyle={'mb-5'}
						/>
						<CustumButton
							title='15 minutes'
							onPress={() => handlePresss(15*60)}
							containerStyle={'mb-5'}
						/>
					</View>
				</View>
			</AppGradient>
		</View>
	);
}

export default AdjustMeditationDuration