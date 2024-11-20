import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        {/* pass an array to pass multiple styles */}
        <View style={[styles.card, styles.card1]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.card2]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.card3]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 10,
  },
  card1: {
    backgroundColor: '#EF5354',
  },
  card2: {
    backgroundColor: '#5DA3FA',
  },
  card3: {
    backgroundColor: '#50DBB4',
  },
});
