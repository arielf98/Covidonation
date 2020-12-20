import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../Style/HomeStyle'
import { Card, Paragraph, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default ListItems = ({ title, author, price }) => {
    return (

        // item yang akan di loop didalam Section List
            <View style={styles.item}>
                <Card style={styles.cardItem}>
                    <View style={styles.detailContainer}>
                        <Title style={styles.titleCardItem}>{title}</Title>
                        <Paragraph >
                            <Icon
                                name="currency-usd-circle-outline"
                                size={18} /> {price}
                        </Paragraph>
                        <Paragraph style={styles.paragraph} >
                            <Icon name="account" size={18} /> {author}
                        </Paragraph>

                    </View>
                    <Card.Cover style={styles.cardItemImage}
                        source={{ uri: 'https://picsum.photos/700' }} />
                </Card>
            </View>
        )
}
