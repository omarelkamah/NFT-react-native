import { View, Text, SafeAreaView, StyleSheet, StatusBar, FlatList } from 'react-native'
import { COLORS, DATA, FONTS, SIZES } from '../constants';
import { useState } from 'react';
import NFTCard from '../components/NFTCard';

const Home = () => {
  const [nftsData, setNftsData] = useState(DATA);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={nftsData} renderItem={({item}) => <NFTCard NFTItem={item} />}
      keyExtractor={(item) => item.id}
      />
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
  notFoundContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: SIZES.xLarge,
  },
  notFoundText: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: SIZES.xLarge,
  },
});