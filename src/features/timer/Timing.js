import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/Sizes';
import { colors } from '../../utils/Colors';
import { Countdown } from '../../components/Countdown';

export const Timing = ({ changeTime, minutes, isStarted, setIsStarted }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton
        size={45}
        title="-"
        buttonType="icon"
        onPress={() => changeTime(minutes - 1)}
      />
      {isStarted ? (
        <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
      ) : (
        <RoundedButton title="start" onPress={() => setIsStarted(true)} />
      )}
      <RoundedButton
        size={45}
        title="+"
        buttonType="icon"
        onPress={() => changeTime(minutes + 1)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
