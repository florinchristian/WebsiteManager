import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from "react-native";
import Message from "../model/Message";

type MessageCardProps = {
  message: Message
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    padding: 10
  },
  header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center"
  },
  nickname: {
    color: "black",
    fontSize: 25
  },
  email: {
    color: "gray",
    fontSize: 15
  }
});

const MessageCard: React.FC<MessageCardProps> = ({message}) => {
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.nickname}>{message.nickname} • </Text>
        <Text style={styles.email}>{message.email}</Text>
      </View>
      <Text>{message.message}</Text>
    </View>
  );
};

export default MessageCard;
