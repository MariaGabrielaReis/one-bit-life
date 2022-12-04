import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function DefaultButton({
  buttonText,
  handlePress,
  width,
  height,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, { width: width, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.text}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
