import React from "react";
import { Pressable } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function PostsScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userPhotoCard}
          source={require("../img/userPhoto.jpg")}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <View style={styles.postImageContainer}>
        <Image style={styles.postImage} source={require("../img/post1.png")} />
        <Text style={styles.postDescription}>Ліс</Text>
      </View>

      <View style={styles.feedback}>
        <View style={styles.feedbackContainer}>
          <Pressable onPress={() => navigate("Comments")}>
            <Svg width={24} height={24} viewBox="0 0 32 32">
              <Path
                fill="none"
                stroke="#bdbdbd"
                stroke-width="1.3333"
                stroke-miterlimit="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                style="stroke: var(--color4, #bdbdbd)"
                d="M4 15.333c-0 0.009-0 0.019-0 0.029 0 1.837 0.444 3.571 1.229 5.1l-0.029-0.063c1.901 3.744 5.723 6.265 10.133 6.267h0c0.009 0 0.019 0 0.029 0 1.837 0 3.571-0.444 5.1-1.229l-0.063 0.029 7.6 2.533-2.533-7.6c0.756-1.466 1.2-3.2 1.2-5.038 0-0.010 0-0.020-0-0.031v0.002c-0.002-4.411-2.523-8.232-6.202-10.104l-0.064-0.030c-1.466-0.756-3.2-1.2-5.038-1.2-0.010 0-0.020 0-0.031 0h-0.665c-5.755 0.327-10.339 4.912-10.665 10.637l-0.001 0.030v0.667z"
              ></Path>
            </Svg>
          </Pressable>

          <Text style={styles.likes}>0</Text>
        </View>
        <View style={styles.feedbackContainer}>
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
          <Text style={styles.location}>Ivano-Frankivs'k Region, Ukraine</Text>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
  },
  userContainer: {
    paddingLeft: 16,
    paddingVertical: 32,
    display: "flex",
    flexDirection: "row",
  },
  userPhotoCard: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  userName: {
    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto",
    fontWeight: 700,
  },
  userEmail: {
    color: "rgba(33, 33, 33, 0.80)",
    fontSize: 11,
    fontFamily: "Roboto",
  },
  userInfo: {
    justifyContent: "center",
    paddingLeft: 8,
  },
  postImageContainer: {
    display: "flex",
    alignItems: "center",
  },
  postImage: {
    height: 240,
    borderRadius: 8,
    marginHorizontal: 16,
  },
  postDescription: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto",
    fontWeight: 500,
    alignSelf: "flex-start",
    paddingLeft: 16,
    paddingVertical: 8,
  },
  feedbackContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 6,
    
  },
  likes: {
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Roboto",
  },
  location: {
    color: "#212121",
    fontSize: 16,
    fontFamily: "Roboto",
    textDecorationLine: "underline",
  },
  feedback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
  },
});
