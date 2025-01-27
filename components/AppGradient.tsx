import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const AppGradient = ({ children, colors }: { children: any; colors: [string, string, ...string[]] }) => {
	return (
		<LinearGradient colors={colors} className='flex-1'>
			<SafeAreaView className='flex-1 px-5 py-6 justify-between'>{children}</SafeAreaView>
		</LinearGradient>
	);
};

export default AppGradient;
