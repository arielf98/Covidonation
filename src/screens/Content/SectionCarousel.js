import React from 'react'
import { Image, View, Dimensions } from 'react-native'
import { styles } from '../../Style/ContentStyle'
import Carousel ,{ Pagination }from 'react-native-snap-carousel'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Dimensions.get('window').width

const DataCarousel = [
    {
        id: 1,
        img: "https://picsum.photos/700",
    },
    {
        id: 2,
        img: "https://picsum.photos/600",
    },
    {
        id: 3,
        img: "https://picsum.photos/800",
    },
    {
        id: 4,
        img: "https://picsum.photos/500",
    },
    {
        id: 5,
        img: "https://picsum.photos/900",
    },
];

const ItemCarousel = ({ item, index }) => {
    return (
        <Image
            key={index}
            style={styles.previewImg}
            resizeMode="cover"
            source={{ uri: item.img }}
        />
    )
}

const SectionCarousel = () => {

    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)

    return (
        <View>
            <Carousel
                layout="stack"
                layoutCardOffset={9}
                ref={isCarousel}
                data={DataCarousel}
                renderItem={ItemCarousel}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideShift={0}
                useScrollView={true}
                onSnapToItem={ (index) => setIndex(index)  }
            >
            </Carousel>
            <View style={{
                marginTop: -15,
                marginBottom: -35,
            }}>
                <Pagination 
                dotsLength={DataCarousel.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 20,
                    height: 7,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
                inactiveDotStyle={{
                    width: 12,
                    height: 12,
                    borderRadius: 10,
                    marginHorizontal: -10,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'

                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                tappableDots={true}
                />
            </View>

            
        </View>
    )
}

export default SectionCarousel