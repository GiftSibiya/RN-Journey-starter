import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {

  const handleLoginPress = () => {
    navigation.navigate('mainStack');
    console.log("Home Buttom Clicked")
  };

  return (
    <View className='flex-1 items-center justify-center h-[300p] bg-slate-700 '>
        <View className='h-[70%] w-[90%] bg-white rounded-xl'>

            <View className='mb-[100px]'>
                <Text className='text-3xl'> Welcome </Text>
            </View>

            <View className='flex items-center my-2'>
                <TextInput className='border-[1px] w-[80%] h-[40px] rounded-xl p-2 mb-2' placeholder='Email'></TextInput>
                <TextInput className='border-[1px] w-[80%] h-[40px] rounded-xl p-2 mb-2' placeholder='Password'></TextInput>
            </View>

            <View className='flex items-center mb-2'>
                <View className='flex items-center justify-center rounded-2xl bg-slate-600 w-[200px] h-[50px]'>
                    <TouchableOpacity onPress={handleLoginPress}>
                        <Text className='text-white text-lg'>Login</Text>
                    </TouchableOpacity>
                </View>
              
            </View>

            <View className='flex items-center '>
                  <View className='flex flex-row'>
                    <Text>Don't have an account </Text>
                    <TouchableOpacity onPress={handleLoginPress}>
                        <Text className='text-blue-600'>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Login