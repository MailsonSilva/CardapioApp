import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from "./pages/Login";
import CadastroAdmin from "./pages/CadastroAdmin";
import Produtos from "./pages/Produtos";
import CadastroProdutos from "./pages/CadastroProdutos";
import Venda from "./pages/Venda";
import CustomDrawer from "./components/CustomDrawer/index";

const AppStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Produtoss = () => {
  return (
    <Drawer.Navigator drawerContent={CustomDrawer}>
      <Drawer.Screen name="Home" component={Produtos} />
      <Drawer.Screen name="Cadastrar Produtos" component={CadastroProdutos} />
    </Drawer.Navigator>
  );
};

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#b55831" barStyle="light-content" />
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="CadastroAdmin" component={CadastroAdmin} />
        <AppStack.Screen name="Produtos" component={Produtoss} />
        <AppStack.Screen name="Venda" component={Venda} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
