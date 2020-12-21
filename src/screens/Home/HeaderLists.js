import React from 'react'
import { View, Image, Alert} from 'react-native'
import { Card, Paragraph} from 'react-native-paper'
import CarouselView from './CarouselView'
import { styles } from '../../Style/HomeStyle'

export default HeaderLists = () => {



    return (
        <View style={styles.container}>

            <Image
                style={styles.imageLogo}
                source={require('../../img/logoCovidonation/logo_a.png')} />

            <Card style={styles.containerCard}
                onPress={() => Alert.alert('Total Donasi Di Klik')}>
                <Card.Content style={styles.cardContentContainer}>
                    <Paragraph style={styles.containerTextStyle} > Total Donasi : </Paragraph>
                    <Paragraph style={styles.containerTextStyle2} > Rp. 123.000.000 </Paragraph>
                </Card.Content>

            </Card>

            <CarouselView />

        </View>
    )
}
