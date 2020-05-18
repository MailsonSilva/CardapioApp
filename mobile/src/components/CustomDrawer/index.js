import React from "react";
import { Text, View, Image } from "react-native";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";

import styles from "./styles";
import avatar from "../../assets/img/avatar.png";

export default function index({ ...props }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerAvatar}>
        <Image source={avatar} style={styles.avatar} />

        <Text style={styles.containerNome}> nomeAdm </Text>
      </View>

      <DrawerItemList {...props} />
    </View>
  );
}
