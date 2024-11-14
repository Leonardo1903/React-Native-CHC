import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

export default function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
}

// StyleSheet act as a CSS file in react-native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems is for horizontal alignment in react-native
    alignItems: 'center',
    // justifyContent is for vertical alignment in react-native
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});
