import React from 'react';
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constant/colors';

const Header = ({profileImage, onSearch}) => {
  return (
    <View style={styles.headerContainer}>
      {/* Top Section */}
      <View style={styles.topSection}>
      <Image source={{uri: profileImage}} style={styles.profileImage} />
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.headingText}>Let's find</Text>
          <Text style={styles.headingText}>your top doctor!</Text>
        </View>
       
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="search-outline" size={20} color={colors.textSecondary} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search health issue..."
          placeholderTextColor={colors.textSecondary}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.primaryGradientStart,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 25,
    marginBottom: 10,
  },
  topSection: {
 //   flexDirection: 'row',
 //   justifyContent: 'space-between',
 //   alignItems: 'center',
  },
  welcomeText: {
    fontSize: 22,
    color: colors.white,
    fontWeight: '400',
  },
  headingText: {
    fontSize: 30,
    color: colors.white,
    fontWeight: 'bold',
    marginTop: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    alignSelf: 'flex-end',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 10,
    marginTop: 20,
    padding: 10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: colors.textPrimary,
  },
});

export default Header;
