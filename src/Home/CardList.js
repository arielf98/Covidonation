import React from 'react'
import { Alert, View, StyleSheet, FlatList, Text } from 'react-native'
import { Card, Paragraph, Title, Avatar } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
        price: 10000,
        author: 'Ariel Febrian'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
        price: 15000,
        author: 'Okky Nadiya'
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
        price: 14000,
        author: 'Bagus Tambunan'
    },
      
]


const CardItem = ({title, price, author}) => (
    <View style={styles.item}>


        <Card style={styles.cardItem}>
            <View style={styles.detailContainer}>
                <Title style={styles.title}>{title}</Title>
                <Paragraph >
                    <Icon 
                    name="currency-usd-circle-outline" 
                    size={18}/> {price}
                 </Paragraph>
                <Paragraph>
                    <Icon name="account" size={18} /> <Text> {author} </Text> 
                </Paragraph>

            </View>
            
            <Card.Cover style={styles.cardItemImage} 
            source={{ uri: 'https://picsum.photos/700' }} />
          
        </Card>
    </View>
);


export default function CardList() {

    const renderItem = ({item}) => (
        <View>
            <CardItem title={ item.title} price={item.price} author={item.author} />
        </View>
    );
    return (
     
        <FlatList style={{ height: '100%' }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
  
    item: {
        width: 400,
        padding: 5,
        marginVertical: 1,
        flex: 1,
    },
    title: {
        fontSize: 32,
    },
    cardItem: {
        borderRadius: 9,
    },
    cardItemImage:{
        width: '25%',
        height: 100,
        borderRadius: 9,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 10,
    },

    detailContainer: {
        marginStart: 125,
        marginTop:20,
        marginBottom: -130,
    },
    title: {
        marginLeft: 5
    },
});