import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 20,
    backgroundColor: "#cd6133",
  },
  containerBody: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  botaoMenu: {
    color: "#FFF",
    fontSize: 30,
    marginRight: 20,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd32a",
  },
  botaoFinalizarText: {
    fontWeight: "bold",
    color: "#FFF",
    alignSelf: "center",
    backgroundColor: "#10ac84",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  produtoList: {
    marginTop: 5,
  },
  cardProduto: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: "#FFF",
    alignItems: "center",
    margin: 5,
  },
  produto: {
    padding: 5,
  },
  imagemProduto: {
    paddingHorizontal: "50%",
    paddingVertical: "40%",
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  nomeProduto: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#57606f",
    textAlign: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  valorProduto: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#ff4757",
  },
  viewValor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 4,
  },
  botaoAdd: {
    fontWeight: "bold",
    color: "#FFF",
    backgroundColor: "#10ac84",
    borderRadius: 100,
    fontSize: 26,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b55831",
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  botaoCarrinho: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleItem: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  botaoFinalizar: {
    backgroundColor: "#10ac84",
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});
