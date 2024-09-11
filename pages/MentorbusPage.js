import WebView from 'react-native-webview';

export default function MentorbusPage() {
  return (
    <WebView
      source={{
        uri: 'https://mentor-verse.github.io/mentorbus-frontend/mentorbus',
      }}
      style={{flex: 1}}
    />
  );
}
