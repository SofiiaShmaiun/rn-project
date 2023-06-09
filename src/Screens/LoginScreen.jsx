import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./RegistrationScreen";

export default function RegistrationScreen({ onRegister }) {
  const [isShowPassword, setisShowPassword] = useState(true);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <Image
        source={require("../img/background.jpg")}
        style={styles.backgroundImage}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View styles={styles.formContainer}>
            <Text style={{ ...styles.header, ...loginStyles.header }}>
              Увійти
            </Text>

            <TextInput
              onBlur={() => setEmailFocused(false)}
              onFocus={() => setEmailFocused(true)}
              style={
                isEmailFocused ? styles.focusedTextInput : styles.textInput
              }
              onChangeText={setEmail}
              value={email}
              placeholder="Адреса електронної пошти"
              type="email"
              name="email"
            />
            <TextInput
              onBlur={() => setPasswordFocused(false)}
              onFocus={() => setPasswordFocused(true)}
              style={
                isPasswordFocused ? styles.focusedTextInput : styles.textInput
              }
              onChangeText={setPassword}
              value={password}
              placeholder="Пароль"
              secureTextEntry={isShowPassword}
              type="password"
              name="password"
            />

            <Pressable
              onPress={() => {
                setisShowPassword(!isShowPassword);
              }}
              style={loginStyles.hidePasswordButton}
            >
              <Text
                styles={styles.hidePasswordText}
                style={{ color: "#1B4371" }}
              >
                Показати
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Home")}
              style={loginStyles.loginButton}
            >
              <Text
                styles={loginStyles.loginButtonText}
                style={{ color: "white" }}
              >
                Увійти
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Registration")}
              style={loginStyles.registrationButton}
            >
              <Text
                styles={loginStyles.registrationButtonText}
                style={{ color: "#1B4371" }}
              >
                Немає акаунту?{" "}
                <Text style={{ textDecorationLine: "underline" }}>
                  Зареєструватися
                </Text>
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const loginStyles = StyleSheet.create({
  header: {
    marginVertical: 32,
  },
  hidePasswordButton: {
    position: "absolute",
    top: 180,
    left: 270,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    height: 51,
    width: 343,
    marginTop: 27,
    marginBottom: 16,
  },
  loginButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
  },
  registrationButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  registrationButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
  },
});
