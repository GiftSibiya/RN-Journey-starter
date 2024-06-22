import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';

const Home = () => {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -26.007073,
            longitude: 28.183106,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={styles.textContainer}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});

export default Home;
