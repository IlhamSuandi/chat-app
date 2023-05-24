import React from "react";
import { KeyboardAvoidingView, Pressable, View } from "react-native";
import { TextInput } from "react-native-paper";
import SendIcon from "react-native-vector-icons/FontAwesome";

type chatType = {
  from: string;
  message: string;
  date: Date;
};

interface IProps {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  chat: Array<chatType>;
}

export default function ChatInput(props: IProps) {
  const { message, setMessage, chat } = props;
  const ref = React.useRef<any>(null);

  return (
    <View
      style={{
        alignItems: "center",
        padding: 10,
      }}
    >
      <View
        style={{
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          gap: 10,
          alignItems: "center",
          flexDirection: "row",
          flex: 1,
        }}
      >
        <TextInput
          mode="outlined"
          ref={ref}
          placeholder="ketik pesan"
          activeOutlineColor="grey"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          placeholderTextColor="grey"
          style={{ width: "80vw", backgroundColor: "transparent" }}
          multiline
          theme={{ roundness: 50 }}
          onChangeText={(value) => setMessage(value)}
          value={message}
          autoFocus
          blurOnSubmit={false}
          returnKeyType="done"
          onSubmitEditing={() => {
            if (message) {
              ref.current?.focus();
              setMessage(message);
              chat.push({ from: "me", message: message, date: new Date() });
            }
          }}
          onKeyPress={(e) => {
            if (e.nativeEvent.key === "Enter") {
              if (message !== "") {
                e.preventDefault();
                ref.current?.focus();
                setMessage("");
                chat.push({ from: "me", message: message, date: new Date() });
              }
            }
          }}
        />
        <Pressable
          disabled={message ? false : true}
          onPress={() => {
            ref.current?.focus();
            setMessage("");
            chat.push({ from: "me", message: message, date: new Date() });
          }}
        >
          <SendIcon name="send" color={message ? "black" : "grey"} size={28} />
        </Pressable>
      </View>
    </View>
  );
}
