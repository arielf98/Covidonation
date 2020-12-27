/**
 * @format
 */
// import 'react-native-gesture-handler'
import * as React from 'react';
import {Provider as PaperProvider } from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { StateProvider } from './src/Config/Contex/store.js'



export default function Main() {
    return (
        <PaperProvider>
            <StateProvider>
                <App />
            </StateProvider>
        </PaperProvider>
    );
}

AppRegistry.registerComponent(appName, () =>  Main );
