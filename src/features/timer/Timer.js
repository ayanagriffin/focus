import React, { useState } from 'react';
import { Text, View, StyleSheet, Platform, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/Sizes';
import { colors } from '../../utils/Colors';
import { Countdown } from '../../components/Countdown';
import { Timing } from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const defaultTime = .1;
  const [minutes, setMinutes] = useState(defaultTime);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 5000);
    } else {
      Vibration.vibrate(5000);
    }
  };
  const onEnd = () => {
    vibrate();
    setMinutes(defaultTime);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (mins) => {
    if (60 > mins && mins > 0) {
      setMinutes(mins);
      setProgress(1);
      setIsStarted(false);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
      </View>

      <View>
        <Text style={styles.title}>We are focusing on</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ paddingTop: spacing.lg }}>
        <ProgressBar
          color="#5e84e2"
          style={{ height: 10 }}
          progress={progress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing
          changeTime={changeTime}
          minutes={minutes}
          isStarted={isStarted}
          setIsStarted={setIsStarted}
        />
      </View>
      <View style={styles.clearSubject}>
          <RoundedButton title="exit" size={50} onPress={() => clearSubject()}/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.xxxl : spacing.md,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearSubject: {
    margin: spacing.lg
  }
});
