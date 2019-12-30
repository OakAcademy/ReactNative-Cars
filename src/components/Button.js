import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = props => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={props.buttonPress} style={buttonStyle}>
      <Text style={textStyle}>Click me</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    fontSize: 14,
    fontWeight: '500',
    paddingTop: 6,
    paddingBottom: 6,
    color: 'white'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'gainsboro',
    marginLeft: 7,
    marginRight: 7
  }
};

export default Button;
