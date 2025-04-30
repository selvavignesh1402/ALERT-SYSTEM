import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function index() {
  return (
    <View style={styles.container}>
     
      <Image
        source={require('../../assets/images/clouds.png')} 
        style={styles.backgroundImage}
        resizeMode="contain"
      />

   
      <Image
        source={require('../../assets/images/bg222.png')} 
        style={styles.mainImage}
        resizeMode="contain"
      />

    
      <Text style={styles.quote}>“Safety is within your hands”</Text>

     
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    width: width * 1.2,
    height: height * 0.5,
    top: -100,
    opacity: 0.2,
  },
  mainImage: {
    width: width * 0.8,
    height: height * 0.4,
    marginBottom: -80,
  },
  quote: {
    fontSize: 22,
    fontWeight: '600',
    color: '#472D30',
    textAlign: 'center',
    marginTop: 100,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF69B4',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop:80,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
