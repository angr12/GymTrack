import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { colors } from "../constants/Colors";
import Icons from "../constants/Icons";
import HeaderButton from "../components/header/HeaderButton";



const Home = () => {
  const router = useRouter();

  return (
  <SafeAreaView>
    <Stack.Screen
      options={{
        headerStyle: { backgroundColor: colors.lightBlue},
        headerShadowVisible: true,
        headerLeft: () => (
          <HeaderButton iconUrl={Icons.bars}/>
        ),
        headerRight: () => (
          <HeaderButton iconUrl={Icons.user}/>
        ),
        headerTitle:'Home'
      }}
    />
  </SafeAreaView>
  );
};

export default Home;
