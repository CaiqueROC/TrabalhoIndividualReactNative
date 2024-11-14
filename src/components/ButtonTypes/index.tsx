import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface PropsButton {
  title: string | number;
  propsBackgroundColor?: string;
  handleFunction: () => void;
}

export const ButtonTypes = ({ title, propsBackgroundColor, handleFunction }: PropsButton) => {
    
  return (
    <TouchableOpacity
     onPress={handleFunction}
      activeOpacity={0.2}
      >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
