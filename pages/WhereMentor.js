import WebView from 'react-native-webview';

export default function WhereMentor() {
  return (
    <WebView
      source={{uri: 'https://mentor-verse.github.io/mentorbus-frontend/find'}}
      style={{flex: 1}}
    />
  );
}
