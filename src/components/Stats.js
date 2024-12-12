import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constant/colors';

const Stats = ({ stats }) => {
  return (
    <View style={styles.statsContainer}>
      {stats.map((stat, index) => (
        <View key={index} style={styles.statCard}>
          <Text style={styles.statValue}>{stat.value}</Text>
          <Text style={styles.statTitle}>{stat.title}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
    marginBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 15,
    backgroundColor:colors.primaryGradientStart
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    backgroundColor: colors.white,
    borderRadius:15,
    padding:12
  },
  statValue: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  statTitle: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

export default Stats;
