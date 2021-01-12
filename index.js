/**
 * @format
 */
// import 'react-native-gesture-handler'
import * as React from 'react';
// import {Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import AccountLogin from './src/screens/AccountLogin/AccountLogin';
import {name as appName} from './app.json';
// import { StateProvider } from './src/Config/Contex/store.js'



export default function Main() {
    return (
        // <PaperProvider>
        //     <StateProvider>
                <AccountLogin />
        //     </StateProvider>
        // </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () =>  Main );
