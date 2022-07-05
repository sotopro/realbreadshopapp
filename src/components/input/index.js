import React from "react";
import { View, Text, TextInput } from "react-native";
import Label from "../label";
import { styles } from "./styles";

const Input = ({
    editable,
    children,
    value,
    onChangeText,
    onFocus,
    onBlur,
    maxLegth,
    placeholder,
    placeholderTextColor,
    keyboardType,
    ...props
}) => {
    return (
     <View style={styles.container}>
        <Label { ...props }>
        <TextInput 
            { ...props }
            style={styles.input}
            editable={editable}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            maxLength={maxLegth}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
        />
        </Label>
        <View style={styles.message}>
            <Text style={styles.helperText}>{}</Text>
        </View>
     </View>
    )
}

export default Input;