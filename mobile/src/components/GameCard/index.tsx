import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { TouchableOpacityProps, Text } from "react-native";
import {
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
} from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data }: Props) {
  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground style={styles.cover} source={data.cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
