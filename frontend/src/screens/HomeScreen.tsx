import * as React from "react";
import { View, Text } from "react-native";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";


export default function HomeScreen() {
return (
<View className="flex-1 p-4 gap-4">
<Text className="text-2xl font-bold text-foreground">Home</Text>
<Text className="text-base text-muted">Bem-vindo! Use a aba Compra para registrar suas compras.</Text>


<Card>
<Text className="text-lg font-semibold text-foreground mb-2">Dica</Text>
<Text className="text-muted mb-3">Você pode personalizar o tema em <Text className="font-semibold">tailwind.config.js</Text>.</Text>
<Button title="Explorar" onPress={() => {}} />
</Card>
</View>
);
}