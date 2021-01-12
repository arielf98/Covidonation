import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import Login from '../Auth/Login'
import App from '../../../App'
import { Provider as PaperProvider } from 'react-native-paper';
import { StateProvider } from '../../Config/Contex/store'
import auth from '@react-native-firebase/auth';
import MyRoute from '../Auth/Login';

export default function AccountLogin() {


    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
              <MyRoute/>
        );
    }

    return (
        
        <PaperProvider>
            <StateProvider>
                <App />
            </StateProvider>
        </PaperProvider>
    );
}
