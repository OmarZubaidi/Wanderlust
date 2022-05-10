import { createStackNavigator } from '@react-navigation/stack';
import { Calendar } from '../components';

const Stack = createStackNavigator();

function CalendarScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CalendarScreen'
        component={Calendar}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default CalendarScreen;
