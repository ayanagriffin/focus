import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/Colors'

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  buttonType = "text",
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size, buttonType).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size, buttonType) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: colors.white,
      borderWidth: 2
    },
    text: {
      color: colors.white,
      fontSize: buttonType === "text" ? size / 6 : size / 2,
    },
  });
