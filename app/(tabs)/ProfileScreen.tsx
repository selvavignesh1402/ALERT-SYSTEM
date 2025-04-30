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


import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function ProfileScreen() {
  const user = {
    name: 'Rahul',
    mobile: '+91 9876543210',
    location: 'Coimbatore',
    email: 'Rahul123@gmail.com',
    joinDate: 'January 2020',
    profileImage: '../../assets/images/Frame-27.png',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/bg-100.png')}
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* Greeting & Edit Button */}
          {/* <View style={styles.topSection}>
            <View>
              <Text style={styles.greeting}>Welcome back,</Text>
              <Text style={styles.name}>{user.name.split(' ')[0]}!</Text>
            </View>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="settings-outline" size={24} color="#fff" />
            </TouchableOpacity>
          </View> */}

          {/* Profile Card */}
          <View style={styles.profileCard}>
            <Image source={require('../../assets/images/Frame-27.png')} style={styles.profileImage} />
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.subtitle}>Member since {user.joinDate}</Text>
          </View>

          {/* Info Cards */}
          <View style={styles.infoSection}>
            <ProfileInfo label="Mobile" value={user.mobile} icon="phone" />
            <ProfileInfo label="Email" value={user.email} icon="email" />
            <ProfileInfo label="Location" value={user.location} icon="map-marker" />
          </View>

          {/* Action Buttons */}
          <TouchableOpacity style={styles.editProfileButton}>
            <Ionicons name="create-outline" size={20} color="#000" style={styles.iconLeft} />
            <Text style={styles.editProfileText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutButton}>
            <MaterialCommunityIcons name="logout" size={20} color="#fff" style={styles.iconLeft} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Reusable Info Row Component
interface ProfileInfoProps {
  label: string;
  value: string;
  icon: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({ label, value, icon }) => (
  <View style={styles.infoCard}>
    <MaterialCommunityIcons name={icon as any} size={20} color="#666" style={styles.infoIcon} />
    <View>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.1,
    width: '120%',
    height: 1000,
    left: -15,
    bottom: 0,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 100,
  },
  topSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '500',
    color: '#ccc',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  editButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 12,
    borderRadius: 50,
  },
  profileCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 25,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.3)',
  },
  infoSection: {
    marginTop: 25,
  },
  infoCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoIcon: {
    marginRight: 12,
  },
  infoLabel: {
    fontSize: 14,
    color: '#888',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  editProfileButton: {
    marginTop: 20,
    backgroundColor: '#f0f0f0',
    paddingVertical: 14,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfileText: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  logoutButton: {
    marginTop: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 14,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  iconLeft: {
    marginRight: 10,
  },
});