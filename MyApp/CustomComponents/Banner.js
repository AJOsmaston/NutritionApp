import React from "react";
import { View, Text } from "react-native";

const Banner = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 40,
      }}
    >
      <View style={{ 
        alignItems: "center",
        justifyContent: 'center',
        flex: 0.5,
        }}>
        <Text>Testing Left</Text>
      </View>
      <View style={{ 
        flex: 0.5,
        alignItems: "center",
        justifyContent: 'center', }}>
        <Text style={{ }}>Testing Right</Text>
      </View>
    </View>
  );
};

export default Banner;