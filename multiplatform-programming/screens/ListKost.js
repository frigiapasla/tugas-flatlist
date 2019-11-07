import React from 'react';
import { Text, View, FlatList,  StyleSheet} from 'react-native';

const kost = [
    {name: 'Azalea', alamat: 'Kanaan',},
    {name: 'Pelangi', alamat: 'Kanaan'},
    {name: 'Corner', alamat: 'Kanaan',},
    {name: 'Mizpa', alamat: 'Kanaan'},
    {name: 'Gazele', alamat: 'Kanaan'},
    {name: 'Pink', alamat: 'Kanaan'}
]

const ListKost = () => {
    return (
        <FlatList 
            data={kost}
            renderItem={({ item }) => 
                <View style={styles.textStyle}>
                    
                    <Text >
                        {item.name}
                    </Text>
                    <Text>
                        {item.alamat}
                    </Text>
                </View>
            }
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 80
    }
});

export default ListKost;
