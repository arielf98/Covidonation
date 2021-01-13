import React, { useEffect, useState } from 'react'

import { ScrollView } from 'react-native'
import { ItemLoader, ItemMiniContent } from '../../components'

import database from '@react-native-firebase/database'

const SectionPopular = () => {

    const [isLoading, setLoading] = useState(true);
    const [dataContent, setDataContent] = useState([]);
    
    useEffect(() => {
        database()
            .ref('/contents')
            .once('value')
            .then(snapshot => {
                setDataContent(snapshot.val())
                setLoading(false)
            }
        );
    }, []);

    // console.log(dataContent)

    return (
        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={true}
        >

            {isLoading ? <ItemLoader /> : 
            (
                dataContent.map(item => {

                    if (item == null)
                    {
                        console.log("NULL content skipped (SectionPopular)")
                    }
                    else
                    {
                        return (
                            <ItemMiniContent
                            key={item.id || '1'}
                            id={item.id || '1'}
                            title={item.title || 'Title'}
                            authorName={item.author.name || 'Author name'}
                            thumbnail={item.thumbnail || 'https://picsum.photos/500'}
                            navigasi="ScreenContent"
                            willShowNavIfBack={false}
                            />
                        );
                    }

                })
            )}

        </ScrollView>
    )
}

export default SectionPopular