import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../constant/colors';

const CategoryList = ({ categories, onCategoryPress }) => {
  const renderCategoryItem = ({ item }) => (
    <View style={styles.categoryContainer}>
      <TouchableOpacity
        style={[
          styles.categoryItem,
          { backgroundColor: item.isSelected ? colors.white : colors.white },
        ]}
        onPress={() => onCategoryPress(item.id)}>
        <Image source={item.icon} style={styles.icon} />
      </TouchableOpacity>
      {/* Text Below the Card */}
      <Text style={[styles.categoryText, { color: colors.textSecondary }]}>
        {item.name}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Heading */}
      <View style={{ marginBottom: 20 }}>
        <Text
          style={{ fontSize: 20, fontWeight: '500', color: colors.textPrimary }}>
          Categories
        </Text>
      </View>
      {/* Category List */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCategoryItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingLeft: 15,
  },
  categoryContainer: {
    alignItems: 'center', // Centers the text and card together
    marginRight: 10,
  },
  categoryItem: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 0.3,
    borderWidth: 0.1,
    borderColor: 'gray',
  },
  icon: {
    width: 30,
    height: 30,
    objectFit: 'cover',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 5, // Adds some space between the card and text
  },
});

export default CategoryList;
