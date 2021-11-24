import React, {useState} from "react"
import { View, Text, ViewBase, Button, TextInput,ScrollView, StyleSheet } from "react-native"



const Login = (props) =>{
    
    const [state,setState] =useState({
        user: "",
        password: ""
    })

    const storageChangeText = (user, value) =>{
        setState({...state, [user]: value})
    }

    const setErrorMsg = () => {
        if(state.user === "" || state.password === ""){
            alert("Complete todos los campos")
        }else{ 
            props.navigation.navigate("Home")

        }
    }


    return(
        <ScrollView style={styles.container}>
            <View style={styles.inputGrup}>
            <TextInput placeholder="User Name" onChangeText={(value) => storageChangeText("user",value)}/>
            </View>
            <View style={styles.inputGrup}>
            <TextInput placeholder="Password" onChangeText={(value) => storageChangeText("password",value)} />
            </View>
            <View >
            <Button title="Continuar" onPress={() => setErrorMsg()} />
            </View>

        </ScrollView>

    )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 200
    },
    inputGrup:{
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#000"
    }
  });

export default Login
