import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';

const GridScreen: React.FC = () => {
  const colors: string[] = [
    '#FF6B6B',
    '#FFD93D',
    '#6BCB77',
    '#4D96FF',
    '#9B5DE5',
    '#FF7AB6',
    '#00C2A8',
    '#FFB86B',
    '#A0E7E5',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {colors.map((color: string, index: number) => (
        <View key={index} style={[styles.box, {backgroundColor: color}]} />
      ))}
    </SafeAreaView>
  );
};

export default GridScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '33.3333%',
    height: '33.3333%',
  },
});
