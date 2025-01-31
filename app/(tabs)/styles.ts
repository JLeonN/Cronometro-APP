import { StyleSheet } from "react-native";

// Colores
export const COLORES = {
  fondoPrincipal: "#000", // Negro
  fondoNavegacion: "#1f1f1f", // Gris oscuro
  tituloPrincipal: "#4caf50", // Verde brillante
  textoGeneral: "#f5f5f5", // Blanco
  enlaceTexto: "#2a9d8f", // Verde azulado
  opcion1: "#264653", // Azul petróleo
  opcion2: "#e63946", // Rojo coral
  opcion3: "#f4a261", // Naranja cálido
  opcion4: "#2ecc71", // Verde esmeralda
  botonPrimario: "#00cc99", // Verde claro
  botonHover: "#009973", // Verde más oscuro
  botonActivo: "#006644", // Verde oscuro para clics
  colorHover: "#e63946", // Rojo coral
  fondoTransparente: "#000000cc", // Fondo negro con transparencia
  sombraSuave: "rgba(0, 0, 0, 0.5)", // Sombra ligera
};

// Fuentes personalizadas (deben cargarse en App.tsx)
export const FUENTES = {
  titulo: "Bungee", // Fuente llamativa para títulos
  texto: "RobotoMono", // Fuente legible para textos generales
};

// Estilos globales
export const estilosGlobales = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: COLORES.fondoPrincipal,
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontFamily: FUENTES.titulo,
    color: COLORES.tituloPrincipal,
  },
  texto: {
    fontSize: 16,
    fontFamily: FUENTES.texto,
    color: COLORES.textoGeneral,
  },
});
