import { LinearGradient } from "expo-linear-gradient";
import Styles from "../constants/Style";

const Background = ({ children, startY, color1, color2 }) => {
    return (
        <LinearGradient
            style={{
                height: '100%',
                width: '100%',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-end',
                zIndex: -1,
                paddingLeft: Styles.Metrics.sidePadding,
                paddingRight: Styles.Metrics.sidePadding
            }}
            start={{ x: 0, y: startY }}
            end={{ x: 1, y: 0 }}
            colors={[color1, color2]}
        >
            {children}
        </LinearGradient>
    )
}

export default Background;