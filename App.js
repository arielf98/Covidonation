import React, { useEffect , useState } from 'react'
import { HomeScreen} from './src/screens/Home/Home'
import { ScreenSearch } from './src/screens/Search'
import { BackHandler, ToastAndroid } from "react-native"
import { BottomNavigation, Text } from 'react-native-paper';
import Notif from './src/screens/Notifikasi/Notif';




const ProfileRoute = () => <Text>Profile</Text>;

export default function App() {
  const [isBackbuttonClickedTwice, setIsBackbuttonClickedTwice] = useState(0)

  // ketika hardware back ditekan maka akan memvalidasi untuk menekan sekali lagi 
  // untuk keluar dari aplikasi
  useEffect(() => {
    const backAction = () => {
      
      setTimeout(()=> {
        setIsBackbuttonClickedTwice(0)
      }, 2000)

      if(isBackbuttonClickedTwice === 0){
        setIsBackbuttonClickedTwice(isBackbuttonClickedTwice + 1)
        ToastAndroid.show('Tekan sekali lagi untuk keluar ', ToastAndroid.SHORT)
      } else if(isBackbuttonClickedTwice === 1){
        BackHandler.exitApp()
      }
      return true
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [isBackbuttonClickedTwice])



    const [index, setIndex] = useState(0)


    // ubah setiap icon dan nama pada bottom navigasi disini...
    const [routes] = useState([
      { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
      { key: 'search', title: 'Search', icon: 'magnify', color: '#009688' },
      { key: 'notification', title: 'Notification', icon: 'bell', color: '#795548'  },
      { key: 'profile', title: 'Profile', icon: 'account', color: '#607D8B' },
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