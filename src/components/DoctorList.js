import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DoctorCard from './DoctorCard';
import doctorData from '../data/doctorData';

const DoctorList = ({ onAppointmentPress }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={doctorData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DoctorCard doctor={item} onAppointmentPress={onAppointmentPress} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 15,
    marginBottom:120,
  },
});

export default DoctorList;
