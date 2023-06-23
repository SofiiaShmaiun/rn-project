import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Svg, { Path } from "react-native-svg";

import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen({ navigation: { navigate } }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Image
        source={require("../img/background.jpg")}
        style={profileStyles.backgroundImage}
      />
      <View style={profileStyles.container}>
        <View style={profileStyles.photoContainer}>
          <Image
            style={profileStyles.photoCard}
            source={require("../img/userPhoto.jpg")}
          />
          <Pressable style={profileStyles.removePhotoButton}>
            <Svg
              width={40}
              height={40}
              viewBox="0 0 32 32"
              style={profileStyles.addIcon}
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
        <Pressable
          style={profileStyles.logoutButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Svg width={24} height={24} viewBox="0 0 32 32">
            <Path
              fill="none"
              stroke="#bdbdbd"
              stroke-width="1.3333"
              stroke-miterlimit="4"
              stroke-linecap="round"
              stroke-linejoin="round"
              style="stroke: var(--color4, #bdbdbd)"
              d="M13.333 29.333h-6.667c-1.473 0-2.667-1.194-2.667-2.667v0-21.333c0-1.473 1.194-2.667 2.667-2.667v0h6.667M22.667 21.333l5.333-5.333-5.333-5.333M28 16h-16"
            ></Path>
          </Svg>
        </Pressable>
        <Text style={profileStyles.userNameHeader}>Natali Romanova</Text>
        <ScrollView style={profileStyles.scrollContainer}>
          <View style={profileStyles.postImageContainer}>
            <Image
              style={profileStyles.postImage}
              source={require("../img/post2.png")}
            />
            <Text style={profileStyles.postDescription}>Ліс</Text>
            <View style={profileStyles.feedback}>
              <View style={profileStyles.feedbackContainer}>
                <Pressable onPress={() => navigate("Comments")}>
                  <Svg width={24} height={24} viewBox="0 0 32 32">
                    <Path
                      fill="#ff6c00"
                      stroke="#ff6c00"
                      stroke-width="1.3333"
                      stroke-miterlimit="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      style="stroke: var(--color4, #bdbdbd)"
                      d="M4 15.333c-0 0.009-0 0.019-0 0.029 0 1.837 0.444 3.571 1.229 5.1l-0.029-0.063c1.901 3.744 5.723 6.265 10.133 6.267h0c0.009 0 0.019 0 0.029 0 1.837 0 3.571-0.444 5.1-1.229l-0.063 0.029 7.6 2.533-2.533-7.6c0.756-1.466 1.2-3.2 1.2-5.038 0-0.010 0-0.020-0-0.031v0.002c-0.002-4.411-2.523-8.232-6.202-10.104l-0.064-0.030c-1.466-0.756-3.2-1.2-5.038-1.2-0.010 0-0.020 0-0.031 0h-0.665c-5.755 0.327-10.339 4.912-10.665 10.637l-0.001 0.030v0.667z"
                    ></Path>
                  </Svg>
                </Pressable>
                <Text style={profileStyles.quantity}>0</Text>
              </View>

              <View style={profileStyles.feedbackContainer}>
                <Svg width={24} height={24} viewBox="0 0 32 32">
                  <Path
                    fill="#ff6c00"
                    stroke="#ff6c00"
                    stroke-width="1.3333"
                    style="fill: var(--color1, #ff6c00)"
                    d="M17.819 10.133h-0.667c0 0.368 0.298 0.667 0.667 0.667v-0.667zM17.819 5.867v0zM14.365 2.667v-0.667c-0.257 0-0.49 0.147-0.601 0.378l0.601 0.288zM9.758 12.267l-0.601-0.288c-0.043 0.090-0.066 0.189-0.066 0.288h0.667zM9.758 24h-0.667c0 0.368 0.298 0.667 0.667 0.667v-0.667zM22.748 24l0.007-0.667h-0.007v0.667zM25.051 22.187l-0.658-0.109-0 0.001 0.658 0.108zM26.641 12.587l0.658 0.109 0-0.001-0.658-0.108zM24.337 10.133v0.667l0.007-0-0.007-0.667zM9.758 24v0.667c0.368 0 0.667-0.299 0.667-0.667h-0.667zM9.758 12.267h0.667c0-0.368-0.298-0.667-0.667-0.667v0.667zM18.486 10.133v-4.267h-1.333v4.267h1.333zM18.486 5.867c0-2.183-1.894-3.867-4.121-3.867v1.333c1.589 0 2.788 1.181 2.788 2.533h1.333zM13.764 2.378l-4.606 9.6 1.202 0.577 4.606-9.6-1.202-0.577zM9.091 12.267v11.733h1.333v-11.733h-1.333zM9.758 24.667h12.99v-1.333h-12.99v1.333zM22.741 24.667c1.439 0.015 2.737-0.959 2.968-2.372l-1.316-0.215c-0.113 0.691-0.781 1.263-1.638 1.254l-0.014 1.333zM25.709 22.295l1.589-9.6-1.315-0.218-1.589 9.6 1.315 0.218zM27.299 12.694c0.136-0.831-0.131-1.667-0.711-2.284l-0.972 0.913c0.307 0.327 0.434 0.749 0.367 1.156l1.316 0.216zM26.588 10.41c-0.577-0.615-1.404-0.953-2.257-0.944l0.014 1.333c0.498-0.005 0.961 0.193 1.271 0.523l0.972-0.913zM24.337 9.467h-6.518v1.333h6.518v-1.333zM9.758 23.333h-3.455v1.333h3.455v-1.333zM6.303 23.333c-0.953 0-1.637-0.704-1.637-1.467h-1.333c0 1.594 1.379 2.8 2.97 2.8v-1.333zM4.667 21.867v-7.467h-1.333v7.467h1.333zM4.667 14.4c0-0.763 0.684-1.467 1.637-1.467v-1.333c-1.591 0-2.97 1.206-2.97 2.8h1.333zM6.303 12.933h3.455v-1.333h-3.455v1.333zM9.091 12.267v11.733h1.333v-11.733h-1.333z"
                  ></Path>
                </Svg>
                <Text style={profileStyles.quantity}>153</Text>
              </View>

              <View style={profileStyles.feedbackContainer}>
                <Svg width={24} height={24} viewBox="0 0 32 32">
                  <Path
                    fill="none"
                    stroke="#bdbdbd"
                    stroke-width="1.3333"
                    stroke-miterlimit="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="stroke: var(--color1, #bdbdbd)"
                    d="M26.667 13.818c0 7.636-10.667 14.182-10.667 14.182s-10.667-6.545-10.667-14.182c0-5.422 4.776-9.818 10.667-9.818s10.667 4.396 10.667 9.818v0z"
                  ></Path>
                  <Path
                    fill="none"
                    stroke="#bdbdbd"
                    stroke-width="1.3333"
                    stroke-miterlimit="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="stroke: var(--color1, #bdbdbd)"
                    d="M16 18.667c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4c0 2.209 1.791 4 4 4z"
                  ></Path>
                </Svg>
                <Text style={profileStyles.location}>Ukraine</Text>
              </View>
            </View>
          </View>
          <View style={profileStyles.postImageContainer}>
            <Image
              style={profileStyles.postImage}
              source={require("../img/post1.png")}
            />
            <Text style={profileStyles.postDescription}>Ліс</Text>
            <View style={profileStyles.feedback}>
              <View style={profileStyles.feedbackContainer}>
                <Pressable onPress={() => navigate("Comments")}>
                  <Svg width={24} height={24} viewBox="0 0 32 32">
                    <Path
                      fill="#ff6c00"
                      stroke="#ff6c00"
                      stroke-width="1.3333"
                      stroke-miterlimit="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      style="stroke: var(--color4, #bdbdbd)"
                      d="M4 15.333c-0 0.009-0 0.019-0 0.029 0 1.837 0.444 3.571 1.229 5.1l-0.029-0.063c1.901 3.744 5.723 6.265 10.133 6.267h0c0.009 0 0.019 0 0.029 0 1.837 0 3.571-0.444 5.1-1.229l-0.063 0.029 7.6 2.533-2.533-7.6c0.756-1.466 1.2-3.2 1.2-5.038 0-0.010 0-0.020-0-0.031v0.002c-0.002-4.411-2.523-8.232-6.202-10.104l-0.064-0.030c-1.466-0.756-3.2-1.2-5.038-1.2-0.010 0-0.020 0-0.031 0h-0.665c-5.755 0.327-10.339 4.912-10.665 10.637l-0.001 0.030v0.667z"
                    ></Path>
                  </Svg>
                </Pressable>
                <Text style={profileStyles.quantity}>0</Text>
              </View>

              <View style={profileStyles.feedbackContainer}>
                <Svg width={24} height={24} viewBox="0 0 32 32">
                  <Path
                    fill="#ff6c00"
                    stroke="#ff6c00"
                    stroke-width="1.3333"
                    style="fill: var(--color1, #ff6c00)"
                    d="M17.819 10.133h-0.667c0 0.368 0.298 0.667 0.667 0.667v-0.667zM17.819 5.867v0zM14.365 2.667v-0.667c-0.257 0-0.49 0.147-0.601 0.378l0.601 0.288zM9.758 12.267l-0.601-0.288c-0.043 0.090-0.066 0.189-0.066 0.288h0.667zM9.758 24h-0.667c0 0.368 0.298 0.667 0.667 0.667v-0.667zM22.748 24l0.007-0.667h-0.007v0.667zM25.051 22.187l-0.658-0.109-0 0.001 0.658 0.108zM26.641 12.587l0.658 0.109 0-0.001-0.658-0.108zM24.337 10.133v0.667l0.007-0-0.007-0.667zM9.758 24v0.667c0.368 0 0.667-0.299 0.667-0.667h-0.667zM9.758 12.267h0.667c0-0.368-0.298-0.667-0.667-0.667v0.667zM18.486 10.133v-4.267h-1.333v4.267h1.333zM18.486 5.867c0-2.183-1.894-3.867-4.121-3.867v1.333c1.589 0 2.788 1.181 2.788 2.533h1.333zM13.764 2.378l-4.606 9.6 1.202 0.577 4.606-9.6-1.202-0.577zM9.091 12.267v11.733h1.333v-11.733h-1.333zM9.758 24.667h12.99v-1.333h-12.99v1.333zM22.741 24.667c1.439 0.015 2.737-0.959 2.968-2.372l-1.316-0.215c-0.113 0.691-0.781 1.263-1.638 1.254l-0.014 1.333zM25.709 22.295l1.589-9.6-1.315-0.218-1.589 9.6 1.315 0.218zM27.299 12.694c0.136-0.831-0.131-1.667-0.711-2.284l-0.972 0.913c0.307 0.327 0.434 0.749 0.367 1.156l1.316 0.216zM26.588 10.41c-0.577-0.615-1.404-0.953-2.257-0.944l0.014 1.333c0.498-0.005 0.961 0.193 1.271 0.523l0.972-0.913zM24.337 9.467h-6.518v1.333h6.518v-1.333zM9.758 23.333h-3.455v1.333h3.455v-1.333zM6.303 23.333c-0.953 0-1.637-0.704-1.637-1.467h-1.333c0 1.594 1.379 2.8 2.97 2.8v-1.333zM4.667 21.867v-7.467h-1.333v7.467h1.333zM4.667 14.4c0-0.763 0.684-1.467 1.637-1.467v-1.333c-1.591 0-2.97 1.206-2.97 2.8h1.333zM6.303 12.933h3.455v-1.333h-3.455v1.333zM9.091 12.267v11.733h1.333v-11.733h-1.333z"
                  ></Path>
                </Svg>
                <Text style={profileStyles.quantity}>153</Text>
              </View>

              <View style={profileStyles.feedbackContainer}>
                <Svg width={24} height={24} viewBox="0 0 32 32">
                  <Path
                    fill="none"
                    stroke="#bdbdbd"
                    stroke-width="1.3333"
                    stroke-miterlimit="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="stroke: var(--color1, #bdbdbd)"
                    d="M26.667 13.818c0 7.636-10.667 14.182-10.667 14.182s-10.667-6.545-10.667-14.182c0-5.422 4.776-9.818 10.667-9.818s10.667 4.396 10.667 9.818v0z"
                  ></Path>
                  <Path
                    fill="none"
                    stroke="#bdbdbd"
                    stroke-width="1.3333"
                    stroke-miterlimit="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="stroke: var(--color1, #bdbdbd)"
                    d="M16 18.667c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4c0 2.209 1.791 4 4 4z"
                  ></Path>
                </Svg>
                <Text style={profileStyles.location}>Ukraine</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export const profileStyles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: 16,
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: "67%",
    alignItems: "center",
    flex: 1,
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
  removePhotoButton: {
    position: "relative",
    top: "-25%",
    left: "28%",
  },
  logoutButton: {
    top: -50,
    left: 150,
  },
  userNameHeader: {
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 500,
    marginBottom: 32,
    marginTop: -25,
  },
  postImage: {
    height: 240,
    width: 325,
    borderRadius: 8,
  },
  postDescription: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: 500,
    alignSelf: "flex-start",
    paddingVertical: 8,
  },
  feedbackContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
  },
  feedback: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 32,
    justifyContent: 'space-between',
  },
  location: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto",
    textDecorationLine: "underline",
  },

  quantity: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
