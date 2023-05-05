import { View, Text, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants'

const NFTMoreinfo = ({address, tokenId, tokenSt, blockchain}) => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Text style={styles.title}>Contract Address</Text>
            <Text style={styles.value}>{address}</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>Token Id</Text>
            <Text style={styles.value}>{tokenId}</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>Token Standerd</Text>
            <Text style={styles.value}>{tokenSt}</Text>
        </View>
        <View style={styles.card}>
            <Text style={styles.title}>Blockchain</Text>
            <Text style={styles.value}>{blockchain}</Text>
        </View>
    </View>
  )
}

export default NFTMoreinfo

const styles =  StyleSheet.create({
    container: {
        marginTop: SIZES.large,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.medium,
        paddingBottom: SIZES.medium,
        borderBottomColor: COLORS.cardBg,
        borderBottomWidth: 1,

    },
    title: {
        color: COLORS.white,
    },
    value: {
        color: COLORS.gray,
    }
})
