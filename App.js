import React, { useEffect , useState } from 'react'
import { HomeScreen} from './src/screens/Home/Home'
import { ScreenSearch } from './src/screens/Search'
import { BottomNavigation, Text } from 'react-native-paper';
import Notif from './src/screens/Notifikasi/Notif';

const ProfileRoute = () => <Text>Profile</Text>;

export default function App() {

    const [index, setIndex] = useState(0)

    // ubah setiap icon dan nama pada bottom navigasi disini...
    const [routes] = useState([
      { key: 'home', title: 'Awal', icon: 'home', color: '#3797a4' },
      { key: 'search', title: 'Pencarian', icon: 'magnify', color: '#3797a4' },
      { key: 'notification', title: 'Notifikasi', icon: 'bell', color: '#3797a4'  },
      { key: 'profile', title: 'Akun Saya', icon: 'account', color: '#3797a4' },
    ])
  

    // setiap halaman akan di tampilkan disini.....
    const renderScene = BottomNavigation.SceneMap({
      home: HomeScreen,
      search: ScreenSearch,
      notification: Notif,
      profile: ProfileRoute,
    })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    
    )
}