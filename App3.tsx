import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import iconG from "./assets/g.jpeg"
import arrowdown32 from "./assets/arrowdown32.jpeg"
import lock from "./assets/lock.jpeg"
import transfer from "./assets/transfer.jpeg"
import barcode from "./assets/barcode.jpeg"
import card from "./assets/card.jpeg"
import list from "./assets/list.jpeg"
import pix from "./assets/pix24.jpeg"
import info from "./assets/info.jpeg"
import token from "./assets/pager.jpeg"

export default function app() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.userIcon}>
                    <Image source={iconG} style={styles.iconG} />
                </View>
                <View style={styles.headerMid}>
                    <Text numberOfLines={2} style={styles.headerText}>
                        {"Olá, Gabriel\nagência ••31 conta •••21-6"}
                    </Text>
                </View>
                <View style={styles.headerArrow}>
                    <Image source={arrowdown32} style={styles.arrowDown} />
                </View>
            </View>

            <View style={styles.accessAccount}>
                <View style={styles.account}>
                    <Image source={lock} style={styles.accountLock} />
                    <Text style={styles.accountText}>
                        acessar conta
                    </Text>
                </View>
            </View>

            <View style={styles.firstMenu}>
                <View style={styles.menuTransfer}>
                    <Image source={transfer} style={styles.accountMenuIcon} />
                    <Text style={styles.menuText}>
                        pix e transferir
                    </Text>
                </View>

                <View style={styles.menuPayment}>
                    <Image source={barcode} style={styles.accountMenuIcon} />
                    <Text style={styles.menuText}>
                        pagar
                    </Text>
                </View>
            </View>

            <View style={styles.firstMenu}>
                <View style={styles.menuTransfer}>
                    <Image source={list} style={styles.accountMenuIcon} />
                    <Text style={styles.menuText}>
                        extrato
                    </Text>
                </View>

                <View style={styles.menuPayment}>
                    <Image source={card} style={styles.accountMenuIcon} />
                    <Text style={styles.menuText}>
                        cartoes
                    </Text>
                </View>
            </View>

            <View style={styles.secondMenu}>
                <View style={styles.menuPix}>
                    <Image source={pix} style={styles.secondMenuIcon} />
                    <Text style={styles.secondMenuText}>
                        área pix
                    </Text>
                </View>

                <View style={styles.menuToken}>
                    <Image source={token} style={styles.secondMenuIcon} />
                    <Text style={styles.secondMenuText}>
                        iToken
                    </Text>
                </View>

                <View style={styles.menuHelp}>
                    <Image source={info} style={styles.secondMenuIcon} />
                    <Text style={styles.secondMenuText}>
                        ajuda
                    </Text>
                </View>
            </View>
        </View>
    )
}