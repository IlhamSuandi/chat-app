import { Dimensions, Text, View } from "react-native";

type ItemProps = { from: string; message: string; date: Date };

export default function ChatBubble(props: ItemProps) {
  const { from, message, date } = props;
  const { width } = Dimensions.get("screen");
  return (
    <View
      style={
        from === "me"
          ? {
              width: width,
              paddingRight: 20,
              alignItems: "flex-end",
            }
          : {
              width: width,
              paddingLeft: 20,
              alignItems: "flex-start",
            }
      }
    >
      <Text
        style={
          from === "me"
            ? {
                borderWidth: 1,
                maxWidth: "94vw",
                width: "fit-content",
                padding: 10,
                textAlign: "right",
                borderRadius: 10,
                borderBottomRightRadius: 0,
                backgroundColor: "lime",
                borderColor: "lime",
              }
            : {
                borderWidth: 1,
                maxWidth: "60vw",
                width: "fit-content",
                padding: 10,
                textAlign: "left",
                borderRadius: 10,
                borderBottomLeftRadius: 0,
              }
        }
      >
        {message}
      </Text>
      <Text style={{ marginBottom: 10, fontSize: 10, marginTop: 2 }}>
        {date
          .toLocaleTimeString()
          .slice(0, date.toLocaleTimeString().length - 6)}
      </Text>
    </View>
  );
}
