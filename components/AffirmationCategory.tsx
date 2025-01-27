import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { AffirmationPreview } from '@/constants/Models/affirmationCategory';
import { Link } from 'expo-router';

interface AffirmationCategoryProps{
  title: string;
  preview:AffirmationPreview[];
}
const AffirmationCategory = ({title, preview}:AffirmationCategoryProps) => {
  return (
    <View className='my-4'>
      <View className='mb-2'>
        <Text className='text-white font-bold text-xl'>{title}</Text>
      </View>

      <View className='space-y-2'>
        <FlatList
          data={preview}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}` as any} asChild>
              <Pressable onPress={() => console.log((item.id))}>
                <View className='h-36 w-32 rounded-md mr-4'>
                  <Image source={item.image} resizeMode='cover' className='w-full h-full'/>
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  )
}

export default AffirmationCategory