import React, { useState } from "react";
import { View, Text, TextInput, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import {  useDispatch } from "react-redux";
import { signup } from "../../store/actions/auth.action";

const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const title = 'Register';
    const message = 'do you have an account?';
    const messageAction = 'Login';
    const messageTarget = 'Login';

    const onHandlerAuth = () => {
        dispatch(signup(email, password));
    }

    const onHandleChange = (text, type) => {
        if(type === 'email') {
            setEmail(text);
        } else {
            setPassword(text);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='example@gmail.com'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(text) => onHandleChange(text, 'email')}
                />
                <Text style={styles.label}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder='********'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text, 'password')}
                />
                <Button title={title} color={colors.primary} onPress={onHandlerAuth} />
                <View style={styles.propmt}>
                    <Text style={styles.propmtMessage}>{message}</Text>
                    <TouchableOpacity onPress={() => console.log(messageTarget)}>
                        <Text style={styles.propmtButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen;