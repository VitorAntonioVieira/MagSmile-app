import { LinearGradient } from "expo-linear-gradient";
import Styles from "../styles/Styles";

const Background = ({ children, startY, color1, color2 }) => {
    return (
        <LinearGradient
            style={{
                height: '100%',
                width: '100%',
                flex: 1,
                zIndex: -1,
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: Styles.Metrics.marginHorizontal
            }}
            start={{ x: -0.5, y: startY }}
            end={{ x: -0.9, y: 1 }}
            colors={[color1, color2]}
        >
            {children}
        </LinearGradient >
    )
}

export default Background;