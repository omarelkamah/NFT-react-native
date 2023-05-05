import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { COLORS, SIZES } from '../constants';
import { StatusBar } from 'expo-status-bar';
import NFTImage from '../components/NFTImage';
import NFTAvatars from '../components/NFTAvatars';
import NFTTitle from '../components/NFTTitle';
import NFTInfo from '../components/NFTInfo';
import NFTMoreinfo from '../components/NFTMoreinfo';

const NFTDetails = ({ route, navigation }) => {
  const { NFTItem } = route.params;

  const pressHandler = () => {
    navigation.goBack();
  };

  console.log(NFTItem)

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <NFTImage
          image={NFTItem.image}
          imageStyle={styles.imageStyle}
          love
          arrow
          pressHandler={pressHandler}
        />
      </View>
      <View style={styles.content}>

        <View style={styles.cardTop}>
          <NFTAvatars avatars={NFTItem.avatars} />
        </View>

        <View>
          <NFTTitle
            NFTName={NFTItem.name}
            creator={NFTItem.creator}
            date={NFTItem.date}
          />
          <View style={{ marginTop: SIZES.medium}}>
            <NFTInfo
              comments={NFTItem.comments}
              views={NFTItem.views}
              price={NFTItem.price}
            />
          </View>
          <View style={{ marginVertical: SIZES.medium }}>
            <NFTMoreinfo
              address={NFTItem.address}
              tokenId={NFTItem.tokenId}
              tokenSt={NFTItem.tokenSt}
              blockchain={NFTItem.blockchain}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NFTDetails


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg , paddingTop: 10},
  imageStyle: {
    width: "100%",
    height: 400,
    borderRadius: 20,
  },
  cardTop: {
    marginTop: -20
  },

  content: {
    paddingHorizontal: 20
  }



});