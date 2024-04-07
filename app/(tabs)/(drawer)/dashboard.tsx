import { View, Text } from "react-native";
import { styles } from "../../../styles/styles";

export default function Page() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>app/(tabs)/(drawer)/dashboard.tsx</Text>
      </View>
      <Text style={styles.linktitle}>dashboard</Text>
    </View>
  );
}
