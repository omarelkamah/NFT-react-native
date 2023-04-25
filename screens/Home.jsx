import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native'
import { COLORS, DATA, FONTS, SIZES } from '../constants';
import { useState } from 'react';
import NFTCard from '../components/NFTCard';
import HeaderWithSearch from '../components/HeaderWithSearch';
import NotFoundNFT from '../components/NotFoundNFT';

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);

  const searchHandler = (value) => {
    if (value) {
      let filterdNFTData = DATA.filter((nft) => nft.name.toLowerCase().includes(value.toLowerCase()))
      setNftsData(filterdNFTData)
    } else {
      setNftsData(DATA)
    }

    console.log(nftsData)
  }

  return (
    <SafeAreaView style={styles.container}>
      <HeaderWithSearch searchHandler={searchHandler} />
      {nftsData.length ? (<FlatList data={nftsData} renderItem={({item}) => <NFTCard NFTItem={item} />}
      keyExtractor={(item) => item.id}
      />) : <NotFoundNFT /> }
      
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: StatusBar.currentHeight + 10,
  },
});