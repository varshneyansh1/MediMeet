import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import colors from '../constant/colors';
import categoryData from '../data/categoryData';
import CategoryList from '../components/CategoryList';
import DoctorList from '../components/DoctorList';


const HomeScreen = () => {
  const [categories, setCategories] = useState(categoryData);
  const handleCategoryPress = (categoryId) => {
    const updatedCategories = categories.map((category) =>
      category.id === categoryId
        ? { ...category, isSelected: true }
        : { ...category, isSelected: false }
    );
    setCategories(updatedCategories);
  };
  const handleSearch = (text) => {
    console.log('Search:', text);
  };
  const handleAppointmentPress = () => {
    alert('Your appointment has been booked successfully!');
  };

  return (
 
    <View style={styles.container}>
      {/* Header Component */}
      <Header
        profileImage="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-in-the-style-of-2d-game-art-image_2884743.jpg" // Replace with a real profile image URL
        onSearch={handleSearch}
      />

      {/* Categories Component */}
      <CategoryList categories={categories} onCategoryPress={handleCategoryPress} />
      {/* Doctor List */}
      <DoctorList onAppointmentPress={handleAppointmentPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default HomeScreen;
