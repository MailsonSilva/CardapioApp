import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import logo from "../../assets/logo.png";

export default function index() {
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <Image source={logo} />
          <Text style={styles.headerTitle}>VendasApp</Text>
          <TouchableOpacity onPress={navigateBack}>
            <Icon name="back" style={styles.botaoBack} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerBody}>
        <View style={styles.containerForm}>
          <TextInput
            style={[styles.input, { marginTop: 40 }]}
            placeholder={"Nome"}
            autoCorrect={false}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder={"Valor"}
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="characters"
          />
          <TouchableOpacity style={styles.buttonSave} onPress={() => {}}>
            <Text style={styles.textButtonSave}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
