import React, { useEffect } from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios';
import ENV from '../config/env';
import { styles } from '../styles';

WebBrowser.maybeCompleteAuthSession();

async function getUserDetails(accessToken, setUserEmail) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${accessToken}`
    );
    setUserEmail(response.data.email);
  } catch (error) {
    console.log(error);
    Alert.alert("Couldn't log in", 'Please try again.');
  }
}

interface Props {
  route: any;
}

function Login({ route }: Props) {
  const { setUserEmail } = route.params;

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: ENV.googleClientId,
  });

  useEffect(() => {
    if (response && response.type === 'success') {
      getUserDetails(response.authentication.accessToken, setUserEmail);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => promptAsync()}>
        <Text>Log in / Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
