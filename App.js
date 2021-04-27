import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { render } from "react-dom";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Switch,
} from "react-native";
import Opening from "./components/Opening"
//Assigment 02
//FA18-bcs-037
//Zain mir
export default function App() {
  const [correct, Setcorrect] = useState("");
  const [flag, setflag] = useState(false);
  const [getText, setText] = useState(0);
  const [randomnumber, changenumber] = useState(Math.trunc(Math.random() * 99));
  const [attempts, setattempts] = useState(0);
  const [points, setpoints] = useState(0);
  const [round, setround] = useState(0);
  const Gamestart = "Guess a number";
  const [switching, setswitch] = useState(Gamestart);
  
  const buttonClick = (txt) => {
    // alert(txt)
    if (getText == 0) setText("" + txt);
    else setText(getText + "" + txt);
  };
  const chances = () => {
    if (attempts <= 4) {
      setattempts(attempts + 1);
      console.log("incremented");
    } else {
      console.log("out of attempts");
      setattempts(0);
      setText(0);
      setround(round + 1);
      // if (round >= 3) {
      //   setflag(true);
      // } else {
      //   setflag(false);
      // }
    }
  };
  const butnlick = () => {
    chances();

    if (getText == randomnumber) {
      Setcorrect("correct");
      setpoints(points + 10);
      setText(0);
    } else {
      Setcorrect("Wrong");
      console.log("fail");
      setText(0);
    }
  };
  const screenSwitching = () => {
    if (switching == "Guess a number") {
      return <Opening  begin={()=>setswitch(-1)}/>;
    } else if (switching == -2)
      return (
        <View>
          <Text style={styles.container}>Game Finished</Text>
  
        </View>
      );
    else return gameView;
        
  };
  const gameView =(
    <View style={styles.container}>
      <Text>Open up App.js to start working on your p!</Text>
      <Header fullname="Zain mir" />

      <Text>{randomnumber}</Text>

      <Text style={{ fontSize: 50 }}>{getText}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 50 }}>
          <View style={styles.button}>
            <Button
              title="1"
              color="green"
              onPress={buttonClick.bind(this, 1)}
              style={styles.button}
            />
            <Button
              title="2"
              color="red"
              onPress={buttonClick.bind(this, 2)}
              style={styles.button}
            />
            <Button
              title="3"
              color="yellow"
              onPress={buttonClick.bind(this, 3)}
              style={styles.button}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="4"
              color="orange"
              onPress={buttonClick.bind(this, 4)}
            />
            <Button
              title="5"
              color="pink"
              onPress={buttonClick.bind(this, 5)}
            />
            <Button
              title="6"
              color="purple"
              onPress={buttonClick.bind(this, 6)}
            />
          </View>
          <View style={styles.button}>
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
          </View>
          <View style={styles.buttonstyle}>
            <Button title="guess" color="purple" onPress={butnlick} />
          </View>
        </View>
      </View>
      <View>
        <Text>{correct}</Text>
      </View>
      <View>
        <Text>
          Points of the player are {"" + points} User only has 5 attempts out of
          which he has made {attempts} attempts
        </Text>
        {flag == false ? (
          <View>
            <Text>
              User has {points} points. User Guessed the random number
              {randomnumber} and got {points} points
            </Text>
          </View>
        ) : (
          <View>null</View>
        )}
      </View>

      <StatusBar style="auto" />
       
    </View>
    
  );
  return(
    <View>
{screenSwitching()}
      </View>
  )
 
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
  button: {
    flexDirection: "row",
    margin: "auto",
    borderBottomColor: "black",
    width: "50%",
    height: 50,
  },
  buttonstyle: {
    marginTop: 50,
    width: 200,
  },
});
