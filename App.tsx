import React, { useEffect, useRef, useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    PermissionsAndroid
} from "react-native";

import DeviceInfo from "react-native-device-info";

import messaging from "@react-native-firebase/messaging";

import Message from "./src/model/Message";
import MessagesService from "./src/services/MessagesService";
import MessageCard from "./src/components/MessageCard";
import Subscriber from "./src/model/Subscriber";
import SubscribersService from "./src/services/SubscribersService";

import LinearGradient from "react-native-linear-gradient";
import message from "./src/model/Message";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
    },
    header: {
        padding: 20,
        borderBottomColor: "rgba(255, 255, 255, 0.63)",
        borderBottomWidth: 1
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }
});

const App = () => {
    const [messages, setMessages] = useState<Message[]>([])
    const [messagesAreRefreshing, setMessagesAreRefreshing] = useState<boolean>(true);

    const messagesService = useRef(new MessagesService());
    const subscriberService = useRef(new SubscribersService());

    const requestUserPermission = async () => {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    };

    const getDeviceToken = async () => {
        const deviceToken = await messaging().getToken();
        const subscriber = new Subscriber(DeviceInfo.getUniqueIdSync(), deviceToken);

        subscriberService.current.save(subscriber);
    };

    const loadMessages = async () => {
        setMessagesAreRefreshing(true);

        const messages: Message[] = await messagesService.current.fetch();

        setMessages(messages);

        setMessagesAreRefreshing(false);
    };

    const replyCallback = (message: Message) => {
        console.log("reply message", message);
    };

    const deleteCallback = async (message: Message) => {
        await messagesService.current.delete(message);

        setMessages(messages.filter(msg => msg.id != message.id));
    }

    useEffect(() => {
        requestUserPermission();
        loadMessages();
        getDeviceToken();
    }, []);

    return (
       <LinearGradient style={styles.container} colors={["#AD1DEB", "#6E72FC"]}>
           <SafeAreaView style={styles.container}>
               <View style={styles.header}>
                   <Text style={styles.title}>Inbox</Text>
               </View>

               <FlatList
                 data={messages}
                 refreshing={messagesAreRefreshing}
                 onRefresh={() => loadMessages()}
                 renderItem={({item}) => (
                   <MessageCard
                     message={item}
                     replyCallback={(message) => replyCallback(message)}
                     deleteCallback={(message) => deleteCallback(message)}
                   />
                 )}
               />
           </SafeAreaView>
       </LinearGradient>
    );
};

export default App;
