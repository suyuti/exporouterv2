import { View, Text } from "react-native";
import { styles } from "../../../styles/styles";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>app/(drawer)/dashboard.tsx</Text>
      </View>
      <Text style={styles.linktitle}>dashboard</Text>
    </View>
  );
}
