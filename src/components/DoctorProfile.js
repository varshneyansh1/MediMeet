import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Doctor Profile Component
const DoctorProfile = ({ doctor }) => {
  return (
    <View style={styles.container}>
      {/* Doctor Image */}
      <Image source={{ uri: doctor.image }} style={styles.image} />

      {/* Doctor Details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{doctor.name}</Text>
        <Text style={styles.specialty}>{doctor.specialty}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:130,
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#fff',
    margin: 16,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    alignItems:"center"
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop:10
  },
  specialty: {
    fontSize: 16,
    color: '#555',
    marginVertical: 4,
    marginHorizontal:20
  },
  location: {
    fontSize: 14,
    color: '#777',
  },
});

export default DoctorProfile;
