import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";

import { Path, Svg } from "react-native-svg";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          tabBarShowLabel: false,
          title: "Публікації",
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <Svg width={24} height={24} viewBox="0 0 32 32">
              <Path
                fill="#fff"
                style="fill: var(--color1, #fff)"
                d="M0 0h32v32h-32z"
              ></Path>
              <Path
                fill="none"
                stroke="#212121"
                stroke-width="1.3333"
                stroke-miterlimit="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="stroke: var(--color3, #212121)"
                d="M4 4h9.333v9.333h-9.333v-9.333zM18.667 4h9.333v9.333h-9.333v-9.333zM18.667 18.667h9.333v9.333h-9.333v-9.333zM4 18.667h9.333v9.333h-9.333v-9.333z"
              ></Path>
            </Svg>
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Registration")}
              style={styles.logoutButton}
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
          ),
        }}
      />
      <Tab.Screen
        name="Create Post"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          tabBarShowLabel: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: () => (
            <View style={styles.createPostIcon}>
              <Svg width={24} height={24} viewBox="0 0 32 32">
                <Path
                  stroke="#ff6c00"
                  stroke-width="1.28"
                  stroke-miterlimit="4"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  style="fill: var(--color1, #fff); stroke: var(--color2, #ff6c00)"
                  d="M31.36 16c0 8.483-6.877 15.36-15.36 15.36s-15.36-6.877-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36z"
                ></Path>
                <Path
                  fill="#fff"
                  style="fill: var(--color2, #fff)"
                  d="M16.64 7.68h-1.28v7.68h-7.68v1.28h7.68v7.68h1.28v-7.68h7.68v-1.28h-7.68v-7.68z"
                ></Path>
              </Svg>
            </View>
          ),
          headerLeft: () => (
            <Pressable onPress={navigation.goBack} style={styles.backButton}>
              <Svg width={24} height={24} viewBox="0 0 32 32">
                <Path
                  stroke="rgba(33, 33, 33, 0.8)"
                  stroke-width="1.3333"
                  stroke-miterlimit="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M26.667 16h-21.333M13.333 24l-8-8 8-8"
                ></Path>
              </Svg>
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <Svg width={24} height={24} viewBox="0 0 32 32">
              <Path
                stroke="black"
                stroke-width="1.3333"
                stroke-miterlimit="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M26.667 28v-2.667c0-2.946-2.388-5.333-5.333-5.333v0h-10.667c-2.946 0-5.333 2.388-5.333 5.333v0 2.667"
              ></Path>
              <Path
                stroke="black"
                stroke-width="1.3333"
                stroke-miterlimit="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 14.667c2.946 0 5.333-2.388 5.333-5.333s-2.388-5.333-5.333-5.333v0c-2.946 0-5.333 2.388-5.333 5.333s2.388 5.333 5.333 5.333v0z"
              ></Path>
            </Svg>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  logoutButton: {
    paddingRight: 16,
    paddingBottom: 10,
  },
  backButton: {
    paddingLeft: 16,
  },
  createPostIcon: {
    backgroundColor: "#ff6c00",
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
