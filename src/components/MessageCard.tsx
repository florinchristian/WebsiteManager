import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions, TouchableOpacity
} from "react-native";
import Message from "../model/Message";

type MessageCardProps = {
  message: Message
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("screen").width,
    paddingVertical: 15,
    paddingHorizontal: 25
  },
  body: {
    flex: 1,
    borderWidth: 2,
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    borderColor: "rgba(255, 255, 255, 0.63)",
    borderStyle: "solid",
    borderRadius: 10,
    padding: 10
  },
  header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    alignItems: "center"
  },
  nickname: {
    color: "white",
    fontSize: 25
  },
  email: {
    color: "white",
    fontSize: 15
  },
  message: {
    color: "white"
  },
  actionButtonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const MessageCard: React.FC<MessageCardProps> = ({message}) => {
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.nickname}>{message.nickname} • </Text>
          <Text style={styles.email}>{message.email}</Text>
        </View>
        <Text style={styles.message}>{message.message}</Text>

        <View style={styles.actionButtonContainer}>
          <TouchableOpacity>
            <Text>Reply</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
