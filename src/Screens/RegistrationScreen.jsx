import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  View,
  Image,
  Pressable,
} from "react-native";

import Svg, { Path } from "react-native-svg";

export default function RegistrationScreen({ onLogin }) {
  const [isShowPassword, setisShowPassword] = useState(false);
  const [imageURl, setImageURL] = useState("");

  const handleAddPhoto = () => {
    setImageURL("../img/userPhoto");
    сonsole.log(imageURl);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Реєстрація</Text>
        <View style={styles.formSection}>
          <TextInput
            style={styles.inputStyles}
            placeholder="Логін"
            // value={text}
            // onChangeText={setText}
          />
          <TextInput
            style={styles.inputStyles}
            placeholder="Адреса електронної пошти"
            // value={text}
            // onChangeText={setText}
          />
          <TextInput
            style={styles.inputStyles}
            placeholder="Пароль"
            // value={text}
            // onChangeText={setText}
            secureTextEntry={!isShowPassword}
          />
          <Pressable
            style={styles.hidePasswordButton}
            onPressIn={() => {
              setisShowPassword(!isShowPassword);
            }}
          >
            <Text style={styles.hidePasswordText}>Показати</Text>
          </Pressable>

          <Pressable
            style={styles.registrationButton}
            // onPress={onPressLearnMore}
          >
            <Text style={styles.registrationButtonText}>Зареєструватися</Text>
          </Pressable>
          <Pressable style={styles.logInButton} onPressIn={onLogin}>
            <Text style={styles.logInButtonText}>Вже є акаунт? Увійти</Text>
          </Pressable>
        </View>
      </ScrollView>
      {/* <Image style={styles.photoCard} source={require(imageURl)} /> */}
      <Pressable style={styles.addPhotoButton} onPressIn={handleAddPhoto}>
        <Svg width={25} height={25} viewBox="0 0 32 32" style={styles.addIcon}>
          <Path
            fill="#fff"
            stroke="#ff6c00"
            stroke-width="1.28"
            stroke-miterlimit="4"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            style="fill: var(--color1, #fff); stroke: var(--color2, #ff6c00)"
            d="M31.36 16c0 8.483-6.877 15.36-15.36 15.36s-15.36-6.877-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36z"
          />
          <Path
            fill="#ff6c00"
            style="fill: var(--color2, #ff6c00)"
            d="M16.64 7.68h-1.28v7.68h-7.68v1.28h7.68v7.68h1.28v-7.68h7.68v-1.28h-7.68v-7.68z"
          />
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 219,
    width: "100%",
    borderRadius: 25,
    height: 549,
  },
  scrollView: {
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // marginHorizontal: 20,
  },
  photoContainer: {
    position: "absolute",
    top: -15,
    left: "33.33%",
  },
  photoCard: {
    display: "flex",
    position: "absolute",
    top: 159,
    left: "33.33%",
    borderRadius: 16,
    backgroundColor: "white",
    width: 120,
    height: 120,
  },
  addIcon: {
    width: 1,
    height: 1,
    strokeWidth: 1,
    stroke: "#ff6c00",
    fill: "currentColor",
  },
  addPhotoButton: {
    position: "absolute",
    top: 239,
    left: "63%",
  },
  text: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 1.17,
    color: "#212121",
    paddingTop: 92,
    marginBottom: 33,
    borderRadius: 6,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  formSection: {
    display: "flex",
    gap: 16,
    marginHorizontal: 16,
  },
  inputStyles: {
    height: 50,
    paddingVertical: 16,
    paddingLeft: 16,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    borderBottomWidth: 1,
    borderBottomColor: "#e8e8e8",
  },
  hidePasswordButton: {
    position: "absolute",
    top: 146,
    left: "78%",
  },
  hidePasswordText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "right",
    color: "#1B4371",
  },
  registrationButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingVertical: 16,
    paddingHorizontal: 32,
    height: 51,
    marginTop: 27,
  },
  registrationButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
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
});
