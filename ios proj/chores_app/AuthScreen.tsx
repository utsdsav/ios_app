

import { observer } from 'mobx-react';
import { View, Animated, Image, Text, StyleSheet, Alert, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ScrollView } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { Button, Colors, TextInput } from 'react-native-paper';
import { loginAPI, createNewAccountAPI } from './firebaseAPI';
import { rootStore } from './RootStore';


export function AuthScreen(props) {
// const AuthScreen = observer((props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showSignUp, setShowSignUp] = useState(false)

    const [refresh, setRefresh] = useState(true)

    function checkEmpty(): string {
        if (email.length == 0) {
            return "Please enter email"
        } else if (password.length < 8) {
            return "Passwords have to be atleast 8 characters long"
        }
        return null
    }

    function signInPressed() {
        const err = checkEmpty()
        if (err != null) {
            Alert.alert(err)
            return
        }

        loginAPI(email, (results, err) => {
            console.log("err" + err)
            if (err) {
                Alert.alert(err)
                return
            }
            console.log(1)
            rootStore.setEmail(results.email)
            rootStore.setChoresList(results.choresList)
            setRefresh(!refresh)

        })
    }

    function signUpPressed() {
        if (password != confirmPassword) {
            Alert.alert("Passwords do not match")
            return
        }

        const err: string = checkEmpty()
        if (err != null) {
            Alert.alert(err)
            return
        }

        createNewAccountAPI(email, [], () => {
            rootStore.setEmail(email)
            setRefresh(!refresh)

        })
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
            <SafeAreaView />
            <View style={{marginTop: 150, alignSelf: 'center', backgroundColor: 'white', borderWidth: 2, borderRadius: 100, padding: 50}}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chore</Text>
            </View>
            {!showSignUp &&
                <View style={{marginHorizontal: 20, marginTop: 30}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}> Sign In </Text>
                    <TextInput
                        label="Email"
                        value={email}
                        style={{marginTop: 20}}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize={"none"}
                        />
                    <TextInput
                        label="Password"
                        value={password}
                        style={{marginTop: 20}}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        />
                    <Button onPress={signInPressed} mode='contained' color={Colors.green400} style={{marginTop: 20, height: 50, justifyContent: 'center'}} labelStyle={{color: 'white', fontSize: 17}}>
                        Sign In
                    </Button>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                        <Button labelStyle={{color: 'gray'}}>
                            Forgot Password?
                        </Button>
                        <Button onPress={() => setShowSignUp(true)} labelStyle={{color: 'black'}}>
                            Sign Up
                        </Button>
                    </View>
                </View>
            }
            {showSignUp &&
                <View style={{marginHorizontal: 20, marginTop: 30}}>
                    <Text style={{fontSize: 30, fontWeight: 'bold'}}> Sign Up </Text>
                    <TextInput
                        label="Email"
                        value={email}
                        style={{marginTop: 20}}
                        onChangeText={text => setEmail(text)}
                        autoCapitalize={"none"}
                        />
                    <TextInput
                        label="Password"
                        value={password}
                        style={{marginTop: 20}}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                        />
                    <TextInput
                        label="Confirm Password"
                        value={confirmPassword}
                        style={{marginTop: 20}}
                        onChangeText={text => setConfirmPassword(text)}
                        secureTextEntry={true}
                        />
                    <Button onPress={signUpPressed} mode='contained' color={Colors.green400} style={{marginTop: 20, height: 50, justifyContent: 'center'}} labelStyle={{color: 'white', fontSize: 17}}>
                        Sign Up
                    </Button>
                    <Button uppercase={false} color={'gray'} mode='contained' onPress={() => setShowSignUp(false)} labelStyle={{color: 'white'}} style={{alignSelf: 'center', marginTop: 20, width: 250, borderRadius: 40, height: 50, justifyContent: 'center'}}>
                        Back to Login
                    </Button>
                </View>
            }
        </ScrollView>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    )
}
// )

export default AuthScreen

const styles = StyleSheet.create({

})


