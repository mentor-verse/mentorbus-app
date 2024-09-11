import WebView from 'react-native-webview';

export default function QaBus() {
  return (
    <WebView
      source={{uri: 'https://mentor-verse.github.io/mentorbus-frontend/qabus'}}
      style={{flex: 1}}
    />
  );
}
