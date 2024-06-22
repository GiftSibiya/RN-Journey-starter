import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

// Images
import homeIcon from  "../../assets/icons/icons8-home-48.png"
import workIcon from "../../assets/icons/icons8-work-48.png"

const AddressConponent = ({title, address}) => {
  return (
    <View className='flex items-center my-2 h-[100px]'>
      <View className=' flex flex-row bg-yellow-400 rounded-xl h-[100px] w-[90%]'>
        <View className='bg-slate-500 flex flex-col justify-center items-center rounded-xl h-[100px] w-[150px]'>
        <Image source={title === 'Home Address' ? homeIcon : workIcon} className="w-12 h-12 color-white" />
          <Text className='text-white font-semibold text-lg'>{title}</Text>
        </View  >
        <View className='w-2' style={{width:200}}>
          <Text className='text-white text-center font-semibold text-lg w-[20px] ' style={styles.addressCon}>{address}</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  addressCon: {
    textAlign: 'center',
  },
});

export default AddressConponent