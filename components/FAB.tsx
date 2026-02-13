import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

interface Props {
  title: string;
  position?: "left" | "right";
  onPress?: () => void;
  onLongPress?: () => void;
}

export default function FAB({
  title,
  position = "left",
  onPress,
  onLongPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={ ({ pressed }) => [
        styles.floatingButton, 
        (position === 'left') ? styles.left : styles.right,
        (pressed) ? { opacity: 0.5 } : {opacity: 1} 
      ]}
    >
      <Text style={styles.bottomText}> {title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,
    backgroundColor: "#65558f",
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },
  left: {
    left: 20,
  },
  right: {
    right: 20,
  },
  bottomText: {
    color: "white",
    fontSize: 20,
  },
});
