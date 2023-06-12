// import { ImageBackground } from "react-native-web";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import { useFonts } from "expo-font";
import { useState } from "react";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Inter-Medium": require("./src/assets/fonts/Inter/Inter-Medium.ttf"),
  });

  const [login, setLogin] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  const handleLogIn = () => {
    setLogin(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/img/background.jpg")}
        resizeMode="cover"
        style={styles.image}
      >
        {login === false ? <RegistrationScreen onLogin={handleLogIn} /> : <LoginScreen />}
      </ImageBackground>
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
