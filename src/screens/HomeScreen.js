import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Header from '../components/Header';
import colors from '../constant/colors';
import categoryData from '../data/categoryData';
import CategoryList from '../components/CategoryList';
import DoctorList from '../components/DoctorList';
import BottomTabNavigation from '../components/BottomTabNavigation';

const HomeScreen = ({ navigation }) => {
  const [categories, setCategories] = useState(categoryData);
  const [activeTab, setActiveTab] = useState('home');

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

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    console.log('Active Tab:', tab);
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.content}>
        {/* Header */}
        <Header
          profileImage="https://png.pngtree.com/thumb_back/fh260/background/20230612/pngtree-in-the-style-of-2d-game-art-image_2884743.jpg"
          onSearch={handleSearch}
        />

        {/* Categories */}
        <CategoryList categories={categories} onCategoryPress={handleCategoryPress} />

        {/* Doctors */}
        <DoctorList navigation={navigation} />
      </KeyboardAvoidingView>

      {/* Bottom Navigation */}
      <BottomTabNavigation activeTab={activeTab} onTabPress={handleTabPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingBottom: 80,
  },
});

export default HomeScreen;
