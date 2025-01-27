import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AffirmationCategory from '@/components/AffirmationCategory';


const Affirmations = () => {
  return (
		<View className='flex-1'>
			<AppGradient colors={['#2e1f58', '#54426b', '#a790af']}>
				<ScrollView showsVerticalScrollIndicator={false}>
					<Text className='text-3xl text-zinc-100 font-bold'>
						Change your belief with affirmation
					</Text>
          <View>
            {AFFIRMATION_GALLERY.map( (category) => (
              <AffirmationCategory
                key={category.title}
                title={category.title}
                preview={category.data}
              />
            ))}
          </View>
				</ScrollView>
			</AppGradient>
		</View>
	);
}

export default Affirmations