import React, { useEffect } from 'react';
import { Alert, Button, Platform, Text, View } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import jwtDecode from 'jwt-decode';
import ENV from '../config/env';
import { styles } from '../styles';

const useProxy = Platform.select({ web: false, default: true });
const redirectUri = AuthSession.makeRedirectUri({ useProxy });
const authorizationEndpoint = ENV.auth0Domain || '';

interface Props {
  route: any;
}

function Login({ route }: Props) {
  const { name, setName } = route.params;
  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: ENV.auth0ClientId || '',
      clientSecret: ENV.auth0ClientSecret,
      // id_token will return a JWT token
      responseType: 'id_token',
      // retrieve the user's profile
      scopes: ['openid', 'profile'],
      extraParams: {
        // ideally, this will be a random value
        nonce: 'nonce',
      },
    },
    { authorizationEndpoint }
  );

  useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          'Error',
          result.params.error_description ||
            'Something went wrong, please try again.'
        );
        return;
      }
      if (result.type === 'success') {
        // Retrieve the JWT token and decode it
        // TODO these break it. Figure out why.
        const jwtToken = result.params.id_token;
        const decoded = jwtDecode(jwtToken);

        const { name } = decoded;
        setName(name || 'user');
      }
    }
  }, [result]);

  return (
    <View style={styles.container}>
      {name ? (
        <>
          <Text>You are logged in, {name}!</Text>
          <Button title='Log out' onPress={() => setName(null)} />
        </>
      ) : (
        <Button
          disabled={!request}
          title='Log in / Sign up'
          onPress={() => promptAsync({ useProxy })}
        />
      )}
    </View>
  );
}

export default Login;
