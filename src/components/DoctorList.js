import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import DoctorCard from './DoctorCard';
import doctorData from '../data/doctorData';

const DoctorList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={doctorData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DoctorCard doctor={item} navigation={navigation} />
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
    marginBottom: 160,
  },
});

export default DoctorList;
