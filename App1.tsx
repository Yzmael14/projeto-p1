import React, { useState } from "react";
import { Button, Image, ScrollView, Text, TextInput, TouchableHighlight, TouchableHighlightBase, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import iconG from "./assets/g.jpeg"
import arrowdown from "./assets/arrowdown.jpeg"
import arrowright from "./assets/arrowright.jpeg"

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Olá, Gabriel!
        </Text>
        <Image source={iconG} style={styles.iconG} />
        <Image source={arrowdown} style={styles.arrowdown} />
      </View>
      
      <View style={styles.conta}>
      <TouchableOpacity activeOpacity={0.6} style={styles.iconButton}>
        <Text style={styles.contatext}>
          Conta
          <Image source={arrowright} style={styles.arrowdown} />          
        </Text>
        
        <Text style={styles.contatext}>
          R$ 100,00
        </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <View style={styles.menubox}>
          <Text style={styles.menutext}>
            Empréstimo
          </Text>
        </View>
      </View>
    </View>
  )
}