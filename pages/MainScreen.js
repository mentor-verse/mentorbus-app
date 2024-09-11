import React, {useState, useRef} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions, // 기기 너비를 가져오기 위한 import
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UseKakaoLogin} from '../components/UseKakaoLogin';
import {useNavigation} from '@react-navigation/native';
import SvgCloud from '../assets/Cloud.svg';
import SvgCloud2 from '../assets/Cloud2.svg';
import SvgLogo from '../assets/Logo.svg';
import {SvgXml} from 'react-native-svg'; // For SVG rendering in React Native

const MainScreen = () => {
  const {signInWithKakao} = UseKakaoLogin();
  const [loginResult, setLoginResult] = useState(null);
  const navigation = useNavigation();
  const growDivRef = useRef(null); // Reference for any animated elements
  const roadDivRef = useRef(null); // Reference for road animation

  // 기기의 너비를 가져옴
  const windowWidth = Dimensions.get('window').width;

  const saveLoginResult = async result => {
    try {
      const jsonValue = JSON.stringify(result);
      await AsyncStorage.setItem('transformedUserData', jsonValue);
    } catch (e) {
      console.error('Failed to save the login result', e);
    }
  };

  return (
    <LinearGradient
      colors={['#1485C4', '#55ABDC', '#FFF']} // Apply gradient colors
      style={styles.container}>
      {/* Cloud Components, using SvgXml to render the SVG */}
      <View style={[styles.cloud]}>
        <Image
          source={require('../assets/Cloud.svg')}
          style={styles.cloudImage} // 스타일을 추가하여 이미지 크기 조정
        />
      </View>
      <View style={[styles.cloud2]}>
        <Image
          source={require('../assets/Cloud2.svg')}
          style={styles.cloudImage2} // 동일하게 스타일 추가
        />
      </View>

      {/* Onboarding Title */}
      <Text style={styles.title}>대학생과 청소년을 메타버스에서 잇다</Text>

      {/* Logo SVG */}
      <View style={[styles.logo]}>
        <Image
          source={require('../assets/Logo.webp')}
          style={styles.logoImage} // 로고 이미지 크기 조정
        />
      </View>

      {/* Kakao Login Button */}
      <Pressable
        onPress={() => {
          signInWithKakao()
            .then(result => {
              setLoginResult(result);
              saveLoginResult(result);
              navigation.navigate('Onboarding');
            })
            .catch(error => {
              setLoginResult('Login failed');
              console.error('Login failed:', error);
            });
        }}>
        <Image
          source={require('../assets/kakaoLogin.webp')}
          style={styles.LoginImage} // 로고 이미지 크기 조정
        />
      </Pressable>

      {/* Logo SVG */}
      <View style={[styles.bus]}>
        <Image
          source={require('../assets/OnboardingBus.webp')}
          style={[styles.busImage, {width: 400}]} // 기기 너비로 이미지 크기 설정
        />
      </View>

      {/* Logo SVG */}
      <View style={[styles.road]}>
        <Image
          source={require('../assets/Road.webp')}
          style={[styles.roadImage, {width: windowWidth, height: 240}]} // 기기 너비로 이미지 크기 설정
        />
      </View>

      {/* Grow Div ref and Road Animation */}
      <View ref={growDivRef} style={styles.growDiv} />
      <ScrollView ref={roadDivRef} style={styles.roadDiv}>
        {/* Road animation or elements */}
        <Text>Zero Road</Text>
      </ScrollView>
    </LinearGradient>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  // 기존 스타일에 추가
  cloudImage: {
    width: 150, // 원하는 이미지 너비
    height: 100, // 원하는 이미지 높이
    resizeMode: 'contain', // 이미지의 비율을 유지하면서 맞추기
  },
  LoginImage: {
    width: 184, // 원하는 이미지 너비
    height: 45, // 원하는 이미지 높이
    resizeMode: 'contain', // 이미지의 비율을 유지하면서 맞추기
    marginTop: 20,
  },
  cloudImage2: {
    width: 135, // 원하는 이미지 너비
    height: 130, // 원하는 이미지 높이
    resizeMode: 'contain', // 이미지의 비율을 유지하면서 맞추기
  },
  logoImage: {
    width: 200, // 로고 이미지의 너비
    height: 60, // 로고 이미지의 높이
    resizeMode: 'contain', // 비율 유지
  },
  roadImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    resizeMode: 'contain', // 비율 유지
    zIndex: 1,
  },
  busImage: {
    top: 0,
    right: 140,
    height: 400,
    resizeMode: 'contain', // 비율 유지
    zIndex: 2,
  },
  // 나머지 스타일은 그대로 유지
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 360,
    fontSize: 19,
    color: '#fff',
    fontFamily: 'Pretendard',
    fontWeight: '600',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FEE500',
    borderRadius: 40,
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#3a1d1d',
  },
  resultText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  cloud: {
    position: 'absolute',
    top: 20,
    left: 40,
    zIndex: 0,
    // Styles for cloud elements
  },
  cloud2: {
    position: 'absolute',
    top: 20,
    right: 30,
    zIndex: 0,
    // Styles for cloud elements
  },
  growDiv: {
    height: 100, // Placeholder height
  },
  roadDiv: {
    width: '120%',
    marginLeft: '-20%',
  },
  logo: {
    width: 200, // 로고 영역의 너비
    height: 60, // 로고 영역의 높이
  },
  road: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
  },
});
