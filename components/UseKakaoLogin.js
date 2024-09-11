// useKakaoLogin.js https://velog.io/@psb7391/RN-React-Native-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EB%A1%9C%EA%B7%B8%EC%9D%B8
import {useState} from 'react';
import {
  login,
  logout,
  getProfile as getKakaoProfile,
  shippingAddresses as getKakaoShippingAddresses,
  unlink,
} from '@react-native-seoul/kakao-login';

export const UseKakaoLogin = () => {
  const [result, setResult] = useState('');

  const signInWithKakao = async () => {
    try {
      const result = await login();
      setResult(JSON.stringify(result));
      return result;
    } catch (error) {
      if (error.message.includes('user cancelled')) {
        console.log('User cancelled the login process.');
        // You might want to set a different state or show a specific message to the user
        setResult('Login process was cancelled by the user.');
      } else {
        console.error('signIn error', error);
        setResult('An error occurred during sign-in. Please try again.');
      }
      throw error; // Re-throw if you want the error to propagate
    }
  };

  const signOutWithKakao = async (): Promise<void> => {
    try {
      const message = await logout();
      setResult(message);
    } catch (err) {
      console.error('signOut error', err);
    }
  };

  const getProfile = async (): Promise<void> => {
    try {
      const profile = await getKakaoProfile();
      setResult(JSON.stringify(profile));
    } catch (err) {
      console.error('getProfile error', err);
    }
  };

  const getShippingAddresses = async (): Promise<void> => {
    try {
      const shippingAddresses = await getKakaoShippingAddresses();
      setResult(JSON.stringify(shippingAddresses));
    } catch (err) {
      console.error('getShippingAddresses error', err);
    }
  };

  const unlinkKakao = async (): Promise<void> => {
    try {
      const message = await unlink();
      setResult(message);
    } catch (err) {
      console.error('unlink error', err);
    }
  };

  return {
    result,
    signInWithKakao,
    signOutWithKakao,
    getProfile,
    getShippingAddresses,
    unlinkKakao,
  };
};
