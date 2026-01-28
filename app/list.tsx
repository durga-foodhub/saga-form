import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { styles } from "../styles/common";
import { router } from "expo-router";

export default function ListScreen() {
  const items = useSelector((state: RootState) => state.items.items);

  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.title}>Submitted Items</Text>

        <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
            <View style={styles.card}>
                <Text style={styles.value}>{item.name}</Text>

                <Text style={styles.label}>Category</Text>
                <Text style={styles.value}>{item.category}</Text>

                <Text style={styles.label}>Quantity</Text>
                <Text style={styles.value}>{item.quantity}</Text>

                <Text style={styles.label}>Price</Text>
                <Text style={styles.value}>${item.price}</Text>

                <Text style={styles.label}>Description</Text>
                <Text style={styles.value}>{item.description}</Text>
            
            </View>
            )}
        />
      </View>
        <TouchableOpacity style={styles.buttonSecondary} onPress={() => router.push("/")}>
        <Text style={styles.buttonText}>
            {"Create Item"}
        </Text>
        </TouchableOpacity>
    </View>
  );
}
