import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
  onPress: () => void;
  title: String;
  textStyle ?: String;
  containerStyle?: String;
}
const CustumButton = ({onPress, title, textStyle="", containerStyle=""}: CustomButtonProps) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress} className={`justify-center rounded-xl bg-white max-h-[100px] items-center h-14 ${containerStyle}`}>
        <Text className={`text-black font-semibold text-lg ${textStyle}`}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default CustumButton