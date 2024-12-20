import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route}: DetailsProps) {
  const {productId} = route.params;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate("Home")}
        // goBack() goes back to the previous screen
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first scren"
        // pop() goes back the number screens specified in the argument
        // onPress={() => navigation.pop(2)}
        // popToTop() goes to the first screen of the stack
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
