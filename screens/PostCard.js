import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require("../assets/profile_img.png")}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>{this.props.post.author}</Text>
            </View>
          </View>
          <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.post.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
    padding: RFValue(15),
  },
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  authorImageContainer: {
    marginRight: RFValue(10),
  },
  profileImage: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(25),
  },
  authorNameText: {
    fontSize: RFValue(18),
    color: "white",
  },
  postImage: {
    width: "100%",
    height: RFValue(250),
    borderRadius: RFValue(15),
    marginTop: RFValue(10),
    marginBottom: RFValue(10),
  },
  captionContainer: {
    marginBottom: RFValue(10),
  },
  captionText: {
    fontSize: RFValue(16),
    color: "white",
  },
  actionContainer: {
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
    padding: RFValue(10),
  },
  likeText: {
    color: "white",
    fontSize: RFValue(18),
    marginLeft: RFValue(5),
  },
});
