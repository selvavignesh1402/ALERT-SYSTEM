// app/index.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import { useRouter } from 'expo-router';


const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
    const router = useRouter();

    const handleGetStarted = () => {
      router.replace('/Home'); 
    };


  return (
    <Swiper loop={false} showsPagination={true} dotColor="#ccc" activeDotColor="#000">
      {/* Slide 1 */}
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/clouds.png')}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <Image
          source={require('../../assets/images/bg222.png')}
          style={styles.frontImage}
          resizeMode="contain"
        />
        <Text style={styles.quote}>Safety is within your hands</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Slide 2 */}
      <View style={styles.slide}>
        <Image
          source={require('../../assets/images/clouds.png')}
          style={styles.bgImage}
          resizeMode="cover"
        />
        <Image
          source={require('../../assets/images/bg666.png')}
          style={styles.frontImage}
          resizeMode="contain"
        />
        <Text style={styles.quote}>Stay informed. Stay secure.</Text>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  bgImage: {
    position: 'absolute',
    width: width,
    height: height,
    opacity: 0.2,
  },
  frontImage: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: 30,
  },
  quote: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
