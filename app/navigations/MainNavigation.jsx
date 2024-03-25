import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";
import AuthActionSelectScreen from "../screens/AuthActionSelectScreen/AuthActionSelectScreen";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import EmailConfirmation from "../screens/EmailConfirmation/EmailConfirmation";

const Stack = createNativeStackNavigator();
const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen
        name="AuthActionSelect"
        component={AuthActionSelectScreen}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
