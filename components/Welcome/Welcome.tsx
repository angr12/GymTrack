import { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const exerciseTypes = ["Push", "Pull", "Legs", "Core"];

const Welcome = () => {
  const router = useRouter();

  return (
    <View>
      <View>
        <Text>Welcome to GymTrack, Name!</Text>
      </View>

      <View>
        <FlatList
          data={exerciseTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() => router.push(`/search/${item}`)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ flexGrow: 1 }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
