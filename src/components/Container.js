import { View } from 'react-native';

const Container = ({ children, justify, height }) => {
    return (
        <View style={{
            flex: height,
            alignItems: 'center',
            justifyContent: justify,
            marginHorizontal: 30,
        }}>
            {children}
        </View>
    )
}

export default Container;