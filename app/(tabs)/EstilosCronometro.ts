import { StyleSheet } from "react-native";
import { COLORES } from "./styles";

export default StyleSheet.create({
  contenedorCronometro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORES.fondoPrincipal,
    padding: 30,
    paddingHorizontal: 10,
    width: "100%",
  },
  subTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORES.opcion4,
    textTransform: "uppercase",
    marginBottom: 10,
  },
  pantallaTiempo: {
    fontSize: 40,
    fontWeight: "bold",
    color: COLORES.textoGeneral,
    marginVertical: 20,
  },
  botones: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    gap: 15,
  },
  boton: {
    backgroundColor: COLORES.botonPrimario,
    paddingVertical: 15,
    paddingHorizontal: 75,
    borderRadius: 8,
    alignItems: "center",
  },
  marca: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1E3A47",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 6,
    width: "100%",
  },
  numeroRedondo: {
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#2ECC71",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 36,
    marginRight: 12,
  },
  tiempoMarca: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    flex: 1,
  },
  diferencia: {
    fontSize: 16,
    color: "#58A6FF",
    marginLeft: 12,
  },
});
