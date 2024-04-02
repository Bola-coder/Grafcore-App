import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen";
import AuthActionSelectScreen from "../screens/AuthActionSelectScreen/AuthActionSelectScreen";
import Login from "../screens/Login/Login";
import Signup from "../screens/Signup/Signup";
import EmailConfirmation from "../screens/EmailConfirmation/EmailConfirmation";
import PersonalDetails from "../screens/PersonalDetails/PersonalDetails";
import PhoneNumberInput from "../screens/PhoneNumber/PhoneNumberInput";
import PhoneNumberConfirmation from "../screens/PhoneNumberConfirmations/PhoneNumberConfirmation";
import AddressInformation from "../screens/AddressInformation/AddressInformation";
import AccountCreationSuccess from "../screens/AccountCreationSuccess/AccountCreationSuccess";

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
      <Stack.Screen name="PersonalDetails" component={PersonalDetails} />
      <Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput} />
      <Stack.Screen
        name="PhoneNumberConfirmation"
        component={PhoneNumberConfirmation}
      />
      <Stack.Screen name="AddressInformation" component={AddressInformation} />
      <Stack.Screen
        name="AccountCreationSuccess"
        component={AccountCreationSuccess}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
