import { Drawer } from "expo-router/drawer";
import {
  Button,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

export default function Layout() {
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <Drawer
      screenOptions={{
        headerRight: () => (
          <Button
            title="drawer"
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
        headerLeft: () => <></>,
        drawerPosition: "right",
        drawerType: dimensions.width >= 768 ? "permanent" : "front",
      }}
    >
      <Drawer.Screen
        name="profile" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
      <Drawer.Screen
        name="dashboard" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Dashboard",
          title: "dashboard",
        }}
      />
      <Drawer.Screen
        name="favorites" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Favorites",
          title: "favorites",
        }}
      />
    </Drawer>
  );
}
