import { View, Text, TextInput, Button, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addItemRequest } from "../store/itemSlice";
import { RootState, AppDispatch } from "../store";

export default function HomeScreen() {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const { items, loading } = useSelector(
    (state: RootState) => state.items
  );

  const handleAdd = () => {
    if (text.trim().length === 0) return;
    dispatch(addItemRequest(text));
    setText("");
  };

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text style={{ fontSize: 22, marginBottom: 10 }}>
        Redux Saga Demo
      </Text>

      <TextInput
        placeholder="Enter item"
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button title={loading ? "Adding..." : "Add Item"} onPress={handleAdd} />

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ padding: 10 }}>{item.name}</Text>
        )}
      />
    </View>
  );
}
