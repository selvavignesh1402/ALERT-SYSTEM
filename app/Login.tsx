import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Easing } from 'react-native';
import { Snackbar } from 'react-native-paper';
import { router } from 'expo-router';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing as ReanimatedEasing,
  runOnJS,
} from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');
  const [snackbarError, setSnackbarError] = useState(false);

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-30);

  const showSnackbar = (message: string, isError: boolean = false) => {
    setSnackbarMsg(message);
    setSnackbarError(isError);
    setSnackbarVisible(true);

    // Animate in
    opacity.value = withTiming(1, {
      duration: 300,
    });
    translateY.value = withTiming(0, {
      duration: 300,
    });

    // Auto dismiss after 3 seconds
    setTimeout(() => {
    opacity.value = withTiming(0, { duration: 300 }, () => {
      // Safely update state after animation completes
      runOnJS(setSnackbarVisible)(false);
    });
    translateY.value = withTiming(-30, { duration: 300 });
  }, 3000);
};

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: translateY.value }],
    };
  });

  const handleGetOtp = async () => {
    if (!phone || phone.length < 10) {
      showSnackbar('Please enter a valid phone number', true);
      return;
    }

    try {
      const response = await fetch(`http://192.168.148.141:8080/api/otp/generate?phoneNumber=${phone}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const responseText = await response.text();

      if (!response.ok) {
        if (response.status === 409 && responseText.includes('User already present')) {
          showSnackbar('User already registered and verified', true);
          return;
        }
        throw new Error(responseText || 'Failed to send OTP');
      }

      showSnackbar('OTP sent successfully');
      router.push({ pathname: '/Otp', params: { phone } });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      showSnackbar(errorMessage, true);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Authentication.png')} style={styles.image} />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>We will send you a One Time Password on this mobile number</Text>

      <Text style={styles.label}>Mobile number</Text>
      <TextInput
        style={styles.input}
        placeholder="+91-1234-567-891"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        maxLength={13}
      />

      <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Don’t have an account? <Text style={styles.signupLink}>Sign Up</Text>
      </Text>

      {/* Custom Animated Snackbar */}
      {snackbarVisible && (
        <Animated.View style={[styles.snackbarContainer, animatedStyle]}>
          <View style={[
            styles.snackbar,
            { backgroundColor: snackbarError ? '#D32F2F' : '#4CAF50' },
          ]}>
            <MaterialIcons
              name={snackbarError ? 'error-outline' : 'check-circle-outline'}
              size={24}
              color="#fff"
              style={{ marginRight: 10 }}
            />
            <Text style={styles.snackbarText}>{snackbarMsg}</Text>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#777',
  },
  label: {
    marginLeft: 10,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    marginVertical: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#777',
  },
  signupLink: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },

  // Snackbar Styles
  snackbarContainer: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 999,
  },
  snackbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 16,
    minWidth: '60%',
    maxWidth: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    justifyContent: 'center',
  },
  snackbarText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});