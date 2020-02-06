/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Buttom from './src/components/Button';
import Display from './src/components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class App extends Component {
  state = {
    ...initialState,
  };

  addDigit = n => {
    
    if(n=='.' && this.state.displayValue.includes('.'))
      return;
    const clearDisplay =  this.state.clearDisplay || this.state.displayValue=='0'
    const currentValue = clearDisplay?'':this.state.displayValue;
    const displayValue = currentValue+n
    this.setState({
        displayValue,
        clearDisplay:false
    })

    if(n!=='.'){
        const newValue = parseFloat(displayValue)
        const values =  [ ...this.state.values]
        values[this.state.current] = newValue
        this.setState({
          values
        })

    }
  };

  clearMemory = () => {
    this.state = {...initialState}
  };

  setOperation = op => {

    if(this.state.current==0){
      this.setState({
        operation:op,
        current:1,
        clearDisplay:true
      })
    }
    else{
      const equals = op==='='
      const values = [...this.state.values]
      try {
        values[0]=eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      } catch (error) {
        values[0] = this.state.values[0]
      }
      values[1] = 0
      this.setState({
        displayValue:values[0],
        operation:equals?null:op,
        current:equals?1:0,
        clearDisplay:true,
        values
      })

    }

  };

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue}></Display>
        <View style={styles.buttons}>
          <Buttom triple onClick={this.clearMemory} label="AC"></Buttom>
          <Buttom label="/" operation onClick={this.setOperation}></Buttom>
          <Buttom label="7" onClick={this.addDigit}></Buttom>
          <Buttom label="8" onClick={this.addDigit}></Buttom>
          <Buttom label="9" onClick={this.addDigit}></Buttom>
          <Buttom label="*" operation onClick={this.setOperation}></Buttom>
          <Buttom label="4" onClick={this.addDigit}></Buttom>
          <Buttom label="5" onClick={this.addDigit}></Buttom>
          <Buttom label="6" onClick={this.addDigit}></Buttom>
          <Buttom label="-" operation onClick={this.setOperation}></Buttom>
          <Buttom label="1" onClick={this.addDigit}></Buttom>
          <Buttom label="2" onClick={this.addDigit}></Buttom>
          <Buttom label="3" onClick={this.addDigit}></Buttom>
          <Buttom label="+" operation onClick={this.setOperation}></Buttom>
          <Buttom label="0" double onClick={this.addDigit}></Buttom>
          <Buttom label="." onClick={this.addDigit}></Buttom>
          <Buttom label="=" operation onClick={this.setOperation}></Buttom>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
