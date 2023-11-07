import { View, StyleSheet, TouchableOpacity, Text } from "react-native"
import { useState } from "react";
import { PublicRoute } from "../routes/routes";
import { useNavigation } from '@react-navigation/native';
import Clock from "../components/Clock";


export default function MenuBeta() {
    const navigation = useNavigation();
    const [dataButton, setDataButton] = useState([
        {
            id: 1,
            name: "Entrada",
            path: `${PublicRoute.scanQr}`
        },
        {
            id: 2,
            name: "Almuerzo Entrada",
            path: `${PublicRoute.login}`
        },
        {
            id: 3,
            name: "Almuerzo Salida",
            path: `${PublicRoute.login}`
        },
        {
            id: 4,
            name: "Salida",
            path: `${PublicRoute.standOrder}`
        }
    ]);


    const handleClick = (path) => {
        navigation.navigate(path);
    }

    return (
        <View style={styles.container}>
        <Clock />
            {dataButton ? (
                dataButton.map((data, i) => (
                    <View key={i} style={styles.button}>
                        <TouchableOpacity>
                            <Text onPress={() => handleClick(data.path)} style={styles.textStyle}>
                                {data.name}
                            </Text>
                        </TouchableOpacity >
                    </View>
                ))
            ) : (
                <>
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        margin: 16,
        backgroundColor: "#2b3d6d",
        width: "75%",
        height: "8%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 13
    },
    textStyle: {
        color: "white",
        fontSize: 18,
    },
    input: {
        width: 240,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 9,
        borderRadius: 13
    },
})
