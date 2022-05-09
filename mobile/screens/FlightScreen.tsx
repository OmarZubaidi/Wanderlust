import { createStackNavigator } from '@react-navigation/stack';
import { Flight } from '../components';

const Stack = createStackNavigator();

function FlightScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='FlightScreen'
        component={Flight}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default FlightScreen;
