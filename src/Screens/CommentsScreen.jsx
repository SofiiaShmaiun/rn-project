import React from "react";
import { Pressable } from "react-native";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Svg, { Path } from "react-native-svg";

export default function PostsScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.mainContainer}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.postImageContainer}>
            <Image
              style={styles.postImage}
              source={require("../img/post2.png")}
            />
          </View>

          <View style={styles.commentContainer}>
            <Image
              source={require("../img/user1.png")}
              style={styles.userImage}
            />
            <View style={styles.comment}>
              <View style={styles.commentTextContainer}>
                <Text>
                  Really love your most recent photo. I’ve been trying to
                  capture the same thing for a few months and would love some
                  tips!
                </Text>
              </View>

              <Text style={styles.dateText}>09 червня, 2020 | 08:40</Text>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Коментувати..."
              style={styles.commentsInput}
            ></TextInput>
            <Pressable style={styles.sendCommentButton}>
              <Svg width={20} height={20} viewBox="0 0 32 32">
                <Path
                  fill="#fff"
                  style="fill: var(--color1, #fff)"
                  d="M16 2l0.708-0.708c-0.181-0.181-0.431-0.294-0.708-0.294s-0.527 0.112-0.708 0.294l-0 0 0.708 0.708zM25.292 12.708c0.181 0.181 0.431 0.293 0.708 0.293 0.553 0 1.001-0.448 1.001-1.001 0-0.277-0.112-0.527-0.293-0.708v0l-1.416 1.416zM5.292 11.292c-0.181 0.181-0.293 0.431-0.293 0.708 0 0.553 0.448 1.001 1.001 1.001 0.277 0 0.527-0.112 0.708-0.293v0l-1.416-1.416zM15 30c0 0.552 0.448 1 1 1s1-0.448 1-1v0h-2zM15.292 2.708l10 10 1.416-1.416-10-10-1.416 1.416zM15.292 1.292l-10 10 1.416 1.416 10-10-1.416-1.416zM15 2v14h2v-14h-2zM15 16v14h2v-14h-2z"
                ></Path>
              </Svg>
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
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 16,
    flex: 1,
  },
  postImageContainer: {
    display: "flex",
    alignItems: "center",
    marginVertical: 32,
  },
  postImage: {
    height: 240,
    borderRadius: 8,
  },
  userImage: {
    width: 28,
    height: 28,
    borderRadius: 28,
  },
  commentContainer: {
    display: "flex",
    flexDirection: "row",
  },
  commentTextContainer: {
    width: 267,
    marginLeft: 32,
  },
  comment: {
    color: "#212121",
    fontSize: 13,
    fontFamily: "Roboto",
    lineHeight: 18,
    top: 14,
  },
  dateText: {
    color: "#BDBDBD",
    textAlign: "right",
    fontSize: 10,
    fontFamily: "Roboto",
  },
  inputContainer: {
    alignItems: "center",
    marginTop: 31,
  },
  commentsInput: {
    width: 343,
    height: 50,
    color: "#BDBDBD",
    fontSize: 16,
    fontFamily: "Inter",
    fontWeight: "medium",
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderRadius: 25,
    paddingLeft: 16,
  },
  sendCommentButton: {
    backgroundColor: "#FF6C00",
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 17,
    top: -43,
    left: 150,
  },
});
