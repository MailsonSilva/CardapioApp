import React, { useState, useEffect } from "react";
import { View, Image, Text, TouchableOpacity, Picker } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import styles from "./styles";
import logo from "../../assets/logo.png";

export default function Venda() {
  const navigation = useNavigation();
  const [tranportadora, setTranportadora] = useState();
  const [pagamento, setPagamento] = useState();
  const [tipopagamento, setTipoPagamento] = useState();
  const [frete, setFrete] = useState();

  useEffect(() => {
    valorFrete(0);
  }, []);

  function navigateBack() {
    navigation.goBack();
  }

  function valorFrete(index = 0) {
    index === 0 ? setFrete("10,00") : setFrete("00");
  }

  function tranport(itemValue, itemIndex) {
    setTranportadora(itemValue);
    valorFrete(itemIndex);
  }
  function pagament(itemValue, itemIndex) {
    setPagamento(itemValue);
  }
  function tipoPagament(itemValue, itemIndex) {
    setTipoPagamento(itemValue);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.header}>
          <Image source={logo} />
          <Text style={styles.headerTitle}>VendasApp</Text>
          <TouchableOpacity onPress={navigateBack}>
            <Icon name="back" style={styles.botaoBack} />
          </TouchableOpacity>
        </View>

        <View style={styles.vendaContainer}>
          <View style={[styles.radioTipoPagamento, { marginTop: 15 }]}>
            <Picker
              selectedValue={pagamento}
              style={styles.pickerPagamento}
              onValueChange={(itemValue, itemIndex) =>
                pagament(itemValue, itemIndex)
              }
            >
              <Picker.Item label="À vista" value="avista" />
              <Picker.Item label="Parcelado" value="parcelado" />
            </Picker>
          </View>
          <View style={styles.radioTipoPagamento}>
            <Picker
              selectedValue={tipopagamento}
              style={styles.pickerPagamento}
              onValueChange={(itemValue, itemIndex) =>
                tipoPagament(itemValue, itemIndex)
              }
            >
              <Picker.Item label="Dinheiro" value="dinheiro" />
              <Picker.Item label="Cartão Crédito" value="cartaoCredito" />
              <Picker.Item label="Cartão Débito" value="cartaoDebito" />
            </Picker>
          </View>
          <View style={styles.radioTipoPagamento}>
            <Picker
              selectedValue={tranportadora}
              style={styles.pickerTranportadora}
              onValueChange={(itemValue, itemIndex) =>
                tranport(itemValue, itemIndex)
              }
            >
              <Picker.Item label="Entrega" value="entrega" />
              <Picker.Item label="Retirada" value="retirada" />
            </Picker>
            <Text style={styles.textFrete}>Frete R$: {frete}</Text>
          </View>

          <View style={styles.enderecoContainer}>
            <Text style={styles.textFrete}>Endereço: </Text>
            <Text style={styles.textFrete}>Cidade: </Text>
            <Text style={styles.textFrete}>UF: </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.botaoFinalizarText}>Finalizar Compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
