import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


function Opening(props) {
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:16}}>
               This is my guess number Game
            </Text>
            <Button title="Start Game" color="blue" onPress={props.begin}/>
        </View>
    )
}

export default Opening
