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

const CategoryList = ({categories, onCategoryPress}) => {
  const renderCategoryItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.categoryItem,
        {backgroundColor: item.isSelected ? colors.white : colors.white},
      ]}
      onPress={() => onCategoryPress(item.id)}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={[styles.categoryText, {color: colors.textSecondary}]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={{marginBottom:20}}>
        <Text
          style={{fontSize: 20, fontWeight: '500', color: colors.textPrimary}}>
          Categories
        </Text>
      </View>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
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
  categoryItem: {
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    padding: 15,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0,
    shadowRadius: 0.1,
  },
  icon: {
    width: 30,
    height: 30,
    marginBottom: 5,
    objectFit: 'cover',
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '500',
  },
});

export default CategoryList;
