import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import doctorData from '../data/doctorData';
import colors from '../constant/colors';
import DoctorCard from '../components/DoctorCard';

const TopDoctorsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [doctors, setDoctors] = useState(doctorData.slice(0, 10)); // Initially load 10 doctors
  const [page, setPage] = useState(1);

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      // Filter all doctors based on the search query
      const filteredDoctors = doctorData.filter((doctor) =>
        doctor.name.toLowerCase().includes(query.toLowerCase())
      );
      setDoctors(filteredDoctors);
    } else {
      // Show the full list when search is cleared
      setDoctors(doctorData);
    }
  };

  // Handle infinite scrolling
  const handleLoadMore = () => {
    if (searchQuery.trim()) {
      return; // Prevent infinite scroll while searching
    }

    const nextPage = page + 1;
    const newDoctors = doctorData.slice(0, nextPage * 10);
    if (newDoctors.length > doctors.length) {
      setDoctors(newDoctors);
      setPage(nextPage);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Top Doctor</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Icon
          name="search-outline"
          size={20}
          color={colors.textSecondary}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchBar}
          placeholder="Search Doctor"
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Doctor List */}
      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <DoctorCard doctor={item} navigation={navigation} />
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.textPrimary,
    flex: 1,
    textAlign: 'center',
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderWidth: 0.1,
    borderColor: 'gray',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: colors.textPrimary,
  },
});

export default TopDoctorsScreen;
