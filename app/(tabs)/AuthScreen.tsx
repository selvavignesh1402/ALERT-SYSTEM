// import React, { useState } from 'react';
// import {
//   View, Text, TextInput, StyleSheet, TouchableOpacity, Alert
// } from 'react-native';
// import axios from 'axios';

// export default function AuthScreen() {
//   const [isSignup, setIsSignup] = useState(true);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('CITIZEN');

//   const handleAuth = async () => {
//     try {
//       const endpoint = isSignup ? '/signup' : '/login';
//       const payload = isSignup
//         ? { name, email, password, role }
//         : { email, password };

//       const res = await axios.post(`http://<YOUR-IP>:8080/api/auth${endpoint}`, payload);
//       Alert.alert('Success', isSignup ? 'Registered' : 'Logged In');
//       console.log(res.data);
//     } catch (err: any) {
//       Alert.alert('Error', err.response?.data || 'Something went wrong');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{isSignup ? 'Sign Up' : 'Login'}</Text>
//       {isSignup && (
//         <TextInput
//           placeholder="Name"
//           value={name}
//           onChangeText={setName}
//           style={styles.input}
//         />
//       )}
//       <TextInput
//         placeholder="Email"
//         value={email}
//         onChangeText={setEmail}
//         autoCapitalize="none"
//         style={styles.input}
//       />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//         style={styles.input}
//       />

//       {isSignup && (
//         <View style={styles.roleContainer}>
//           <Text style={styles.label}>Select Role:</Text>
//           <TouchableOpacity
//             onPress={() => setRole('CITIZEN')}
//             style={[styles.roleButton, role === 'CITIZEN' && styles.roleSelected]}
//           >
//             <Text>CITIZEN</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => setRole('OFFICER')}
//             style={[styles.roleButton, role === 'OFFICER' && styles.roleSelected]}
//           >
//             <Text>OFFICER</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       <TouchableOpacity style={styles.button} onPress={handleAuth}>
//         <Text style={styles.buttonText}>{isSignup ? 'Sign Up' : 'Login'}</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
//         <Text style={{ marginTop: 10, color: '#555' }}>
//           {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: 'center', padding: 20 },
//   title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
//   input: {
//     borderBottomWidth: 1,
//     marginBottom: 15,
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#111827',
//     padding: 14,
//     borderRadius: 8,
//     alignItems: 'center',
//     marginTop: 10
//   },
//   buttonText: { color: '#fff', fontWeight: 'bold' },
//   roleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//     gap: 10,
//   },
//   label: {
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
//   roleButton: {
//     padding: 10,
//     borderRadius: 6,
//     borderWidth: 1,
//     borderColor: '#ccc',
//   },
//   roleSelected: {
//     backgroundColor: '#d1fae5',
//     borderColor: '#10b981',
//   },
// });
