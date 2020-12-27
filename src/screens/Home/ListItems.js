import React from 'react'
import { View, Text } from 'react-native'
import { styles } from '../../Style/HomeStyle'
import { Card, Paragraph, Title } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { ItemTag } from '../../components'


export default ListItems = ({ title, author, price, tag }) => {



    return (

        // item yang akan di loop didalam Section List
            <View style={styles.item}>
                <Card style={styles.cardItem}>
                    <View style={styles.detailContainer}>
                       
                          <Title style={styles.titleCardItem}>
                        {title.length > 20 ? `${title.substring(0,24)}...` : title }
                              </Title> 
                        <Paragraph >
                            <Icon
                                name="tag"
                                size={18} /> {price}
                        </Paragraph>
                        <Paragraph style={styles.paragraph} >
                        <Icon name="account" size={18} />
                         {author.length > 20 ? `${author.substring(0, 24)}...` : author }
                        </Paragraph>

                    </View>
                    <Card.Cover style={styles.cardItemImage}
                        source={{ uri: 'https://picsum.photos/700' }} />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginHorizontal: 2,
                    marginBottom: 10
                }}>
                    {tag.map(prop => {
                        return (
                            <ItemTag key={prop.id} warna={prop.warna} teks={prop.teks}/>
                        );
                    })}
                 
                </View>
                </Card>
            </View>
        )
}
