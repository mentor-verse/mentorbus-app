import React, {useState, useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNav from './components/BottomNav';
import MainWeb from './pages/MainWeb';
import MentorbusPage from './pages/MentorbusPage';
import QaBus from './pages/QaBus';
import Profile from './pages/Profile';
import WhereMentor from './pages/WhereMentor';
import MainScreen from './pages/MainScreen';
import Onboarding from './pages/Onboarding';

const Stack = createNativeStackNavigator();

export default function App() {
  const [currentRouteName, setCurrentRouteName] = useState('');
  const navigationRef = useRef();

  // AsyncStorage에 값을 저장하는 함수
  const storeInitialRoute = async routeName => {
    try {
      await AsyncStorage.setItem('initialRoute', routeName);
    } catch (e) {
      console.error('Failed to save the route to storage');
    }
  };

  // AsyncStorage에서 초기 경로 가져오기
  const getInitialRoute = async () => {
    try {
      const savedRoute = await AsyncStorage.getItem('initialRoute');
      return savedRoute || 'MainScreen'; // 저장된 값이 없으면 기본값은 'MainScreen'
    } catch (e) {
      console.error('Failed to fetch the initial route from storage');
      return 'MainScreen'; // 실패한 경우에도 기본값을 반환
    }
  };

  // 앱 시작 시 초기 경로를 설정
  useEffect(() => {
    const fetchInitialRoute = async () => {
      const initialRoute = await getInitialRoute();
      setCurrentRouteName(initialRoute);
    };
    fetchInitialRoute();
  }, []);

  useEffect(() => {
    if (currentRouteName === 'MainWeb') {
      storeInitialRoute('MainWeb');
      navigationRef.current?.reset({
        index: 0,
        routes: [{name: 'MainWeb'}],
      });
    }
  }, [currentRouteName]);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        const initialRouteName = navigationRef.current.getCurrentRoute().name;
        setCurrentRouteName(initialRouteName);
      }}
      onStateChange={() => {
        const routeName = navigationRef.current.getCurrentRoute().name;
        setCurrentRouteName(routeName);
      }}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={currentRouteName}>
        {currentRouteName !== 'MainWeb' && (
          <>
            <Stack.Screen name="MainScreen" component={MainScreen} />
          </>
        )}
        <Stack.Screen name="MainWeb" component={MainWeb} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
