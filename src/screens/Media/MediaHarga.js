import React from 'react'
import { View, Text ,TextInput,ScrollView,Dimensions} from 'react-native'
import { styles } from '../../Style/MediaStyle'
import { Button } from 'react-native-paper'

export default function MediaContent() {
    return (

        <>
        
        <ScrollView>
        <View style={{position: 'absolute',
              width: 120,
              height: 52,
              backgroundColor: 'white',}}
        >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Info</Text>
        </View>    
        </View>
        <View style={{position: 'absolute',
              width: 120,
              height: 52,
              left: 120,
              backgroundColor: 'white',}}
        >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Konten</Text>
        </View>        
        </View>
        <View style={{position: 'absolute',
               width: 120,
               height: 52,
               left: 240,
              backgroundColor: '#CDEAFF',}}
        >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Harga</Text>
        </View>        
        </View>
        
        <View style={styles.iconContainer}>
           
           <View>
                <Text style={styles.iconTextTitle}>
                   Konten Ini
                </Text>
                <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "white"
                    style={styles.btnTipe1} 
                    >
                <Text style={{
                    color: 'black'
                }}> Gratis
                </Text> 
                </Button>
                </View>
                
                
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "#478DB5"
                    style={styles.btnTipe2} 
                    >
                <Text style={{
                    color: 'black'
                }}> Berbayar
                </Text> 
                </Button>
                </View>
                </View>
                
                
           </View>

           <View>
                <Text style={styles.iconTextTitle}>
                   Harga
                </Text>
                <TextInput style={{ top:15,left:30,width:292,height: 39, borderColor: 'gray', borderWidth: 1 }}/>
                
           </View>

           <View>
                <Text style={styles.iconTextTitle}>
                   Keuntungan Kreator
                </Text>
                <View style={styles.container}>
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "white"
                    style={styles.btnTipe1} 
                    >
                <Text style={{
                    color: 'black'
                }}> Tidak diambil
                </Text> 
                </Button>
                </View>
                
                
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "#478DB5"
                    style={styles.btnTipe2} 
                    >
                <Text style={{
                    color: 'black'
                }}> Diambil
                </Text> 
                </Button>
                </View>
                </View>
                
                
           </View>

           <View>
                <Text style={styles.iconTextTitle}>
                   Nominal Keuntungan
                </Text>
                <TextInput style={{ top:15,left:30,width:292,height: 39, borderColor: 'gray', borderWidth: 1 }}/>
                
           </View>

           

           
            
        </View>

        <View>
        <View style={styles.containerBottom}>
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "#808080"
                    style={styles.btnTipe4} 
                    >
                <Text style={{
                    color: 'white',
                    fontSize: 7,
                }}> Kembali
                </Text> 
                </Button>
                </View>
                
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "#478DB5"
                    style={styles.btnTipe5} 
                    >
                <Text style={{
                    color: 'white',
                    fontSize: 7,
                }}> Selesai
                </Text> 
                </Button>
                </View>
                </View>
           </View>
           <View style={{marginBottom:100}}></View>
        </ScrollView>
        </>
    )
}
