import React from 'react'
import { View, Text, Dimensions, StyleSheet, Image} from 'react-native'

import Carousel ,{ Pagination }from 'react-native-snap-carousel'

const DATA = [

  {
    body: "Donasi anda sangat berarti untuk akselerasi mitigasi COVID-19 di indonesia. ",
    imgUrl: "https://picsum.photos/id/11/200/300"
  },
  {
    body: "Covid itu nyata bukan hoax kata seorang yang jauh disana. ",
    imgUrl: "https://picsum.photos/id/10/200/300"
  },
  {
    body: "Cintaku padamu bagaikan angin ada tapi tak nampak.",
    imgUrl: "https://picsum.photos/id/12/200/300"
  },
]

//untuk mengambil lebar dimension yang ada pada layar
export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7) + 100



//TODO buat lebih modular lagi...
const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={{
            height: 150,
            width: 150
          }}
          source={require('../../img/logoCovidonation/logo_a.png')}
        />
      </View>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

export default function CarouselView() {

  const [index, setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)

    return (  
      <>
      <View style={styles.carouselContainer} >
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={DATA}
          renderItem={CarouselCardItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={ (index) => setIndex(index)  }
        />

          <View style={styles.paginationConatainer}>
          <Pagination 
              dotsLength={DATA.length}
              activeDotIndex={index}
              carouselRef={isCarousel}
              dotStyle={{
                width: 30,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.92)'
              }}
              inactiveDotStyle={{
                width: 15,
                height: 15,
                borderRadius: 10,
                marginHorizontal: -10,
                backgroundColor: 'rgba(0, 0, 0, 0.92)'

              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              tappableDots={true}
            />
          </View>

    </View>
    
      </>
       
        )
}

// TODO buat lebih modular lagi....
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    height: 130,
    lineHeight: 25,
    fontWeight: 'bold',
    textAlign: 'justify'
  },

  carouselContainer : {
    flex: 1,
    marginBottom: -40,
  },
  
  paginationConatainer: {
    marginBottom: 45,
    marginTop: -100,
     
  },

})
