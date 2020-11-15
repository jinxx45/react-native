import React from 'react'
import { Button, TextInput,Image,StyleSheet, View, SafeAreaView , Alert } from 'react-native'

export default function Login() {
    return (
        
        <View>
            {/* Logo View */}
            <View style={styles.logo}>
                <Image style={{marginLeft:80 , marginTop : 30 }}  source={require("../assets/images/lock.png")}></Image>
            </View>

           {/* Input View */}
            <SafeAreaView style= {styles.inputview}>
                <TextInput placeholder ="Enter Your Email or Phone Number " style={styles.inputText}/>
                <TextInput placeholder = "Enter Your Password " style={styles.inputText}/>
                
                {/* Button View */}
                <View  style = {styles.buttonStyle}>
                    <Button title="Login" onPress={() => Alert.alert("Login Clicked")}/>
                </View>

                

            </SafeAreaView>
       
                    
        </View>
    )
}

const styles = StyleSheet.create({
    logo:{
        backgroundColor:'#F2FF9A',
        height : 300
         },
    
         inputview :{
             backgroundColor : "#DDDDDD",
             width : 400,
             height : 400,
             paddingTop: 30
         },

         buttonStyle : {
             marginTop : 30,
             width: 300,
             marginLeft: 40,
             
         },
         inputText : {
             borderRadius :10, 
             height: 40, borderColor: 'gray',
              borderWidth: 2 ,
              padding : 3 , 
              width : 360 , 
              marginLeft : 15 , 
              marginTop : 20 ,
              paddingLeft : 15,
              backgroundColor : "white"
         }
        
})
