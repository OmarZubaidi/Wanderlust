import { createStackNavigator } from '@react-navigation/stack';
import { Hotel } from '../components';

const Stack = createStackNavigator();

function HotelScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='HotelScreen'
        component={Hotel}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default HotelScreen;
