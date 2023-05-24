import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Avatar, Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import PlusIcon from "react-native-vector-icons/FontAwesome";

const data = [
  { id: "1", name: "ilham" },
  { id: "2", name: "suandi" },
  { id: "3", name: "ardi" },
  { id: "4", name: "winata" },
  { id: "5", name: "maysa" },
];

type Props = NativeStackScreenProps<RootStackParamList, "home">;

function UserMessages({
  props,
  item,
}: {
  props: Props;
  item: (typeof data)[0];
}) {
  return (
    <TouchableOpacity
      style={{
        padding: 10,
        marginVertical: 4,
        justifyContent: "center",
      }}
      onPress={() => {
        props.navigation.navigate("chatScreen", { name: item.name });
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Avatar.Image size={40} source={require("../assets/profile.png")} />
        <View style={{ gap: 5 }}>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          <Text numberOfLines={1} style={{ fontSize: 12, maxWidth: "40ch" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            sequi, nostrum veniam error aliquid sint ipsa provident vel
            repellendus fugiat distinctio enim placeat unde odit. Omnis
            repellendus accusantium fuga iusto!
          </Text>
        </View>
        <Text style={{ fontSize: 12, paddingRight: 10 }}>kemarin</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function Home(props: Props) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => <UserMessages props={props} item={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>

      <Button
        style={{
          maxWidth: 60,
          maxHeight: 60,
          alignItems: "center",
          justifyContent: "center",
          width: 100,
          height: 100,
          backgroundColor: "grey",
          borderRadius: 50,
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <PlusIcon name="plus" color="white" size={20} />
      </Button>
    </View>
  );
}
