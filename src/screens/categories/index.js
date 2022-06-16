import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Categories Screen</Text>
            <Button title="Go to Products Screen" onPress={() => navigation.navigate('Products')} />
        </View>
    )
}

export default CategoriesScreen;