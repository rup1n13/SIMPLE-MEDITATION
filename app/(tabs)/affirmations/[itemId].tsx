import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { AffirmationPreview } from '@/constants/Models/affirmationCategory';
import AFFIRMATION_GALLERY from '@/constants/affirmation-gallery';
import AppGradient from '@/components/AppGradient';
import AntDesign from '@expo/vector-icons/AntDesign';

const AffirmationsPratice = () => {

  const { itemId } = useLocalSearchParams()
  
  console.log('itemId:', itemId);

  const [ affirmation, setAfirmation ] = useState<AffirmationPreview>();

  const [sentences, setSentences] = useState<string[]>([]);

  useEffect(() => {

    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++){
      const affirmationData = AFFIRMATION_GALLERY[idx].data;

      const affirmationFound = affirmationData.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (affirmationFound) {
        setAfirmation(affirmationFound);

        const affirmationArray = affirmationFound.text.split('.');
        if(affirmationArray[affirmationArray.length - 1] === '') {
          affirmationArray.pop();
        }
        setSentences(affirmationArray);

        return
      }
      console.log('No affirmation found');
    }
  },[itemId])
  return (
		<View className='flex-1'>
			<ImageBackground source={affirmation?.image} className='flex-1' resizeMode='cover'>
        <AppGradient colors={[ 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.9)' ]}>
          
					<Pressable onPress={router.back} className='absolute top-12 left-5 z-10'>
						<AntDesign name='leftcircleo' size={50} color='white' />
          </Pressable>
          
          <ScrollView className='mt-20' showsVerticalScrollIndicator={false}>
            <View className='h-full justify-center'>
              <View className='h-4/5 justify-center'>
                {sentences.map((sentence, idx) => (
                  <Text
                    key={idx}
                    className='text-white text-center text-3xl font-bold mb-12'
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
              
            </View>
          </ScrollView>
				</AppGradient>
			</ImageBackground>
		</View>
	);
}

export default AffirmationsPratice