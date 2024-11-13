import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    header: {
        flexDirection: "row",
        justifyContent: "center",
        height: 50,
        marginTop: 45,
    },

    arrowleft: {
        marginRight: 10
    },

    arrowicon: {
        tintColor: "#0f0f0f"
    },

    searchbar: {
        fontSize: 16,
        backgroundColor: "#fff",
        width: 280,
        height: 40,
        marginTop: 5,
    },

    help: {
        marginLeft: 10
    },

    helpicon: {
        tintColor: "#0f0f0f"
    },

    bigword: {
        marginTop: 10,
        height: 100
    },
    areaPix: {
        fontSize: 32,
        fontWeight: "bold",
        marginLeft: 20,
        alignSelf: "baseline",
        marginTop: 50
    },

    Menu: {
        flexDirection: "row",
        marginTop: 25,
        justifyContent: "space-evenly",
    },

    menuTransfer: {
        height: 120,
        width: 120,
        borderRadius: 15,
        color: "#ffd5a8",
        backgroundColor: "#ff6201"
    },

    menuQr: {
        height: 120,
        width: 120,
        borderRadius: 15,
        color: "#ffd5a8",
        backgroundColor: "#ff6201",
    },

    menuKey: {
        height: 120,
        width: 120,
        borderRadius: 15,
        color: "#ffd5a8",
        backgroundColor: "#ff6201",
    },

    menuText: {
        color: "#ffd5a8",
        alignSelf: "baseline",
        fontSize: 16,
        marginTop: 55,
        marginLeft: 10,
    },

    menuTextKey: {
        color: "#ffd5a8",
        alignSelf: "baseline",
        fontSize: 16,
        marginTop: 40,
        marginLeft: 10,
    },

    menuIcon: {
        tintColor: "#ffd5a8",
        marginTop: 10,
        marginLeft: 10,
    },

    option: {
        marginTop: 10,
        height: 100
    },

    moreOptions: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 20,
        alignSelf: "baseline",
        marginTop: 35,
    },   

    optionList:{
        width: 350,
        marginTop: 15,
        alignSelf: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#eaeaea",
        height: 60        
    },

    optionIcon:{
        tintColor: "#0f0f0f",
        marginTop: 10
    },

    optionText:{
        marginTop: 10,
        marginLeft: 20,
        fontSize: 16,
    },

    arrowrightIcon: {
        marginLeft: 175,
        marginTop: 10,
    },


})