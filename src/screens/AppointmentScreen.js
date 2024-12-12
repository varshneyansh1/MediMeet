import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, ToastAndroid, TouchableOpacity } from 'react-native';
import TitleHeader from '../components/TitleHeader';
import doctorData from '../data/doctorData';
import { useRoute } from '@react-navigation/native';
import DoctorProfile from '../components/DoctorProfile';
import colors from '../constant/colors';
import AboutDoctor from '../components/AboutDoctor';
import Stats from '../components/Stats';
import Schedule from '../components/Schedule';
import TimeSlot from '../components/TimeSlot';

const AppointmentScreen = ({ navigation }) => {
   // Get the doctor passed from the previous screen
   const route = useRoute();
  const doctor = route?.params?.doctor; // Safely access `doctor`

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelection = (date) => {
    console.log('Selected Date:', date.format('YYYY-MM-DD'));
  };
  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      // Show success toast
      ToastAndroid.show(
        'Your appointment has been booked successfully',
        ToastAndroid.SHORT
      );
    } else {
      // Show error toast
      ToastAndroid.show(
        'Please select a date and time slot',
        ToastAndroid.SHORT
      );
    }
  };
   return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <TitleHeader title="Appointment" onBackPress={() => navigation.goBack()} />

      {/* Doctor Profile */}
      {doctor ? (
        <DoctorProfile doctor={doctor} />
      ) : (
        <Text style={styles.errorText}>Doctor not found</Text>
      )}

<ScrollView contentContainerStyle={styles.content}>
        {/* Stats */}
        <Stats
          stats={[
            { value: '350+', title: 'Patients' },
            { value: '15+', title: 'Exp. Years' },
            { value: '284+', title: 'Reviews' },
          ]}
        />

        {/* About Doctor */}
        <AboutDoctor />
         {/* Calendar */}
         <Schedule onDateSelect={setSelectedDate} />
         {/* Time Slots */}
        <TimeSlot
          timeSlots={['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM']}
          onTimeSelect={setSelectedTime}
        />
          {/* Book Appointment Button */}
          <TouchableOpacity style={styles.button} onPress={handleBookAppointment}>
          <Text style={styles.buttonText}>Book Appointment</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  content: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: colors.primaryGradientStart,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 1,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AppointmentScreen;