import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style"
import Push from "../Push/push";
import Pull from "../Pull/pull";   
import Legs from "../Legs/legs";
import Core from "../Core/core";

const exerciseTypes = ["Push", "Pull", "Legs", "Core"];

const Welcome = () => {
  const router = useRouter();
  const [selected, setSelected] = useState(exerciseTypes[0]);
  const displaySelected = () => {
    switch(selected) {
        case "Push":
            return <Push />;
        case "Pull":
            return <Pull />;

        case "Legs":
            return <Legs />;

        case "Core":
            return <Core />;
        default:
            break;
    }
  }

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
              }}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          horizontal
        /> 
        {displaySelected()}
      </View>
    </View>
  );
};

export default Welcome;
