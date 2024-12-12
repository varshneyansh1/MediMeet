import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../constant/colors';
import { useNavigation } from '@react-navigation/native';

const BottomTabNavigation = ({ activeTab, onTabPress }) => {
    const navigation = useNavigation();
  const tabs = [
    { id: 'home', icon: 'home-outline', label: 'Home' },
    { id: 'calendar', icon: 'calendar-outline', label: 'Calendar' },
    { id: 'messages', icon: 'chatbubble-outline', label: 'Messages' },
    { id: 'add', icon: 'add-circle-outline', label: 'Add' },
  ];
  const handleTabPress = (tabId) => {
    if (tabId === 'add') {
      navigation.navigate('TopDoctor'); // Navigate to TopDoctorsScreen
    } else {
      onTabPress(tabId); // Update active tab state
    }
  };
  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab.id}
          style={styles.tab}
          onPress={() => handleTabPress(tab.id)}
        >
          {/* Icon */}
          <Icon
            name={tab.icon}
            size={28}
            color={activeTab === tab.id ? colors.primaryGradientStart : colors.textSecondary}
          />
          {/* Dot Indicator */}
          {activeTab === tab.id && tab.id !== 'add' && <View style={styles.activeDot} />}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
    marginHorizontal: 15,
    borderRadius:15,
    borderWidth:0.2,
    marginBottom:0.5,
    
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.primaryGradientStart,
    marginTop: 4,
  },
});

export default BottomTabNavigation;
