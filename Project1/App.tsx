import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

export default function App() {
  return (
    // SafeAreaView is a component to avoid the notch and the rounded corners of the screen in certaine devices
    <SafeAreaView>
      {/* View acts as a wrapper sort of like a div in the web */}
      <View>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
}
