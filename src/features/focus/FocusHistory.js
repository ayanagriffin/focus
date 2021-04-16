import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/Sizes';
import { colors } from '../../utils/Colors';

const HistoryItem = ({ item, index }) => {
  return (
    <Text
      style={[
        item.status == 1 ? { color: 'green' } : { color: 'red' },
        styles.historyItem,
      ]}>
      {item.subject}
    </Text>
  );
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <>
    {focusHistory.length > 0 && (
      <SafeAreaView style={{ flex: 1, margin: spacing.md }}>
        <Text style={styles.title}>Things we've focused on:</Text>
        
          <>
            <FlatList
              style={{ flex: 1 }}
              contentContainerStyle={{ flex: 1 }}
              data={focusHistory}
              renderItem={HistoryItem}
            />

            <View style={styles.clearContainer}>
              <RoundedButton size={75} title="clear" onPress={onClear} />
            </View>
          </>
        
      </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: {
    fontSize: fontSizes.md,
  },
  title: {
    color: '#fff',
    fontSize: fontSizes.lg,
    marginBottom: spacing.sm,
  },
  clearContainer: {
    alignItems: 'center',
    padding: spacing.md,
  },
});
