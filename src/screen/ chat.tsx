import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ChatInput from "../component/chatInput";
import ChatBubble from "../component/chatBubble";
import { socket } from "../context/chatContext";

const chat: Array<any> = [];

export default function ChatScreen() {
  const [message, setMessage] = React.useState<string>("");
  const [chatMessages, setChatMessages] = React.useState();

  React.useEffect(() => {
    socket.on("chat-message", (data) => {
      setChatMessages(data);
      data && chat.push(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {chat.length > 0 ? (
        <FlatList
          inverted
          data={chat}
          renderItem={({ item }) => (
            <ChatBubble
              message={item.message}
              from={item.from}
              date={item.date}
            />
          )}
          keyExtractor={(item, index) => item.message + index}
          contentContainerStyle={{ flexDirection: "column-reverse" }}
        />
      ) : (
        <View style={{ justifyContent: "center" }}>
          <Text>tidak ada pesan</Text>
        </View>
      )}
      <ChatInput message={message} setMessage={setMessage} chat={chat} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    height: "100% ",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
