import WebView from 'react-native-webview';

export default function Profile() {
  return (
    <WebView
      source={{uri: 'https://mentor-verse.github.io/mentorbus-frontend/mypage'}}
      style={{flex: 1}}
    />
  );
}
