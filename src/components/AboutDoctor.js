import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constant/colors';

const AboutDoctor = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Doctor</Text>
      <Text style={styles.bio}>Dr. John Doe has over 15 years of experience in the medical field, specializing in cardiology. He is known for his compassionate approach and cutting-edge treatments that have helped over 350 patients.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
});

export default AboutDoctor;
