import React, {useEffect, useState} from "react";
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent"
    },
    header: {
        padding: 20,
        borderBottomColor: "rgba(255, 255, 255, 0.63)",
        borderBottomWidth: 1,
        // borderBottomStyle: "solid",
        // borderBottomColor: "#d0d0d0",
        // borderBottomWidth: 2
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold"
    }
});

const App = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    const requestUserPermission = async () => {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
    };

    const getDeviceToken = async () => {
        const deviceToken = await messaging().getToken();
        const subscriber = new Subscriber(DeviceInfo.getUniqueIdSync(), deviceToken);

        const subscriberService = new SubscribersService();
        subscriberService.save(subscriber);
    };

    const loadMessages = async () => {
        const messagesService = new MessagesService();
        const messages = await messagesService.fetch();

        setMessages(messages);
    };

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

               <FlatList data={messages} renderItem={({item}) => (
                   <MessageCard message={item}/>
               )}/>
           </SafeAreaView>
       </LinearGradient>
    );
};

export default App;
