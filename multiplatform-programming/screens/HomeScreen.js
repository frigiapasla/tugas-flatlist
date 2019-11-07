import React from 'react';
import { View, Text, Button, ImageBackground } from 'react-native';

const HomeScreen = ({ navigation }) => {
    
    return (
        <View>
            
            <Text> Home Screen </Text>
            <Button 
                title="Go to Component Screen"
                onPress={()=> navigation.navigate('Component')}
            />
            <Button 
                title="Go to Student Screen"
                onPress={()=> navigation.navigate('Student')}
            />
            <Button 
                title="Go to Image Screen"
                onPress={()=> navigation.navigate('Image')}
            />
            <Button 
                title="Go to List Kost Screen"
                onPress={()=> navigation.navigate('Kost')}
            />

            

        </View>
        
    );
};

export default HomeScreen;