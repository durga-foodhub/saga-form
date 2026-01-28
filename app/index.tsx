import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { router } from "expo-router";
import { addItemRequest } from "../store/itemSlice";
import { RootState, AppDispatch } from "../store";
import { styles } from "../styles/common";

export default function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.items.loading);

  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    price: "",
    description: "",
  });

  const updateField = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    dispatch(
      addItemRequest({
        name: form.name,
        category: form.category,
        quantity: Number(form.quantity),
        price: Number(form.price),
        description: form.description,
      })
    );

    router.push("/list");

    setForm({
      name: "",
      category: "",
      quantity: "",
      price: "",
      description: "",
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Create Item</Text>

      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={(v) => updateField("name", v)}
        style={styles.input}
      />

      <TextInput
        placeholder="Category"
        value={form.category}
        onChangeText={(v) => updateField("category", v)}
        style={styles.input}
      />

      <TextInput
        placeholder="Quantity"
        keyboardType="numeric"
        value={form.quantity}
        onChangeText={(v) => updateField("quantity", v)}
        style={styles.input}
      />

      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        value={form.price}
        onChangeText={(v) => updateField("price", v)}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={form.description}
        onChangeText={(v) => updateField("description", v)}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>
          {loading ? "Submitting..." : "Submit"}
        </Text>
      </TouchableOpacity>

    <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("./list")}>
      <Text style={styles.buttonText}>
        {"View List"}
      </Text>
    </TouchableOpacity>

    </View>
  );
}
