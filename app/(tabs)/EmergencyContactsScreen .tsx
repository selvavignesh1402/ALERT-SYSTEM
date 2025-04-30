import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const emergencyContacts = [
  { service: 'Police', number: '100', icon: 'shield-checkmark-outline' },
  { service: 'Ambulance', number: '108', icon: 'medkit-outline' },
  { service: 'Fire Brigade', number: '101', icon: 'flame-outline' },
  { service: 'Disaster Mgmt', number: '1078', icon: 'earth-outline' },
  { service: 'Women Helpline', number: '1091', icon: 'female-outline' },
  { service: 'Child Helpline', number: '1098', icon: 'happy-outline' },
  { service: 'Senior Citizens', number: '1291', icon: 'accessibility-outline' },
];

const EmergencyContactsScreen = () => {
  const dialNumber = (number: string) => {
    Linking.openURL(`tel:${number}`);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.category}>Emergency • All India</Text>
        <Text style={styles.title}>Emergency Services</Text>
        <Text style={styles.sub}>Tap a number to call directly</Text>
        <Ionicons name="call-outline" size={34} color="#1a1a1a" style={styles.headerIcon} />
      </View>

      {/* Emergency Cards */}
      <FlatList
        data={emergencyContacts}
        keyExtractor={(item) => item.number}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => dialNumber(item.number)}
          >
            <Ionicons name={item.icon as any} size={36} color="#444" style={styles.icon} />
            <Text style={styles.service}>{item.service}</Text>
            <Text style={styles.number}>{item.number}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3f3',
  },
  headerContainer: {
    backgroundColor: 'rgba(247,213,211,255)',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    padding: 24,
    paddingTop: 60,
    alignItems: 'center',
    marginBottom: 20,
  },
  category: {
    fontSize: 14,
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    marginTop: 4,
  },
  sub: {
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  headerIcon: {
    marginTop: 10,
  },
  list: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    margin: 8,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginBottom: 10,
  },
  service: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  number: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
});

export default EmergencyContactsScreen;
