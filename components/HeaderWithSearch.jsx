import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import avatar from "../assets/images/avatars/avatar03.jpg";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { COLORS, FONTS, SIZES } from '../constants';

const HeaderWithSearch = ({searchHandler}) => {
  return (
    <View style={styles.container}>
        <View style={styles.userContainer}>
            <View>
                <Image
                source={avatar}
                resizeMode="contain"
                style={{ width: 44, height: 44, borderRadius: 30 }}
            />
            </View>
            <View>
                <View>
                    <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                        <Text style={styles.userName}>Omar Ahmed</Text>
                        <MaterialCommunityIcons
                            name="check-decagram"
                            size={24}
                            color={COLORS.white}
                        />
                    </View>
                    <View>
                        <Text style={styles.userType}>Creator</Text>
                    </View>
                </View>
            </View>
        </View>
        <View style={styles.searchContainer}>
            <MaterialIcons name="search" size={24} color={COLORS.white} />
            <TextInput
                placeholder="Search by NFT name"
                placeholderTextColor={COLORS.white}
                style={{ flex: 1, color: COLORS.white }}
                onChangeText={searchHandler}
            />
        </View>
    </View>
  )
}

export default HeaderWithSearch


const styles = StyleSheet.create({
    container: {
        padding: 12,

    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    userName: {
        color: COLORS.white,
        fontSize: 20,
        fontFamily: FONTS.semiBold,
    },
    userType: {
        color: COLORS.white,
    },
    searchContainer: {
        borderRadius: SIZES.small,
        backgroundColor: COLORS.cardBg,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 30,
    }
})