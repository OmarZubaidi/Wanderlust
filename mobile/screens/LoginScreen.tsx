import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../components';

const Stack = createStackNavigator();

interface Props {
  name: string | null;
  setName: Function;
}

function LoginScreen({ setUserEmail }: Props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        component={Login}
        initialParams={{ setUserEmail }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default LoginScreen;
