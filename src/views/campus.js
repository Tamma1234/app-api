import React from "react";


import {StyleSheet, View, Text, ImageBackground, SafeAreaView, TextInput, TouchableOpacity} from "react-native";

const Campus = ({ navigation }) => {
    // const navigation = useNavigation();
    return (
        <ImageBackground style={{width: '100%', height: '82%', resizeMode: "cover",}}
                         source={require('../images/banner.jpg',)}>
            <SafeAreaView style={{flex: 1}}>
                <View style={{
                    width: "100%", height: "100%", backgroundColor: "#fff", marginTop: 400, borderTopLeftRadius: 20,
                    borderTopRightRadius: 20, flex: 1
                }}>
                    <View style={styles.tile}>
                        <Text style={styles.textTitle}>Welcome!</Text>
                    </View>
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 20,
                        marginVertical: 10
                    }}>
                        <Text style={styles.description}>Congratulations on becomming a member of Swinburne Vietnam.
                            Click "Continue" to join.</Text>
                        <TextInput style={styles.input}>Swinburne Ha Noi</TextInput>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        navigation.navigate('Login');
                    }}>
                        <Text style={styles.textButton}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tile: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    textTitle: {
        fontSize: 40,
        fontWeight: "bold",
        fontStyle: "italic",
    },

    description: {
        color: "#A0A1A2",
        textAlign: "center",
        fontSize: 16
    },

    input: {
        marginTop: 15,
        borderWidth: 1,
        padding: 7,
        width: "85%",
        borderRadius: 10,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        borderColor: "#F2F2F2"
    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red",
        padding: 10,
        marginHorizontal: "30%",
        borderRadius: 20,
        marginTop : 10
    },

    textButton: {
        textAlign: "center",
        color: "#EFF6FB",
        fontWeight : "bold",
        fontSize : 18
    }
});

export default Campus;