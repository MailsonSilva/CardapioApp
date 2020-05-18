import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight - 20,
    backgroundColor: "#cd6133",
  },
  containerHeader: {
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd32a",
    marginLeft: 10,
  },
  botaoBack: {
    color: "#ffd32a",
    fontSize: 30,
    paddingHorizontal: 5,
  },
  containerBody: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerForm: {
    marginTop: 30,
    marginHorizontal: 10,
    borderRadius: 7,
    width: "90%",
    height: "80%",
    backgroundColor: "#FFF",
    alignItems: "center",
  },
  input: {
    width: "90%",
    padding: 10,
    backgroundColor: "#FFF",
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#cd6133",
    fontSize: 18,
    borderRadius: 7,
  },
  viewBottonSave: {
    width: "90%",
  },
  buttonSave: {
    backgroundColor: "#cd6133",
    height: 40,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    marginTop: 250,
  },
  textButtonSave: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "bold",
  },
});
