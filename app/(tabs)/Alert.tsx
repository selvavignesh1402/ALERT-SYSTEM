import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import * as Location from 'expo-location';
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  ImageBackground,
  ScrollView,
  Animated,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

export default function AlertScreen() {
  const [expoPushToken, setExpoPushToken] = useState<string>('');
  const [userLocation, setUserLocation] = useState({ latitude: 37.78825, longitude: -122.4324 });
  const [alerts, setAlerts] = useState([
    {
      id: '1',
      name: 'Aarav Sharma',
      lastSeen: 'Delhi, Apr 25',
      age: 12,
      latitude: 28.7041,
      longitude: 77.1025,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/000/240/169/small_2x/boy-with-glasses.jpg',
    },
    {
      id: '2',
      name: 'Meera Patel',
      lastSeen: 'Mumbai, Apr 23',
      age: 8,
      latitude: 19.0760,
      longitude: 72.8777,
      image: 'https://static.vecteezy.com/system/resources/previews/000/241/073/non_2x/smart-boy-with-glasses-vector.jpg', 
    },
  ]);
  const [selectedPerson, setSelectedPerson] = useState<any>(null);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();

    registerForPushNotificationsAsync().then(token => {
      if (token) {
        setExpoPushToken(token);
      }
    });
  }, []);

  async function registerForPushNotificationsAsync() {
    console.log('[Push Notification] Checking device...');
    if (!Device.isDevice) {
      Alert.alert('Error', 'Must use a physical device for push notifications');
      return;
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Error', 'Permission not granted for push notifications');
      return;
    }

    try {
      const projectId = 'ea40bb07-7b12-41d4-8a1b-de36f4048d60';
      const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
      console.log('[Push Notification] Token acquired:', token);
      return token;
    } catch (error) {
      console.error('Error getting push token:', error);
      Alert.alert('Error', 'Failed to get push token.');
    }
  }

  const renderAlertCard = ({ item }: any) => {
    const scaleAnim = useRef(new Animated.Value(0.95)).current;

    useEffect(() => {
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }).start();
    }, []);

    return (
      <Animated.View
        key={item.id}
        style={[{ transform: [{ scale: scaleAnim }] }, styles.cardContainer]}
      >
        <View style={styles.alertCard}>
          <Image source={{ uri: item.image }} style={styles.profileImage} />

          <View style={styles.cardContent}>
            <Text style={styles.alertName}>{item.name}</Text>

            <View style={styles.detailRow}>
              <Ionicons name="person-outline" size={14} color="#6b7280" />
              <Text style={styles.alertDetails}>Age: {item.age}</Text>
            </View>

            <View style={styles.detailRow}>
              <Ionicons name="location-outline" size={14} color="#6b7280" />
              <Text style={styles.alertDetails}>Last Seen: {item.lastSeen}</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg-100.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View style={styles.overlay} />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* <Text style={styles.header}>🚨 ALERT SECTION</Text>
        <Text style={styles.subheader}>
          Stay updated on missing person alerts in your area.
        </Text> */}

        {/* Map Section */}
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation
            followsUserLocation
          >
            <Marker coordinate={userLocation} title="Your Location" pinColor="blue" />

            {alerts.map((alert) => (
              <Marker
                key={alert.id}
                coordinate={{ latitude: alert.latitude, longitude: alert.longitude }}
                title={alert.name}
                description={`Last seen: ${alert.lastSeen}`}
                pinColor="red"
                onPress={() => setSelectedPerson(alert)}
              />
            ))}
          </MapView>

          {/* Marker Popup */}
          {selectedPerson && (
            <View style={styles.popupCard}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedPerson(null)}>
                <Ionicons name="close" size={18} color="#fff" />
              </TouchableOpacity>

              <Image source={{ uri: selectedPerson.image }} style={styles.popupImage} />
              <Text style={styles.popupName}>{selectedPerson.name}</Text>
              <Text style={styles.popupDetail}>Age: {selectedPerson.age}</Text>
              <Text style={styles.popupDetail}>Last Seen: {selectedPerson.lastSeen}</Text>
            </View>
          )}
        </View>

        {/* Alerts List */}
        {alerts.map((item) => renderAlertCard({ item }))}

      </ScrollView>

      {/* Floating Action Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity style={styles.fab} onPress={() => Alert.alert("Report Missing Person")}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    resizeMode: 'contain',
    opacity: 8,
    position: 'absolute',
    bottom: 0,
    width: '118%',
    height: 928,
    left: -15
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  scrollContent: {
    paddingTop: 70,
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: '#b91c1c',
    textAlign: 'center',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  subheader: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  mapContainer: {
    height: 280,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffdd',
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 6,
    gap: 12,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#ef4444',
  },
  cardContent: {
    flex: 1,
  },
  cardContainer: {
    opacity: 1,
  },
  alertName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#b91c1c',
    marginBottom: 6,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginVertical: 2,
  },
  alertDetails: {
    fontSize: 14,
    color: '#4b5563',
  },
  popupCard: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 6,
    alignItems: 'center',
  },
  popupImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#ef4444',
  },
  popupName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#b91c1c',
    marginBottom: 6,
  },
  popupDetail: {
    fontSize: 14,
    color: '#4b5563',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 16,
    zIndex: 1,
    backgroundColor: '#ef4444',
    borderRadius: 18,
    padding: 6,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
  fab: {
    backgroundColor: '#b91c1c',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
});