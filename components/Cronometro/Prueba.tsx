import React from "react";
import { View, Text } from "react-native";
import { estilosGlobales } from "../../app/(tabs)/styles";

export default function Prueba() {
  return (
    <View>
      <Text style={estilosGlobales.texto}>Este es un componente de prueba</Text>
    </View>
  );
}
