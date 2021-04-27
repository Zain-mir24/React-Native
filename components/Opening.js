import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';


function Opening(props) {
    return (
        <View>
            <Text style={{textAlign:'center',fontSize:16,marginTop:50}}>
               This is my guess number Game
            </Text>
            <Button title="Start Game" color="blue"style={styles.container} onPress={props.begin}/>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    marginTop:"50px"
}
})

export default Opening
