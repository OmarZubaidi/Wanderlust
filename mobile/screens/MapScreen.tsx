import { createStackNavigator } from '@react-navigation/stack';
import { Map } from '../components';

const Stack = createStackNavigator();

function MapScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='MapScreen'
        component={Map}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MapScreen;
