import React from 'react'
import { View, Text ,TextInput,ScrollView} from 'react-native'
import { styles } from '../../Style/MediaStyle'
import { Button } from 'react-native-paper'

export default function MediaKonten() {
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
              backgroundColor: '#CDEAFF',}}
        >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Konten</Text>
        </View>        
        </View>
        <View style={{position: 'absolute',
              width: 120,
              height: 52,
              left: 240,
              backgroundColor: 'white',}}
        >
        <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Harga</Text>
        </View>        
        </View>
        
        <View style={styles.iconContainer}>
           <View>
                <Text style={styles.iconTextTitle}>
                   Thumbnail
                </Text>
                <Button 
                    mode="contained" 
                    color= "#478DB5"
                    style={{top:10,left:30,width:100}} 
                    >
                <Text style={{
                    color: 'black',
                    fontSize: 8,

                }}> INI GAMBAR
                </Text> 
                </Button>
           </View>

           <View>
                <Text style={styles.iconTextTitle}>
                   Preview
                </Text>
                <Button 
                    mode="contained" 
                    color= "#808080"
                    style={{top:10,left:30,width:100}} 
                    >
                <Text style={{
                    color: 'black',
                    fontSize: 8,

                }}> Tambah 
                </Text> 
                </Button>
           </View>

           <View>
                <Text style={styles.iconTextTitle}>
                   Konten
                </Text>
                <TextInput style={{ top:15,left:30,width:292,height: 39, borderColor: 'gray', borderWidth: 1, height:150 }}/>
           </View>

           <View>
                <View style={styles.buttonContainer}>
                <Button 
                    mode="contained" 
                    color= "white"
                    style={{left:30,top:35,width:293}} 
                    >
                <Text style={{
                    color: 'black'
                }}> Unggah File
                </Text> 
                </Button>
                </View>
                
                
                
                
           </View>

           
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
                }}> Selanjutnya
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