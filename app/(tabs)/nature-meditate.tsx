import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import { MEDITATION_DATA } from '@/constants/MeditationData'
import meditationImages from '@/constants/meditation-images'
import { LinearGradient } from 'expo-linear-gradient'
import { router } from 'expo-router'

const NatureMeditate = () => {
  return (
		<View className='flex-1'>
			<AppGradient colors={['#161b2e', '#0a4d4a', '#766e67']}>
				<View>
					<Text className='text-3xl font-bold text-white'>Wellcome rup1n13 </Text>
					<Text className='text-lg font-semibold my-4 text-indigo-50'>
						Start your meditation journey here
					</Text>
				</View>

				<View>
					<FlatList
						data={MEDITATION_DATA}
						keyExtractor={(item) => item.id.toString()}
						className='mb-20'
						showsVerticalScrollIndicator={false}
						renderItem={({ item }) => (
							<Pressable onPress={() => router.push(`/meditate/${item.id}`)} className='h-48 rounded-md my-3 overflow-hidden'>
								<ImageBackground
                  source={meditationImages[ item.id - 1 ]}
                  resizeMode='cover'
                  className='flex-1 rounded-lg justify-center'
                  
                >
                  <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)']} className='flex-1 justify-center'>
									  <Text className='text-gray-100 text-center text-3xl font-bold'>{item.title}</Text>
                  </LinearGradient>
								</ImageBackground>
							</Pressable>
						)}
					/>
				</View>
			</AppGradient>
			<StatusBar style='light' backgroundColor='rgba(0,0,0,0.4)' />
		</View>
	);
}

export default NatureMeditate