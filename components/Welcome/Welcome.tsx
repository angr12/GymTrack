import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style"

const exerciseTypes = ["Push", "Pull", "Legs", "Core"];

const Welcome = () => {
  const router = useRouter();
  const [selected, setSelected] = useState("Push");

  return (
    <View>
      <View>
        <Text style={styles.introText}>Welcome to GymTrack, Name!</Text>
      </View>

      <View style={styles.buttonContainer}>
        <FlatList
          data={exerciseTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
            style={styles.button(selected, item)}
            onPress={() => {
                setSelected(item); // callback to update state to the selected item and change its color
                router.push(`/search/${item}`)}}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
