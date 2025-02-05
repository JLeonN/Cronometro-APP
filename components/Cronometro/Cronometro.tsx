import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { AntDesign, FontAwesome5, Entypo } from "@expo/vector-icons";
import estilos from "../../app/(tabs)/EstilosCronometro";

export default function Cronometro() {
  // Estado para manejar el tiempo transcurrido
  const [tiempo, setTiempo] = useState(0);
  const [enMarcha, setEnMarcha] = useState(false);
  const [marcas, setMarcas] = useState<
    { id: string; tiempoActual: number; diferencia: number }[]
  >([]);

  // useRef para manejar el intervalo sin errores de tipo
  const intervalo = useRef<NodeJS.Timeout | null>(null);

  // Efecto para manejar el intervalo del cronómetro
  useEffect(() => {
    if (enMarcha) {
      intervalo.current = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 10);
      }, 10);
    } else if (!enMarcha && tiempo !== 0) {
      if (intervalo.current) {
        clearInterval(intervalo.current);
      }
    }

    return () => {
      if (intervalo.current) {
        clearInterval(intervalo.current);
      }
    };
  }, [enMarcha]);

  // Función para iniciar/pausar el cronómetro
  const manejarInicioPausa = () => {
    setEnMarcha(!enMarcha);
  };

  // Función para marcar el tiempo actual o reiniciar el cronómetro
  const manejarMarcarReiniciar = () => {
    if (enMarcha) {
      // Registra una marca de tiempo
      const nuevaMarca = {
        id: `${marcas.length}`,
        tiempoActual: tiempo,
        diferencia:
          marcas.length > 0 ? tiempo - marcas[0].tiempoActual : tiempo,
      };
      setMarcas((prevMarcas) => [nuevaMarca, ...prevMarcas]);
    } else {
      // Reinicia el cronómetro
      setTiempo(0);
      setMarcas([]);
    }
  };

  // Formatear el tiempo en mm:ss:ms
  const formatearTiempo = (tiempo: number) => {
    const minutos = Math.floor(tiempo / 60000);
    const segundos = Math.floor((tiempo % 60000) / 1000);
    const milisegundos = Math.floor((tiempo % 1000) / 10);

    return `${minutos.toString().padStart(2, "0")}:${segundos
      .toString()
      .padStart(2, "0")}.${milisegundos.toString().padStart(2, "0")}`;
  };

  return (
    <View style={estilos.contenedorCronometro}>
      <Text style={estilos.subTitulo}>Cronómetro</Text>

      <Text style={estilos.pantallaTiempo}>{formatearTiempo(tiempo)}</Text>

      <View style={estilos.botones}>
        <TouchableOpacity style={estilos.boton} onPress={manejarInicioPausa}>
          {enMarcha ? (
            <FontAwesome5 name="pause" size={24} color="white" />
          ) : (
            <AntDesign name="play" size={24} color="white" />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={estilos.boton}
          onPress={manejarMarcarReiniciar}
        >
          {enMarcha ? (
            <Entypo name="flag" size={24} color="white" />
          ) : (
            <FontAwesome5 name="stop" size={24} color="white" />
          )}
        </TouchableOpacity>
      </View>

      <FlatList
        data={marcas}
        keyExtractor={(item) => item.id}
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
