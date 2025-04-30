import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';

export default function index() {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-100.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>


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

      {/* Alert Stats Section */}
<View style={styles.alertStatsContainer}>
  <Text style={styles.sectionTitle}>Your Impact</Text>
  <View style={styles.statsRow}>
    <View style={[styles.statCard, { backgroundColor: '#fdecef' }]}>
      <Text style={styles.statNumber}>12</Text>
      <Text style={styles.statLabel}>Active Alerts</Text>
    </View>
    <View style={[styles.statCard, { backgroundColor: '#eafaf1' }]}>
      <Text style={styles.statNumber}>28</Text>
      <Text style={styles.statLabel}>Closed Cases</Text>
    </View>
    <View style={[styles.statCard, { backgroundColor: '#e8f0fe' }]}>
      <Text style={styles.statNumber}>3</Text>
      <Text style={styles.statLabel}>Nearby Alerts</Text>
    </View>
  </View>
</View>

{/* About Platform Section */}
<View style={styles.aboutContainer}>
  <Text style={styles.sectionTitle}>How We Help</Text>
  <View style={styles.aboutCard}>
    <Image source={require('../../assets/images/Searching.png')} style={styles.aboutImage} />
    <Text style={styles.aboutText}>We use technology and a community-driven approach to search for missing persons more efficiently.</Text>
  </View>
  <View style={styles.aboutCard2}>
    <Image source={require('../../assets/images/Mental Health.png')} style={styles.aboutImage} />
    <Text style={styles.aboutText}>Our platform supports families emotionally by connecting them with the right resources.</Text>
  </View>
  <View style={styles.aboutCard}>
    <Image source={require('../../assets/images/Mobile-Marketing.png')} style={styles.aboutImage} />
    <Text style={styles.aboutText}>We spread alerts through multiple digital channels for faster community reach.</Text>
  </View>
</View>
</ScrollView>
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
  scrollContainer: {
    paddingBottom: 50,
  },  
  backgroundImage: {
    resizeMode: 'contain',
    opacity: 0.2,
    position: 'absolute',
    bottom: 0,
    width: '118%',
    height: 948,
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
    width: '113%',
    height: '110%',
    left : -10,
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
  alertStatsContainer: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
    marginTop: 4,
    textAlign: 'center',
  },
  aboutContainer: {
    marginTop: 30,
  },
  aboutCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  aboutCard2: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  aboutImage: {
    width: 120,
    height: 140,
    marginRight: -8,
    borderRadius: 10,
  },
  aboutText: {
    flex: 1,
    fontSize: 14,
    fontStyle:'italic',
    fontWeight:'condensed',
    color: '#333',
  },
});
