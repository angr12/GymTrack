import { Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";

import styles from "./header.style";


interface HeaderButtonProps {
    iconUrl: string;
    dimension: number;
    handlePress: () => void;
}


const HeaderButton = ({ iconUrl, dimension, handlePress }: HeaderButtonProps) => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Image 
        source={iconUrl}
        style={styles.btnDim(dimension)}
        />
      </TouchableOpacity>
    );
  };

export default HeaderButton;