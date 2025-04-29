import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function index() {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-100.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      
      <View style={styles.topSection}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hello, Rahul!</Text>
          <Text style={styles.subGreeting}>Stay aware, help find missing people today.</Text>
        </View>

       
        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/images/SayHi!.gif')}
            style={styles.personImage}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Alert Volunteer Card */}
      <View style={styles.volunteerCard}>
        <Text style={styles.volunteerTitle}>Become an Alert Volunteer</Text>
        <Text style={styles.volunteerSubtitle}>
          Join our network of volunteers to help locate missing persons in your area.
        </Text>
        <TouchableOpacity style={styles.learnMoreButton}>
          <Text style={styles.learnMoreText}>Learn More</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    resizeMode: 'contain',
    opacity: 0.4,
    position: 'absolute',
    bottom: 0,
    width: '118%',
    height: 928,
    left: -15
    
  },
  topSection: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderStyle: 'solid',
    borderWidth: 1,
    borderCurve: 'circular',
    borderTopLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderEndWidth: 3,
    borderBottomWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subGreeting: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
  },
  imageContainer: {
    width: 150,
    height: 150,
    marginLeft: 0,
    marginTop: -5,
  },
  personImage: {
    width: '100%',
    height: '100%',
  },
  volunteerCard: {
    backgroundColor: '#ffe9e9',
    padding: 20,
    borderRadius: 20,
    marginTop: 30,
  },
  volunteerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  volunteerSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 15,
  },
  learnMoreButton: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  learnMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
