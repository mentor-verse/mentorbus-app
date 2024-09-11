// 웹뷰 페이지들
import WebView from 'react-native-webview';

export default function MainWeb() {
  return (
    <WebView
      source={{uri: 'https://mentor-verse.github.io/mentorbus-frontend/main'}}
      style={{flex: 1}}
    />
  );
}
