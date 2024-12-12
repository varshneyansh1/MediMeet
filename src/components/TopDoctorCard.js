import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../constant/colors';
import Icon from 'react-native-vector-icons/Ionicons';

const DoctorCard = ({ doctor, onAppointmentPress }) => {
  return (
    <View style={styles.card}>
      {/* Doctor Image and Rating */}
      <View style={styles.imageContainer}>
        <Image source={{ uri: doctor.image }} style={styles.doctorImage} />
        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color={colors.ratingStar} />
          <Text style={styles.ratingText}>{doctor.rating}</Text>
        </View>
      </View>

      {/* Doctor Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.doctorName}>{doctor.name}</Text>
        <Text style={styles.specialty}>
          {doctor.specialty}, {doctor.location}
        </Text>

        {/* Appointment Button */}
        <TouchableOpacity style={styles.appointmentButton} onPress={onAppointmentPress}>
          <Text style={styles.appointmentText}>Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.9,
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 14,
    color: colors.textPrimary,
    marginLeft: 5,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 5,
  },
  specialty: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 10,
  },
  appointmentButton: {
    backgroundColor: "#f7f8f8",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  appointmentText: {
    fontSize: 14,
    color: colors.textPrimary,
    fontWeight: '600',
  },
});

export default DoctorCard;
