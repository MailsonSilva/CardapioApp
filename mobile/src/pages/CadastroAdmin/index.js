import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Animated,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./styles";
import logo from "../../assets/logo.png";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export default function CadastroAdmin() {
  const navigation = useNavigation();
  const [largura] = useState(new Animated.Value(0));
  const [altura] = useState(new Animated.Value(30));
  const [opacity, setOpacity] = useState(new Animated.Value(0));

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  Animated.sequence([
    Animated.timing(largura, {
      toValue: 400,
      duration: 800,
    }),
    Animated.timing(altura, {
      toValue: 500,
      duration: 800,
    }),
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
    }),
  ]).start();

  async function saveCliente() {
    const data = {
      nome,
      email,
      senha,
    };

    try {
      const response = await api.post("administrator", data);
      alert(`${response.data.nome}, seu cadastro foi realizado com sucesso`);
      setNome("");
      setEmail("");
      setSenha("");
      navigation.goBack();
    } catch (error) {
      alert("Erro ao cadastrar, tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <View style={styles.header}>
          <Image source={logo} />
          <Text style={styles.headerTitle}>VendasApp</Text>
        </View>
      </View>

      <View style={styles.containerBody}>
        <ScrollView style={styles.containerScroll}>
          <Animated.View
            style={{
              width: largura,
              height: altura,
              backgroundColor: "#FFF",
              borderRadius: 7,
              alignItems: "center",
            }}
          >
            <Animated.View
              style={[
                styles.containerInput,
                {
                  opacity: opacity,
                },
              ]}
            >
              <TextInput
                style={[styles.input, { marginTop: 40 }]}
                placeholder={"Nome"}
                autoCorrect={false}
                autoCapitalize="none"
                value={nome}
                onChangeText={(value) => setNome(value)}
              />
              <TextInput
                style={styles.input}
                placeholder={"E-mail"}
                autoCorrect={false}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                style={styles.input}
                placeholder={"Senha"}
                autoCorrect={false}
                secureTextEntry
                value={senha}
                onChangeText={(value) => setSenha(value)}
              />
            </Animated.View>
            <Animated.View
              style={[styles.viewBottonSave, { opacity: opacity }]}
            >
              <TouchableOpacity style={styles.buttonSave} onPress={saveCliente}>
                <Text style={styles.textButtonSave}>Salvar</Text>
              </TouchableOpacity>
            </Animated.View>
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
}
