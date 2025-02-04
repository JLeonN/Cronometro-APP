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
    fontSize: 22,
    fontWeight: "bold",
    color: COLORES.opcion4,
    textTransform: "uppercase",
  },
  pantallaTiempo: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORES.textoGeneral,
    marginVertical: 20,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  boton: {
    backgroundColor: COLORES.botonPrimario,
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 4,
    alignItems: "center",
  },
  marca: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORES.opcion1,
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: "100%",
    maxWidth: 300,
  },
  numeroRedondo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORES.opcion4,
    color: COLORES.textoGeneral,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  tiempoMarca: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORES.textoGeneral,
  },
  diferencia: {
    fontSize: 14,
    color: COLORES.enlaceTexto,
    marginLeft: 10,
  },
});
