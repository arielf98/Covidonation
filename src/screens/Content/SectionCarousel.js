import React, { useEffect, useState, useContext } from 'react'
import { styles } from '../../Style/ContentStyle'

import { Image, View, Dimensions } from 'react-native'
import Carousel, { Pagination }from 'react-native-snap-carousel'

import { utils } from '@react-native-firebase/app'
import storage from '@react-native-firebase/storage'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Dimensions.get('window').width

const ItemCarousel = ({ item, index }) => {
    return (
        <Image
            key={index}
            style={styles.previewImg}
            resizeMode="cover"
            source={{ uri: item }}
        />
    )
}

const SectionCarousel = ({data}) => {

    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)
    const [dataCarousel, setDataCarousel] = useState(data)

    const [urlImg, setUrlImg] = useState(['https://firebasestorage.googleapis.com/v0/b/covidonation.appspot.com/o/contents%2Fthumbnail%2Fdefault.png?alt=media&token=9cb3ed3a-84b8-4b20-a843-a325582c00f2', 'https://firebasestorage.googleapis.com/v0/b/covidonation.appspot.com/o/contents%2Fthumbnail%2Fdefault.png?alt=media&token=9cb3ed3a-84b8-4b20-a843-a325582c00f2'])

    useEffect(() => {

        async function getUrlImg (media)
        {
            const data = await storage()
                .ref('contents/preview/' + media)
                .getDownloadURL();
            urlImg.push(data);
            console.log("Data: " + data);
        }
        
        dataCarousel.forEach(item => {
            if(item != null)
            {
                getUrlImg(item.media);
                console.log("Itemnya: " + item.media);
            }
        });

        console.log("Panjang: " + urlImg.length)

        console.log(urlImg);
    }, []);

    return (
        <View>
            <Carousel
                layout="stack"
                layoutCardOffset={9}
                ref={isCarousel}
                data={urlImg}
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
                dotsLength={urlImg.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 16,
                    height: 6,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                }}
                inactiveDotStyle={{
                    width: 9,
                    height: 9,
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