import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, ImageBackground } from 'react-native';

export default function AlertScreen() {
  const [expoPushToken, setExpoPushToken] = useState<string>('');

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      if (token) {
        setExpoPushToken(token);
      } else {
        console.warn('No push token received.');
      }
    });
  }, []);

  async function registerForPushNotificationsAsync() {
    console.log('[Push Notification] Checking device...');
    if (!Device.isDevice) {
      Alert.alert('Error', 'Must use a physical device for push notifications');
      console.warn('Push notifications require a physical device.');
      return;
    }

    console.log('[Push Notification] Requesting permissions...');
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      Alert.alert('Error', 'Permission not granted for push notifications');
      console.warn('Push notification permissions not granted.');
      return;
    }

    try {
      const projectId = 'ea40bb07-7b12-41d4-8a1b-de36f4048d60'; // Replace with your actual project ID
      console.log('[Push Notification] Getting Expo token with projectId:', projectId);
      const token = (
        await Notifications.getExpoPushTokenAsync({ projectId })
      ).data;
      console.log('[Push Notification] Token acquired:', token);
      return token;
    } catch (error) {
      console.error('Error getting push token:', error);
      Alert.alert('Error', 'Failed to get push token. See console for details.');
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/images/bg-100.png')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
    >
      <View>
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>🚨 ALERT SECTION</Text>
        <Text>Expo Push Token:</Text>
        <Text selectable>{expoPushToken || 'Fetching token...'}</Text>
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
    width: '120%',
    height: 928,
    left: -20,
  },
});
