import { Drawer } from "expo-router/drawer";
import { Button, useWindowDimensions } from "react-native";
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
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
      <Drawer.Screen
        name="dashboard"
        options={{
          drawerLabel: "Dashboard",
          title: "dashboard",
        }}
      />
      <Drawer.Screen
        name="favorities"
        options={{
          drawerLabel: "Favorites",
          title: "favorites",
        }}
      />
    </Drawer>
  );
}
