import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen name="index" options={{
        headerTitle: "Home",
        headerShown: false
      }}/>
      <Stack.Screen name="login" options={{
        headerTitle: ""
      }}/>
      <Stack.Screen name="signup" options={{
        headerTitle: ""
      }}/>
    </Stack>
  );
}
