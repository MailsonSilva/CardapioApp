import React, { useState, useEffect } from "react";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo.png";
import styles from "./styles";
import api from "../../services/api";

export default function Produtos() {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [enderecos, setEnderecos] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  let burguer = require("../../assets/img/burguer.jpg");

  async function loadProdutos() {
    if (loading) {
      return;
    }
    if (total > 0 && produtos.length === total) {
      return;
    }
    setLoading(true);
    const response = await api.get("produtos", {
      params: { page },
    });

    setProdutos([...produtos, ...response.data]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }

  async function loadEndereco() {
    const response = await api.get("enderecos");
    setEnderecos(response.data);
  }

  function navigateVenda() {
    loadEndereco();
    navigation.navigate("Venda");
  }

  function toggleDrawer() {
    navigation.toggleDrawer();
  }

  useEffect(() => {
    loadProdutos();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerBody}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => toggleDrawer()}>
            <Icon name="menu" style={styles.botaoMenu} />
          </TouchableOpacity>

          <Image source={logo} />
          <Text style={styles.headerTitle}>VendasApp</Text>
        </View>

        <FlatList
          data={produtos}
          style={styles.produtoList}
          keyExtractor={(produto) => String(produto.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReached={loadProdutos}
          onEndReachedThreshold={0.3}
          renderItem={({ item: produto }) => (
            <View style={styles.cardProduto}>
              <View style={styles.produto}>
                <Image style={styles.imagemProduto} source={burguer} />
                <Text style={styles.nomeProduto}>{produto.nome}</Text>
                <View style={styles.viewValor}>
                  <Text style={styles.valorProduto}>
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(produto.valor)}
                  </Text>
                  <TouchableOpacity onPress={() => {}}>
                    <Icon name="add" style={styles.botaoAdd} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.botaoCarrinho} onPress={() => {}}>
          <Icon name="add-shopping-cart" size={30} color={"#FFF"} />
          <Text style={styles.titleItem}>0 Itens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => navigateVenda()}
        >
          <Text style={styles.botaoFinalizarText}>Finalizar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
