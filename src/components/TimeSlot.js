import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constant/colors';

const TimeSlot = ({ timeSlots, onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    if (onTimeSelect) onTimeSelect(time);
  };

  return (
    <>
    <View style={{flex:1,marginHorizontal:20,marginBottom:10}}>
           <Text style={{fontWeight:"600",fontSize:18}}>Visit Hour</Text>
       </View>
    <View style={styles.container}>
      {timeSlots.map((slot, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.timeSlot,
            selectedTime === slot && styles.selectedTimeSlot,
          ]}
          onPress={() => handleTimeSelect(slot)}
        >
          <Text
            style={[
              styles.timeText,
              selectedTime === slot && styles.selectedTimeText,
            ]}
          >
            {slot}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
    marginHorizontal:19
  },
  timeSlot: {
    width: '30%', // Adjust for 3 in a row
    paddingVertical: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 15,
    borderWidth: 0.2,
  },
  selectedTimeSlot: {
    backgroundColor: colors.primaryGradientStart,
  },
  timeText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  selectedTimeText: {
    color: colors.white,
  },
});

export default TimeSlot;
