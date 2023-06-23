import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Svg, { Path } from "react-native-svg";

export default function RegistrationScreen() {
  const [isShowPassword, setisShowPassword] = useState(true);
  const [isLoginFocused, setLoginFocused] = useState(false);
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [login, setLogin] = useState(null);
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
          <View style={styles.photoContainer}>
            <Image
              style={styles.photoCard}
              source={require("../img/userPhoto.jpg")}
            />
            <Pressable style={styles.addPhotoButton}>
              <Svg
                width={40}
                height={40}
                viewBox="0 0 32 32"
                style={styles.addIcon}
              >
                <Path
                  fill="#fff"
                  stroke="#e8e8e8"
                  stroke-width="0.8649"
                  stroke-miterlimit="4"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  style="fill: var(--color1, #fff); stroke: var(--color2, #e8e8e8)"
                  d="M23.339 8.661c4.053 4.053 4.053 10.624 0 14.677s-10.624 4.053-14.677 0c-4.053-4.053-4.053-10.624 0-14.677s10.624-4.053 14.677 0z"
                ></Path>
                <Path
                  fill="#bdbdbd"
                  style="fill: var(--color3, #bdbdbd)"
                  d="M12.331 11.719l-0.612 0.612 3.669 3.669-3.669 3.669 0.612 0.612 3.669-3.669 3.669 3.669 0.612-0.612-3.669-3.669 3.669-3.669-0.612-0.612-3.669 3.669-3.669-3.669z"
                ></Path>
              </Svg>
            </Pressable>
          </View>
          <View styles={styles.formContainer}>
            <Text style={styles.header}>Реєстрація</Text>
            <TextInput
              onBlur={() => setLoginFocused(false)}
              onFocus={() => setLoginFocused(true)}
              style={
                isLoginFocused ? styles.focusedTextInput : styles.textInput
              }
              onChangeText={setLogin}
              value={login}
              placeholder="Логін"
              type="text"
              name="login"
            />
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
              style={styles.hidePasswordButton}
            >
              <Text
                styles={styles.hidePasswordText}
                style={{ color: "#1B4371" }}
              >
                Показати
              </Text>
            </Pressable>

            <Pressable
              style={styles.registrationButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text
                styles={styles.registrationButtonText}
                style={{ color: "white" }}
              >
                Зареєструватися
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Login")}
              style={styles.logInButton}
            >
              <Text
                styles={styles.registrationButtonText}
                style={{ color: "#1B4371" }}
              >
                Вже є акаунт? Увійти
              </Text>
            </Pressable>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
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
  photoContainer: {
    position: "relative",
    top: "-12%",
    marginBottom: -80,
  },
  photoCard: {
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
  },
  addIcon: {
    strokeWidth: 1,
    stroke: "#e8e8e8",
    fill: "currentColor",
  },
  addPhotoButton: {
    position: "relative",
    top: "-25%",
    left: "28%",
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
    marginBottom: 32,
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
    top: 215,
    left: 270,
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
  registrationButton: {
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
  registrationButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "white",
  },
  logInButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  logInButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
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
