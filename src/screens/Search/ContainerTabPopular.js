import React, { useContext, useEffect, useState } from 'react'
import * as Parent from '../../Style/ParentStyle'

import { View } from 'react-native'
import { ItemLoader, ItemCardContent } from '../../components'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import database from '@react-native-firebase/database'

function TabHarian() {

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

    if (isLoading)
    {
        return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: Parent.colorWhite
            }}>
                <ItemLoader />
            </View>
        );
    }

    return (
        <View style={{backgroundColor: Parent.colorWhite2}}>
            {dataContent.map(item => {
                if (item == null)
                {
                    console.log("NULL content skipped (TabHarian)")
                }
                else
                {
                    return (
                        <ItemCardContent
                        key={item.id || '1'}
                        id={item.id || '1'}
                        title={item.title || 'Title'}
                        authorName={item.author.name || 'Author name'}
                        priceTotal={item.price.total || 'Total price'}
                        thumbnail={item.thumbnail || 'https://picsum.photos/500'}
                        tag={item.tag}
                        navigasi="ScreenContent"
                        willShowNavIfBack={false}
                        />
                    );
                }
            })}
        </View>
    );
}

function TabMingguan() {

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

    if (isLoading)
    {
        return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: Parent.colorWhite
            }}>
                <ItemLoader />
            </View>
        );
    }

    return (
        <View style={{backgroundColor: Parent.colorWhite2}}>
            {dataContent.map(item => {
                if (item == null)
                {
                    console.log("NULL content skipped (TabHarian)")
                }
                else
                {
                    return (
                        <ItemCardContent
                        key={item.id || '1'}
                        id={item.id || '1'}
                        title={item.title || 'Title'}
                        authorName={item.author.name || 'Author name'}
                        priceTotal={item.price.total || 'Total price'}
                        thumbnail={item.thumbnail || 'https://picsum.photos/500'}
                        tag={item.tag}
                        navigasi="ScreenContent"
                        willShowNavIfBack={false}
                        />
                    );
                }
            })}
        </View>
    );
}

function TabBulanan() {

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

    if (isLoading)
    {
        return (
            <View style={{
                flex: 1, 
                alignItems: 'center',
                justifyContent: 'center', 
                backgroundColor: Parent.colorWhite
            }}>
                <ItemLoader />
            </View>
        );
    }

    return (
        <View style={{backgroundColor: Parent.colorWhite2}}>
            {dataContent.map(item => {
                if (item == null)
                {
                    console.log("NULL content skipped (TabHarian)")
                }
                else
                {
                    return (
                        <ItemCardContent
                        key={item.id || '1'}
                        id={item.id || '1'}
                        title={item.title || 'Title'}
                        authorName={item.author.name || 'Author name'}
                        priceTotal={item.price.total || 'Total price'}
                        thumbnail={item.thumbnail || 'https://picsum.photos/500'}
                        tag={item.tag}
                        navigasi="ScreenContent"
                        willShowNavIfBack={false}
                        />
                    );
                }
            })}
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

const ContainerTabPopular = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Harian" component={TabHarian} />
        <Tab.Screen name="Mingguan" component={TabMingguan} />
        <Tab.Screen name="Bulanan" component={TabBulanan} />
      </Tab.Navigator>
    )
}

export default ContainerTabPopular