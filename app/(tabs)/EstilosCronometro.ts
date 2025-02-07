import { StyleSheet } from "react-native";
import { COLORES } from "./styles";

export default StyleSheet.create({
  contenedorCronometro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORES.fondoPrincipal,
    padding: 20,
  },
  subTitulo: {
    fontSize: 24, // Aumentamos un poco el tamaño
    fontWeight: "bold",
    color: COLORES.opcion4,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  pantallaTiempo: {
    fontSize: 40, // Tamaño más grande como en la versión web
    fontWeight: "bold",
    color: COLORES.textoGeneral,
    marginVertical: 20,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 15, // Espaciado entre botones (React Native 0.71+)
  },
  boton: {
    backgroundColor: COLORES.botonPrimario,
    paddingVertical: 15, // Más alto
    paddingHorizontal: 75, // Más ancho
    borderRadius: 8, // Bordes más redondeados
    alignItems: "center",
  },
  marca: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E3A47", // Azul oscuro similar al de la derecha
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginVertical: 6, // Espaciado entre marcas
    width: "150%", // Ocupará casi toda la pantalla
    maxWidth: 800, // Limita el ancho en pantallas grandes
    // alignSelf: "center",
  },
  numeroRedondo: {
    width: 35, // Más grande
    height: 35,
    borderRadius: 18,
    backgroundColor: "#2ECC71", // Verde más claro
    color: "#fff", // Texto en blanco
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 36, // Centrado perfecto dentro del círculo
    marginRight: 12,
  },
  tiempoMarca: {
    fontSize: 18, // Más grande para coincidir con la versión web
    fontWeight: "bold",
    color: "#FFFFFF", // Blanco para mejor visibilidad
    flex: 1, // Ocupa todo el espacio disponible
  },
  diferencia: {
    fontSize: 16,
    color: "#58A6FF", // Azul más claro para coincidir con la versión web
    marginLeft: 12,
  },
});
