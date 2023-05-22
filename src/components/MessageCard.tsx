import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions, TouchableOpacity
} from "react-native";
import Message from "../model/Message";

// @ts-ignore
import Entypo from "react-native-vector-icons/dist/Entypo";
// @ts-ignore
import MaterialCommunityIcons from "react-native-vector-icons/dist/MaterialCommunityIcons";

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
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center"
  },
});

type MessageCardProps = {
  message: Message
  replyCallback: (message: Message) => void,
  deleteCallback: (message: Message) => void
};

const MessageCard: React.FC<MessageCardProps> = ({message, replyCallback, deleteCallback}) => {
  return(
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.nickname}>{message.nickname} • </Text>
          <Text style={styles.email}>{message.email}</Text>
        </View>
        <Text style={styles.message}>{message.message}</Text>

        <View style={styles.actionButtonContainer}>
          <TouchableOpacity onPress={() => replyCallback(message)} style={[styles.actionButton, {
            backgroundColor: "white",
            paddingVertical: 7,
            paddingHorizontal: 15,
            borderRadius: 5
          }]}>
            <Entypo style={{
              marginRight: 5
            }} color={"black"} name={"reply"}/>
            <Text style={{
              color: "black"
            }}>Reply</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => deleteCallback(message)} style={[styles.actionButton, {
            backgroundColor: "#ff3333",
            paddingVertical: 7,
            paddingHorizontal: 15,
            borderRadius: 5
          }]}>
            <MaterialCommunityIcons style={{
              marginRight: 5
            }} color={"white"} name={"delete-forever-outline"} />
            <Text style={{
              color: "white",
            }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
