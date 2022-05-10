import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../components';

const Stack = createStackNavigator();

interface Props {
  name: string | null;
  setName: Function;
}

function LoginScreen({ name, setName }: Props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='LoginScreen'
        component={Login}
        initialParams={{ name, setName }}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default LoginScreen;
