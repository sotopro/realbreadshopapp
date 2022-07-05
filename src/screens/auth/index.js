import React, { useState } from "react";
import { View, Text, Button, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";
import { Input } from "../../components/index";
import {  useDispatch } from "react-redux";
import { signup, signin } from "../../store/actions/auth.action";

const AuthScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const title = isLogin ? 'Login'  :'Register';
    const message =isLogin ? "Don't you have an account?" : 'Do you have an account?';
    const messageAction = isLogin ? 'Register' : 'Login';

    const onHandlerAuth = () => {
        dispatch( isLogin ? signin(email,password) : signup(email, password));
    }

    const onHandleChange = (text, type) => {
        if(type === 'email') {
            setEmail(text);
        } else {
            setPassword(text);
        }
    }

    const handleChangeAuth = () => {
        setPassword('');
        setEmail('');
        setIsLogin(!isLogin);
    }

    return (
        <KeyboardAvoidingView style={styles.containerKeyboard} behavior='height'>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input 
                    placeholder='example@gmail.com'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    value={email}
                    label='Email'
                />
                <Input 
                    placeholder='********'
                    placeholderTextColor={colors.text}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text, 'password')}
                    value={password}
                    label='Password'
                />
                <Button title={title} color={colors.primary} onPress={onHandlerAuth} />
                <View style={styles.propmt}>
                    <Text style={styles.propmtMessage}>{message}</Text>
                    <TouchableOpacity onPress={handleChangeAuth}>
                        <Text style={styles.propmtButton}>{messageAction}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default AuthScreen;