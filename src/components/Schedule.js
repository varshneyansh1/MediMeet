import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import moment from 'moment';
import colors from '../constant/colors';

const Schedule = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState(moment());

  // Generate dates for the current month
  const generateDates = () => {
    const startOfMonth = moment().startOf('month');
    const endOfMonth = moment().endOf('month');
    const dates = [];

    for (let day = startOfMonth; day <= endOfMonth; day.add(1, 'day')) {
      dates.push({
        date: day.format('D'),
        day: day.format('ddd'),
        fullDate: day.clone(),
      });
    }
    return dates;
  };

  const dates = generateDates();

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    if (onDateSelect) onDateSelect(date);
  };

  return (
    <>
    <View style={{flex:1,marginHorizontal:20,marginBottom:10}}>
        <Text style={{fontWeight:"600",fontSize:18}}>Schedules</Text>
    </View>
   
    <View style={styles.container}>
      <FlatList
        data={dates}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.fullDate.format('YYYY-MM-DD')}
        renderItem={({ item }) => {
          const isSelected = item.fullDate.isSame(selectedDate, 'day');
          const isToday = item.fullDate.isSame(moment(), 'day');

          return (
            <TouchableOpacity
              style={[
                styles.dateItem,
                isSelected && styles.selectedDateItem,
                isToday && !isSelected && styles.todayDateItem,
              ]}
              onPress={() => handleDateSelect(item.fullDate)}
            >
              <Text
                style={[
                  styles.dateText,
                  isSelected && styles.selectedText,
                  isToday && !isSelected && styles.todayText,
                ]}
              >
                {item.date}
              </Text>
              <Text
                style={[
                  styles.dayText,
                  isSelected && styles.selectedText,
                  isToday && !isSelected && styles.todayText,
                ]}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    paddingHorizontal: 10,
    
  },
  dateItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 19,
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 15,
    backgroundColor: colors.white,
    borderColor:"gray",
    borderWidth: 0.3,
  },
  selectedDateItem: {
    backgroundColor: colors.primaryGradientStart,
  },
  todayDateItem: {
    borderWidth: 1,
    borderColor:"gray"
  },
  dayText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  selectedText: {
    color: colors.white,
  },
  todayText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default Schedule;
