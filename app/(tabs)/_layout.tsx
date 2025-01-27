import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Colors from '@/constants/Colors'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';

const TabsLayout = () => {
  return (
		<Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary, headerShown: false }}>
			<Tabs.Screen
				name='nature-meditate'
				options={{
					tabBarLabel: 'Meditate',
					tabBarIcon: ({ color }) => (
						<MaterialCommunityIcons name='meditation' size={24} color={color} />
					)
				}}
			/>

			<Tabs.Screen
				name='affirmations'
				options={{
					tabBarLabel: 'Affirmation',
					tabBarIcon: ({ color }) => <Entypo name='open-book' size={24} color={color} />
				}}
			/>
		</Tabs>
	);
}

export default TabsLayout