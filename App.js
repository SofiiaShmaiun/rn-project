import { useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, View, Image } from "react-native";
import RegistrationScreen from "./src/Screens/RegistrationScreen";
import LoginScreen from "./src/Screens/LoginScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./src/assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto/Roboto-Bold.ttf"),
    "Inter-Medium": require("./src/assets/fonts/Inter/Inter-Medium.ttf"),
  });

  const [isUserRegistered, setIsUserRegistered] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  const handleLogin = () => {
    setIsUserRegistered(true);
  };

  const handleRegister = () => {
    setIsUserRegistered(false);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("./src/img/background.jpg")}
        style={styles.backgroundImage}
      />
      {isUserRegistered === false ? (
        <RegistrationScreen onLogin={handleLogin} />
      ) : (
        <LoginScreen onRegister={handleRegister} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
});
