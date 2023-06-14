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
} from "react-native";

export default function RegistrationScreen({ onRegister }) {
  const [isShowPassword, setisShowPassword] = useState(true);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View styles={styles.formContainer}>
            <Text style={styles.header}>Увійти</Text>

            <TextInput
              onBlur={() => setEmailFocused(false)}
              onFocus={() => setEmailFocused(true)}
              style={
                isEmailFocused ? styles.focusedTextInput : styles.textInput
              }
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
              placeholder="Пароль"
              secureTextEntry={isShowPassword}
              type="password"
              name="password"
            />

            <Pressable
              onPress={() => {
                setisShowPassword(!isShowPassword);
              }}
              style={styles.hidePasswordButton}
            >
              <Text styles={styles.hidePasswordText} color="#1B4371">
                Показати
              </Text>
            </Pressable>

            <Pressable onPress={() => null} style={styles.loginButton}>
              <Text styles={styles.loginButtonText} color="#FFFFFF">
                Увійти
              </Text>
            </Pressable>

            <Pressable
              onPress={() => onRegister()}
              style={styles.registrationButton}
            >
              <Text styles={styles.registrationButtonText} color="#1B4371">
                Немає акаунту? Зареєструватися
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "67%",
    alignItems: "center",
  },
  formContainer: {
    flex: 1,
  },
  header: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 1.17,
    color: "#212121",
    marginVertical: 32,
    borderRadius: 6,
    textAlign: "center",
    fontSize: 30,
    fontWeight: 700,
  },
  textInput: {
    height: 50,
    width: 343,
    paddingVertical: 16,
    paddingLeft: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    borderRadius: 8,
    marginBottom: 16,
    color: "#BDBDBD",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  hidePasswordButton: {
    position: "absolute",
    top: 180,
    left: 250,
  },
  hidePasswordText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
    backgroundColor: "transparent",
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

  focusedTextInput: {
    height: 50,
    width: 343,
    paddingVertical: 16,
    paddingLeft: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    borderWidth: 2,
    borderColor: "#FF6C00",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
  },
});
