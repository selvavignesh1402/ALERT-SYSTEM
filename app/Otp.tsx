import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function OtpScreen() {
  const { phone } = useLocalSearchParams<{ phone?: string }>();
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputs = useRef<TextInput[]>([]);
  const router = useRouter();

  const handleOtpChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      Alert.alert('Invalid OTP', 'Please enter all 6 digits');
      return;
    }

    try {
      const response = await fetch('http://192.168.148.141:8080/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phoneNumber: phone,
          otp: enteredOtp,
        }),
      });

      const rawResponse = await response.text();
      console.log('Raw Response:', rawResponse);

      if (response.ok) {
        // Navigate to Home screen on success
        router.push({ pathname: '/(tabs)/Home' });
      } else {
        Alert.alert('Verification Failed', 'Incorrect OTP. Please try again.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      Alert.alert('OTP Verification Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Authentication.png')} style={styles.image} />
      <Text style={styles.title}>OTP Verification</Text>
      <Text style={styles.subtitle}>
        Enter the OTP sent to <Text style={styles.bold}>{phone}</Text>
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            ref={(ref) => {
              if (ref) inputs.current[idx] = ref;
            }}
            style={styles.otpInput}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, idx)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && !otp[idx] && idx > 0) {
                inputs.current[idx - 1]?.focus();
              }
            }}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Didn’t receive the OTP? <Text style={styles.resendLink}>Resend</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: 'center', backgroundColor: '#fff' },
  image: { width: 200, height: 200, alignSelf: 'center', marginBottom: 30 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', marginVertical: 10, color: '#777' },
  bold: { fontWeight: 'bold', color: '#000' },
  otpContainer: { flexDirection: 'row', justifyContent: 'space-evenly', marginVertical: 20 },
  otpInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 18,
    padding: 10,
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  resendText: { textAlign: 'center', marginTop: 20, color: '#777' },
  resendLink: { color: '#6C63FF', fontWeight: 'bold' },
});
