import { View, Text, StyleSheet } from 'react-native'
import { COLORS } from '../constants'

const NFTDate = ({date}) => {
  return (
    <View>
      <Text style={styles.textDate}>{date}</Text>
    </View>
  )
}

export default NFTDate

const styles = StyleSheet.create({
    textDate: {
        color: COLORS.white,
        fontSize: 16
    }
})