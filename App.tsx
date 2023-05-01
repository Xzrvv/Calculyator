import React, { StrictMode, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Reqemler = (props) => {
  const [numb, setNumb] = useState(props.reqem)
  return (
    <TouchableOpacity style={styles.button} onPress={props.onCustomPress}>
      <Text style={styles.tittle}>
        {props.reqem}
      </Text >
    </TouchableOpacity>

  )
};
const App = () => {
  const [Result, setResult] = useState("");
  const [firstnumber, setFirstNumber] = useState('');
  const [operation, setOperation] = useState('');


  const numb = [7, 8, 9, 4, 5, 6, 1, 2, 3,];

  const setNumb = numb => {
    if (Result === '0') {
      setResult(numb)
    } else {
      setResult(Result + numb)
    }
  };
  const division = () => {
    setFirstNumber(parseInt(Result));
    setOperation("/");
    setResult('');
  };

  const multiplication = () => {
    setFirstNumber(parseInt(Result));
    setOperation("*");
    setResult('');
  };

  const subtraction = () => {
    setFirstNumber(parseInt(Result));
    setOperation("-");
    setResult('');
  };

  const sum = () => {
    setFirstNumber(parseInt(Result));
    setOperation("+");
    setResult('');
  };



  const equal = () => {
    let result = firstnumber;
    if (operation === "+") {
      result += parseInt(Result);
    } else if (operation === "-") {
      result -= parseInt(Result);
    } else if (operation === "*") {
      result *= parseInt(Result);
    } else if (operation === "/") {
      result /= parseInt(Result);
    }
    setResult(result.toString());
  };


  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.text}>
          {Result}
        </Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.buttoncontainer}>

          {numb.map((item, index) => {

            return <Reqemler reqem={item} onCustomPress={() => {
              let localResult = `${Result}` + `${item}`;

              setResult(localResult)
            }} />;


          })}

          <TouchableOpacity style={styles.commabutton} onPress={
            () => {
              let localResult = Result + '.';
              setResult(localResult)
            }}>
            <Text style={styles.title}>
              .
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={
            () => {
              let localResult = Result + '0';
              setResult(localResult)
            }
          }>
            <Text style={styles.tittle}>
              0
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.commabutton} onPress={
            (clear) => {
              let localResult = ' ';
              setResult(localResult)
            }}>
            <Text style={styles.title}>
              C
            </Text>
          </TouchableOpacity>
        </View >
        <View style={styles.operationContainer}  >
          <TouchableOpacity style={styles.operationbutton} onPress={division}
          >
            <Text style={styles.title}>
              /

            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationbutton} onPress={multiplication}

          >
            <Text style={styles.title}>

              *

            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationbutton} onPress={
            subtraction}>
            <Text style={styles.title}>
              -

            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationbutton} onPress={sum}
          >
            <Text style={styles.title}>
              +

            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationbutton} onPress={equal}
          >
            <Text style={styles.title}>
              =
            </Text>
          </TouchableOpacity>


        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c'


  },
  resultContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  button: {
    backgroundColor: '#626262',
    borderRadius: 25,
    height: '23%',
    width: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttoncontainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 8
  },
  text: {
    fontSize: 55,
    color: 'white'

  },
  tittle: {
    fontSize: 35,
    color: 'white'

  },
  footer: {
    flex: 1,

    flexDirection: 'row',


  },
  operationbutton: {
    backgroundColor: '#F69906',
    borderRadius: 19,
    height: 65,
    width: 65,
    alignItems: 'center',
    justifyContent: 'center',


  },
  operationContainer: {
    gap: 3
  },
  title: {
    fontSize: 30,
    color: 'white'
  },
  commabutton: {
    backgroundColor: '#F69906',
    borderRadius: 25,
    height: 78,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around'
  }

})
export default App;


