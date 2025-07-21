import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const SignupScreen: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Add your signup logic here
    console.log('Signing up with:', fullname, phoneNumber, password);
    setSubmitted(true);
  };

  const handleClear = () => {
    setFullname('');
    setPhoneNumber('');
    setPassword('');
    setConfirmPassword('');
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new account</Text>

      <TextInput
        placeholder="Fullname"
        value={fullname}
        onChangeText={setFullname}
        style={styles.input}
      />

      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        style={styles.input}
        keyboardType="phone-pad"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      </View>

      {submitted && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Submitted Information:</Text>
          <Text>Fullname: {fullname}</Text>
          <Text>Phone Number: {phoneNumber}</Text>
          <Text>Password: {password}</Text>
        </View>
      )}
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2e86de',
    paddingVertical: 14,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  clearButton: {
    backgroundColor: '#aaa',
    marginRight: 0,
    marginLeft: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  output: {
    marginVertical: 16,
    padding: 12,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
  },
  outputTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
  },
});