import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from "react-native";

import Svg, { Path } from "react-native-svg";

export default function CreatePostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.uploadPhotoContainer}>
        <Image style={styles.uploadedPhoto}></Image>
        <Pressable style={styles.uploadPhotoButton}>
          <Svg
            width={24}
            height={24}
            viewBox="0 0 32 32"
            style={styles.uploadPhotoIcon}
          >
            <Path
              fill="#bdbdbd"
              style="fill: var(--color1, #bdbdbd)"
              d="M16 20.267c2.356 0 4.267-1.91 4.267-4.267s-1.91-4.267-4.267-4.267c-2.356 0-4.267 1.91-4.267 4.267s1.91 4.267 4.267 4.267z"
            ></Path>
            <Path
              fill="#bdbdbd"
              style="fill: var(--color1, #bdbdbd)"
              d="M12 2.667l-2.44 2.667h-4.227c-1.467 0-2.667 1.2-2.667 2.667v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667v-16c0-1.467-1.2-2.667-2.667-2.667h-4.227l-2.44-2.667h-8zM16 22.667c-3.68 0-6.667-2.987-6.667-6.667s2.987-6.667 6.667-6.667c3.68 0 6.667 2.987 6.667 6.667s-2.987 6.667-6.667 6.667z"
            ></Path>
          </Svg>
        </Pressable>
      </View>

      <Text style={styles.uploadPhotoText}>Завантажте фото</Text>

      <TextInput placeholder="Назва..." style={styles.photoName} />

      <TextInput placeholder="Місцевість..." style={styles.photoMap} />

      <Svg width={24} height={24} viewBox="0 0 32 32" style={styles.mapIcon}>
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

      <Pressable
        onPress={() => {
          null;
        }}
        style={styles.postButton}
      >
        <Text styles={styles.postButtonText} style={{ color: "white" }}>
          Опублікувати
        </Text>
      </Pressable>

      <Pressable style={styles.deleteButton}>
        <Svg
          width={24}
          height={24}
          viewBox="0 0 32 32"
        >
          <Path
            fill="none"
            stroke="#bdbdbd"
            stroke-width="1.3333"
            stroke-miterlimit="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="stroke: var(--color1, #bdbdbd)"
            d="M4 8h24"
          ></Path>
          <Path
            fill="#bdbdbd"
            style="fill: var(--color1, #bdbdbd)"
            d="M26 8c0-0.368-0.299-0.667-0.667-0.667s-0.667 0.298-0.667 0.667h1.333zM7.333 8c0-0.368-0.298-0.667-0.667-0.667s-0.667 0.298-0.667 0.667h1.333zM10 8c0 0.368 0.298 0.667 0.667 0.667s0.667-0.298 0.667-0.667h-1.333zM20.667 8c0 0.368 0.299 0.667 0.667 0.667s0.667-0.298 0.667-0.667h-1.333zM24.667 8v18.667h1.333v-18.667h-1.333zM24.667 26.667c0 1.105-0.895 2-2 2v1.333c1.841 0 3.333-1.492 3.333-3.333h-1.333zM22.667 28.667h-13.333v1.333h13.333v-1.333zM9.333 28.667c-1.105 0-2-0.895-2-2h-1.333c0 1.841 1.492 3.333 3.333 3.333v-1.333zM7.333 26.667v-18.667h-1.333v18.667h1.333zM11.333 8v-2.667h-1.333v2.667h1.333zM11.333 5.333c0-1.105 0.895-2 2-2v-1.333c-1.841 0-3.333 1.492-3.333 3.333h1.333zM13.333 3.333h5.333v-1.333h-5.333v1.333zM18.667 3.333c1.105 0 2 0.895 2 2h1.333c0-1.841-1.492-3.333-3.333-3.333v1.333zM20.667 5.333v2.667h1.333v-2.667h-1.333z"
          ></Path>
          <Path
            fill="none"
            stroke="#bdbdbd"
            stroke-width="1.3333"
            stroke-miterlimit="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="stroke: var(--color1, #bdbdbd)"
            d="M13.333 14.667v8"
          ></Path>
          <Path
            fill="none"
            stroke="#bdbdbd"
            stroke-width="1.3333"
            stroke-miterlimit="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            style="stroke: var(--color1, #bdbdbd)"
            d="M18.667 14.667v8"
          ></Path>
        </Svg>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingHorizontal: 16,
  },
  uploadPhotoContainer: {
    height: 240,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "solid",
    borderRadius: 8,
    marginTop: 32,
  },

  uploadedPhoto: {
    borderRadius: 8,
  },

  uploadPhotoButton: {
    left: 134,
    top: 90,
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
  },
  uploadPhotoIcon: {
    top: 18,
    left: 18,
  },
  uploadPhotoText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginTop: 8,
    marginBottom: 32,
  },

  photoName: {
    height: 50,
    paddingVertical: 15,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#E8E8E8",
  },

  photoMap: {
    height: 50,
    paddingVertical: 15,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    paddingLeft: 28,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: "#E8E8E8",
  },

  mapIcon: {
    top: -36,
  },

  postButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    backgroundColor: "#f6f6f6",
    paddingVertical: 16,
    paddingHorizontal: 32,
    height: 51,
    width: 343,
    marginTop: 32,
  },
  postButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "medium",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#BDBDBD",
  },
  deleteButton: {
    alignItems: "center",
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: 70,
    backgroundColor: "#F6F6F6",
    width: 70,
    height: 40,
    borderRadius: 20,
  },
});
