
import React from 'react'
import { Alert, SectionList, View, StyleSheet, Text } from 'react-native'
import { ScrollView } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Avatar, Card, Paragraph, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { style } from '../Style/HomeStyle'
import CardList from './CardList'
import CarouselView from './Carousel'


const DATA = [
    {
        data: [
             {  
                title : "judul 1",
                author: "Ariel Febrian",
                price: 15000,
            },
             {  
                title : "judul 2",
                author: "Inggi ci Imutt ",
                price: 12000,
            },
             {  
                title : "judul 3",
                author: "Bagus Si tambunan",
                price: 13000,
            },
             {  
                title : "judul 4",
                author: "okky Si nadiya",
                price: 14000,
            },
        ]
    },

]

// item yang akan di loop didalam Section List
const ListItem = ({ title, author, price }) => (
    <View style={styles.item}>

        <Card style={styles.cardItem}>
            <View style={styles.detailContainer}>
                <Title style={styles.title}>{title}</Title>
                <Paragraph >
                    <Icon
                        name="currency-usd-circle-outline"
                        size={18} /> {price}
                </Paragraph>
                <Paragraph  style={styles.paragraph} >
                    <Icon name="account" size={18} /> {author} 
                </Paragraph>

            </View>
            <Card.Cover style={styles.cardItemImage}
                source={{ uri: 'https://picsum.photos/700' }} />
        </Card>

    </View>
)

// component  yang akan menjadi header dari section list
const HeaderList = () => (
    <View style={style.container}>
        <Avatar.Icon
                    style={style.avatarContainer}
                    size={100}
                    icon="account-circle" />
           
            {/* component total donasi */}
             <Card style={style.containerCard}
             onPress={() => Alert.alert('Total Donasi Di Klik')}>
                 <Card.Content style={style.cardContentContainer}>
                     <Paragraph style={style.containerTextStyle} > Total Donasi : </Paragraph>
                     <Paragraph style={style.containerTextStyle2} > Rp. 123.000.000 </Paragraph>
                </Card.Content> 

            {/* TODO ganti dengan librari yang sudah ada */}
             </Card>

        <CarouselView />

    </View>
)


export function HomeScreen() {

    return (
        <SafeAreaView style={style.container}>

            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ListItem 
                                            title ={item.title}
                                            author={item.author}
                                            price={item.price}
                                            img = {item.img}   />}

                renderSectionHeader={() => <HeaderList/> }
            />

                {/* <Avatar.Icon
                    style={style.avatarContainer}
                    size={100}
                    icon="account-circle" />
           
            
             <Card style={style.containerCard}
             onPress={() => Alert.alert('terklik')}>
                 <Card.Content style={style.cardContentContainer}>
                     <Paragraph style={style.containerTextStyle} > Total Donasi : </Paragraph>
                     <Paragraph style={style.containerTextStyle2} > Rp. 123.000.000 </Paragraph>
                </Card.Content> 
             </Card>

             <Carousel/> */}

             {/* bad performance  */}

             {/* <CardList/> */}


    
        </SafeAreaView>

        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 16
    },
    item: {
        padding: 5,
        marginVertical: 2,
    },
    header: {
        fontSize: 32,
        backgroundColor: "#fff"
    },
    title: {
        fontSize: 24
    },

    title: {
        fontSize: 32,
    },
    cardItem: {
        borderRadius: 9,
    },
    cardItemImage: {
        width: '25%',
        height: 100,
        borderRadius: 9,
        marginTop: 40,
        marginBottom: 10,
        marginLeft: 10,
    },

    detailContainer: {
        marginStart: 125,
        marginTop: 20,
        marginBottom: -130,
    },
    title: {
        marginLeft: 5
    },
    // paragraph: { 
    //     overflow: 'hidden',
    //  },
});