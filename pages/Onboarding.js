import React from 'react';
import WebView from 'react-native-webview';
import {useNavigation} from '@react-navigation/native'; // 네비게이션 사용

export default function Onboarding() {
  const navigation = useNavigation(); // 네비게이션 훅 사용

  // 웹뷰의 URL 변경을 감지하여 네이티브 네비게이션으로 화면 전환
  const handleWebViewNavigation = event => {
    const {url} = event;

    // URL이 'main' 페이지로 변경되면 MainWeb 화면으로 이동
    if (
      url !==
      'https://mentor-verse.github.io/mentorbus-frontend/onboarding?specialQuery=true'
    ) {
      navigation.navigate('MainWeb');
    }
  };

  return (
    <WebView
      source={{
        uri: 'https://mentor-verse.github.io/mentorbus-frontend/onboarding?specialQuery=true',
      }}
      style={{flex: 1}}
      onNavigationStateChange={handleWebViewNavigation} // URL 변경 시 핸들러 호출
    />
  );
}
