import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles2";
import arrowLeft from "./assets/arrowleft32.jpeg"
import help from "./assets/help32.jpeg"
import transfer from "./assets/transfer24.jpeg"
import qrCode from "./assets/qrcode24.jpeg"
import key from "./assets/key24.jpeg"
import arrowrighttobracket from "./assets/arrowright24.jpeg"
import anglearrowright from "./assets/anglearrowright24.jpeg"
import arrowdownfromline from "./assets/arrowdownfromline24.jpeg"


export default function app() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.arrowleft}>
                    <Image source={arrowLeft} style={styles.arrowicon} />
                </Text>
                <TextInput style={styles.searchbar} placeholder="Pesquisar" />
                <Text style={styles.help}>
                    <Image source={help} style={styles.helpicon} />
                </Text>
            </View>

            <View style={styles.bigword}>
                <Text style={styles.areaPix}>
                    área Pix
                </Text>
            </View>

            <View style={styles.Menu}>
                <View style={styles.menuTransfer}>
                    <Image source={transfer} style={styles.menuIcon} />
                    <Text style={styles.menuText}>
                        transferir
                    </Text>
                </View>

                <View style={styles.menuQr}>
                    <Image source={qrCode} style={styles.menuIcon} />
                    <Text style={styles.menuText}>
                        QR Code
                    </Text>
                </View>

                <View style={styles.menuKey}>
                    <Image source={key} style={styles.menuIcon} />
                    <Text style={styles.menuTextKey}>
                        minhas{'\n'}chaves
                    </Text>
                </View>
            </View>

            <View style={styles.option}>
                <Text style={styles.moreOptions}>
                    outras opções
                </Text>
            </View>

            <View style={styles.optionList}>
                <Image source={arrowrighttobracket} style={styles.optionIcon} />
                <Text style={styles.optionText}>
                    Pix copia e cola
                </Text>
                <Image source={anglearrowright} style={styles.arrowrightIcon} />
            </View>
            <View style={styles.optionList}>
                <Image source={arrowdownfromline} style={styles.optionIcon} />
                <Text style={styles.optionText}>
                    Saque e troco {'\t'}
                </Text>
                <Image source={anglearrowright} style={styles.arrowrightIcon} />
            </View>

        </View>
    )
}