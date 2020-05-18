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
    marginLeft: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffd32a",
  },
  containerBody: {
    alignItems: "center",
    justifyContent: "center",
  },
  containerScroll: {
    marginTop: "10%",
    marginBottom: "10%",
  },
  containerInput: {
    flex: 1,
    alignItems: "center",
    width: "100%",
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
    marginBottom: 20,
    backgroundColor: "#cd6133",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  textButtonSave: {
    fontSize: 22,
    color: "#FFF",
    fontWeight: "bold",
  },
});
