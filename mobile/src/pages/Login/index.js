import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Animated,
  Keyboard,
  ActivityIndicator,
  AsyncStorage,
} from "react-native";
import styles from "./styles";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 150, y: 150 }));
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bounciness: 20,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
      }),
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 120,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 120,
        duration: 100,
      }),
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 150,
        duration: 100,
      }),
      Animated.timing(logo.y, {
        toValue: 150,
        duration: 100,
      }),
    ]).start();
  }

  async function handleLogin() {
    setIsLoading(true);
    if (email) {
      if (senha) {
        try {
          const response = await api.post("session", { email, senha });
          const nomeAdm = response.data.nome;

          navigation.navigate("Produtos");
          setEmail("");
          setSenha("");
        } catch (error) {
          alert("Falha no login, tente novamente.");
          setIsLoading(false);
        }
      } else {
        return alert("Preencha o campo senha."), setIsLoading(false);
      }
    } else {
      return alert("Preencha o campo email."), setIsLoading(false);
    }
    setIsLoading(false);
  }

  function handleButtonAccess() {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#2f2966" />;
    }

    return (
      <TouchableOpacity style={styles.buttonAcsess} onPress={handleLogin}>
        <Text style={styles.textAcsess}>Acessar</Text>
      </TouchableOpacity>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.containerBackground}>
      <View style={styles.containerLogo}>
        <Animated.Image
          style={{
            width: logo.x,
            height: logo.y,
          }}
          source={require("../../assets/img/logoLogin.png")}
        />
      </View>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
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

        {handleButtonAccess()}

        <TouchableOpacity
          style={styles.buttonRegister}
          onPress={() => navigation.navigate("CadastroAdmin")}
        >
          <Text style={styles.textRegister}>Criar Conta</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}
