import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleLogin = () => {
    // Add your login logic here
    console.log('Logging in with:', email, password);
    setSubmitted(true);
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setSubmitted(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.clearButton]} onPress={handleClear}>
          <Text style={styles.buttonText}>Clear</Text>
        </Pressable>
      </View>

      {submitted && (
        <View style={styles.output}>
          <Text style={styles.outputTitle}>Submitted Information:</Text>
          <Text>Email: {email}</Text>
          <Text>Password: {password}</Text>
        </View>
      )}

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      <Pressable style={styles.button1} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

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
    fontWeight: 'bold',
    paddingVertical: 14,
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
  button1: {
    backgroundColor: '#87CEEB',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 16,
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
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#888',
  },
});