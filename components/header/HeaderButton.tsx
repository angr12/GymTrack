import { Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";



interface HeaderButtonProps {
    iconUrl: string;
    dimension: number;
    handlePress: () => void;
}


const HeaderButton = ({ iconUrl, dimension, handlePress }: HeaderButtonProps) => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Image source={iconUrl}/>
      </TouchableOpacity>
    );
  };

export default HeaderButton;