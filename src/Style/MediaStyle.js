
import { StyleSheet } from 'react-native'




export const styles = StyleSheet.create({

       appbarHeader : {

              backgroundColor: "#478DB5",
       },

       infoBar1:{
              position: 'absolute',
              width: 109.2,
              height: 52.18,
              left: 0,
              backgroundColor: "#CDEAFF",
              
       },

       infoBar2:{
              position: 'absolute',
              width: 120,
              height: 43,
              left: 120,
              top: 49,
              backgroundColor: '#FFFFFF',
       },

       iconContainer:{
              marginTop: 10,
       } ,

       notifContent: {
              width:'100%',
           
       },

       containerTop: {
              top:20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
       },

       container: {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
       },
       
       buttonContainer: {
              flex: 1,
       },

       btnTipe1: {
              marginLeft: 30,
              marginTop: 30,
              borderWidth: 2,
              borderColor: 'white',
              borderRadius: 10
              
       },

       btnTipe2: {
              marginRight: 30,
              marginTop: 30,
              borderWidth: 2,
              color: '#478DB5',
              borderRadius: 10
              
       },

       btnTipe3: {
              width:30,
              marginLeft: 30,
              marginTop: 30,
              borderWidth: 2,
              borderRadius: 10,
              borderColor:'red'
              
       },

       btnTipe4: {
              marginLeft: 30,
              marginTop: 30,
              width:93,
              borderWidth: 2,
              borderRadius: 10
              
       },

       btnTipe5: {
              marginRight: 30,
              marginTop: 30,
              borderWidth: 2,
              borderRadius: 10
              
       },

       containerBottom: {
              top:30,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
       },
       

       iconTextTitle: {
              fontWeight: 'bold',
              fontSize: 14,
              marginLeft: 30,
              marginTop: 60,
       },

       iconTextTime: {
              marginLeft: 60,
              marginTop: 2,
              color: '#2b94f0'
       },

       iconText: {
              marginLeft: 60,
              marginTop: 2,
       },
       notifIcon: {
              width: 50,
              height: '100%',
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center'

       },

       notifBottomLine: {
              borderColor: '#a3a3a3',
              borderBottomWidth: 1,
              marginHorizontal: 20,
              marginTop: 10
       },

})
