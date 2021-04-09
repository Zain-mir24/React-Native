import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [getText, setText] = useState('');
  const [randomnumber, changenumber] = useState(Math.trunc(Math.random() * 99));
  const [attempts, setattempts] = useState(0);
  const buttonClick = (txt) => {
    // alert(txt)
    setText(getText + txt);
  };
  const chances = () => {
    if(attempts<=4){
    setattempts(attempts+1)
    console.log('incremented')
    }
    else{
      console.log('out of attempts')
    }
      };
  const butnlick = (text) => {
    chances();
    
    if (text ==  randomnumber ) {
      console.log("correct");
    } else {
      console.log("fail");
    }
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your p!</Text>
      <Header fullname="Zain mir" />
      <View>{randomnumber}</View>
      <Text style={{ fontSize: 50 }}>{getText}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 50 }}>
          <Button title="1" color="green" onPress={buttonClick.bind(this, 1)} />
          <Button title="2" color="red" onPress={buttonClick.bind(this, 2)} />
          <Button
            title="3"
            color="yellow"
            onPress={buttonClick.bind(this, 3)}
          />
          <Button
            title="4"
            color="orange"
            onPress={buttonClick.bind(this, 4)}
          />
          <Button title="5" color="pink" onPress={buttonClick.bind(this, 5)} />
          <Button
            title="6"
            color="purple"
            onPress={buttonClick.bind(this, 6)}
          />
          <Button
            title="7"
            color="purple"
            onPress={buttonClick.bind(this, 7)}
          />
          <Button
            title="8"
            color="purple"
            onPress={buttonClick.bind(this, 8)}
          />
          <Button
            title="9"
            color="purple"
            onPress={buttonClick.bind(this, 9)}
          />
          <Button
            title="guess"
            color="purple"
            onPress={butnlick.bind(this, { setText })}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Header = (props) => {
  return (
    <View>
      <Text style={headerStyles.text}>Name: {props.fullname}</Text>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
