//app/index.tsx
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>app/index.tsx</Text>
      </View>
      <View style={styles.screencontainer}>
        <Link href="/(drawer)/profile">
          <Text style={styles.linktitle}>login</Text>
        </Link>
      </View>
    </View>
  );
}
