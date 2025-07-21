import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Say Hello to your new app</Text>

      <Link href="/login" asChild>
        <Pressable style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </Link>

      <Link href="/signup" asChild>
        <Pressable style={styles.signupButton}>
          <Text style={styles.buttonText}>Signup</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20, 
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  signupButton: {
    width: 300,
    height: 50,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    fontWeight: 'bold',
    },
  
});