import React, { useState, useContext, useEffect } from 'react'
import { HomeScreen} from './src/screens/Home/Home'
import { ScreenSearch } from './src/screens/Search'
import { BottomNavigation, Text } from 'react-native-paper';
import Notif from './src/screens/Notifikasi/Notif';
import { store } from './src/Config/Contex/store'
import Profile from './src/screens/Profile/Profile';
import * as Parent from './src/Style/ParentStyle'



export default function App() {

  const globalState = useContext(store)
  const { state } = globalState

    const [index, setIndex] = useState(0)

    // ubah setiap icon dan nama pada bottom navigasi disini...
    const [routes] = useState([
      { key: 'home', title: 'Awal', icon: 'home', color: Parent.colorBlueMax },
      { key: 'search', title: 'Pencarian', icon: 'magnify', color: Parent.colorBlueMax },
      { key: 'notification', title: 'Notifikasi', icon: 'bell', color: Parent.colorBlueMax  },
      { key: 'profile', title: 'Akun Saya', icon: 'account', color: Parent.colorBlueMax },
    ])
  

    // setiap halaman akan di tampilkan disini.....
    const renderScene = BottomNavigation.SceneMap({
      home: HomeScreen,
      search: ScreenSearch,
      notification: Notif,
      profile: Profile,
    })


  return (

    <BottomNavigation 
      barStyle={state.isBottomNavHide ? { display: 'none' } : null }
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    
    )
}