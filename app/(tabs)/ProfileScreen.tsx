import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const user = {
    name: 'Bruce Wayne',
    mobile: '+91 9876543210',
    location: 'Gotham City',
    email: 'bruce@wayneenterprises.com',
    joinDate: 'January 2020',
    profileImage: 'https://via.placeholder.com/150',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* <View style={styles.header}>
          <Text style={styles.heading}>Your Profile</Text>
        </View> */}

<ImageBackground
      source={require('../../assets/images/bg-100.png')} // adjust path as needed
      style={styles.background}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.profileCard}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.subtitle}>Member since {user.joinDate}</Text>
      </View>
    </ImageBackground>

        <View style={styles.infoSection}>
          <ProfileInfo label="📱 Mobile" value={user.mobile} />
          <ProfileInfo label="📧 Email" value={user.email} />
          <ProfileInfo label="📍 Location" value={user.location} />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

type InfoProps = {
  label: string;
  value: string;
};

const ProfileInfo = ({ label, value }: InfoProps) => (
  <View style={styles.infoCard}>
    <Text style={styles.infoLabel}>{label}</Text>
    <Text style={styles.infoValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDEEF4',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 30,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#472D30',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    opacity: 0.2, // Adjust transparency (0 = fully transparent, 1 = fully visible)
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    width: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#777',
  },
  infoSection: {
    width: '100%',
    marginTop: 30,
  },
  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#FFC0CB',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FF69B4',
    paddingVertical: 14,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 16,
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
