import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import AddressConponent from '../../components/Account/AddressConponent'

const Account = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='bg-slate-500 h-[200px] mb-[150px]'>
        <View className='absolute top-[150px] flex items-center justify-center 2-full h-[150px] w-full'>
          <View className='border-2 mb-[20px] rounded-full h-[150px] w-[150px]'></View>
          <Text className='font-semibold text-3xl'>User Name Here</Text>
          <Text className='text-xl'>Ebony Park</Text>
          <TouchableOpacity className='bg-yellow-400 p-2 rounded-md my-2'>
            <Text className='text-lg text-white font-semibold'>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className=''>
        <View className='my-[20px] '>
          <AddressConponent title={"Home Address"} address={"123 Random Street, Dreamville"}/>
          <AddressConponent title={"Work Address"} address={"404 Null Street, Imaginary Land"}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Account