import {useEffect, useState} from 'react';
import {WebView} from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainWeb() {
  const [kakaoId, setKakaoId] = useState(null);

  // Fetch the Kakao ID from AsyncStorage
  useEffect(() => {
    const fetchKakaoId = async () => {
      const storedKakaoId = await AsyncStorage.getItem('kakao_id');
      setKakaoId(storedKakaoId);
    };
    fetchKakaoId();
  }, []);

  return (
    <WebView
      source={{
        uri: `https://mentor-verse.github.io/mentorbus-frontend/main?userId=${kakaoId}`,
      }}
      style={{flex: 1}}
      onMessage={event => {
        console.log('Message from WebView:', event.nativeEvent.data);
      }}
    />
  );
}
