import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import BackgroundTimer from "react-native-background-timer";
import estilos from "../../app/(tabs)/EstilosCronometro";

export default function Cronometro() {
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);
  const [marcas, setMarcas] = useState<
    { id: string; tiempoActual: number; diferencia: number }[]
  >([]);

  useEffect(() => {
    if (enMarcha) {
      BackgroundTimer.runBackgroundTimer(() => {
        setTiempo((anterior) => anterior + 10);
      }, 10);
    } else {
      BackgroundTimer.stopBackgroundTimer();
    }

    return () => {
      BackgroundTimer.stopBackgroundTimer();
    };
  }, [enMarcha]);

  const alternarInicioPausa = () => {
    setEnMarcha((estadoActual) => !estadoActual);
  };

  const manejarMarcaReinicio = () => {
    if (enMarcha) {
      const nuevaMarca = {
        id: `${Date.now()}`, // Evita duplicados
        tiempoActual: tiempo,
        diferencia:
          marcas.length > 0 ? tiempo - marcas[0].tiempoActual : tiempo,
      };
      setMarcas((anteriores) => [nuevaMarca, ...anteriores]);
    } else {
      setTiempo(0);
      setMarcas([]);
    }
  };

  const formatearTiempo = (milisegundos: number) => {
    const minutos = Math.floor(milisegundos / 60000);
    const segundos = Math.floor((milisegundos % 60000) / 1000);
    const decimas = Math.floor((milisegundos % 1000) / 10);
    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}.${decimas.toString().padStart(2, "0")}`;
  };

  return (
    <View style={estilos.contenedorCronometro}>
      <Text style={estilos.subTitulo}>Cronómetro</Text>

      <Text style={estilos.pantallaTiempo}>{formatearTiempo(tiempo)}</Text>

      <View style={estilos.botones}>
        <TouchableOpacity style={estilos.boton} onPress={alternarInicioPausa}>
          {enMarcha ? (
            <FontAwesome5 name="pause" size={24} color="white" />
          ) : (
            <AntDesign name="play" size={24} color="white" />
          )}
        </TouchableOpacity>

        <TouchableOpacity style={estilos.boton} onPress={manejarMarcaReinicio}>
          {enMarcha ? (
            <Entypo name="flag" size={24} color="white" />
          ) : (
            <FontAwesome5 name="stop" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={marcas}
        keyExtractor={(marca) => marca.id}
        renderItem={({ item, index }) => (
          <View style={estilos.marca}>
            <Text style={estilos.numeroRedondo}>{marcas.length - index}</Text>
            <Text style={estilos.tiempoMarca}>
              {formatearTiempo(item.tiempoActual)}
            </Text>
            <Text style={estilos.diferencia}>
              {formatearTiempo(item.diferencia)}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
