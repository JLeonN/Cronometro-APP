import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { estilosGlobales } from "./styles";
import Cronometro from "@/components/Cronometro/Cronometro";

export default function App() {
  // Cargar las fuentes personalizadas
  const [fuentesCargadas] = useFonts({
    Bungee: require("../../assets/fonts/Bungee/Bungee-Regular.ttf"),
    Roboto_Mono: require("../../assets/fonts/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf"),
  });

  // Estado para manejar la carga de la app
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (fuentesCargadas) {
      setCargando(false);
    }
  }, [fuentesCargadas]);

  // Mostrar un indicador de carga mientras se cargan las fuentes
  if (cargando) {
    return (
      <View style={estilosGlobales.contenedor}>
        <ActivityIndicator size="large" color="#e63946" />
        <Text style={estilosGlobales.texto}>Cargando fuentes...</Text>
      </View>
    );
  }

  return (
    <View style={estilosGlobales.contenedor}>
      <Cronometro />
    </View>
  );
}
