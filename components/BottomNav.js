import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'; // Import the necessary components

const BottomNav = () => {
  const navigation = useNavigation();
  const [position, setPosition] = useState(null);

  useEffect(() => {
    // 로컬 스토리지에서 position 값을 가져오는 대신, RN에서 AsyncStorage 등을 사용할 수 있음
    const storedPosition = '멘토'; // 예시로 '멘토'로 하드코딩, 실제 구현에서는 AsyncStorage 등에서 불러와야 함
    setPosition(storedPosition);
  }, []);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('MainWeb')}>
        <Text>Main</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Find')}>
        <Text>Find</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MentorbusPage')}>
        <Text>Mentorbus</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('QABus')}>
        <Text>QABus</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        <Text>MyPage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
});
