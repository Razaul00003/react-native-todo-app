import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItems}>
      <Pressable
        android_ripple={{ color: "#ddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: { color: "white", padding: 8 },
});
