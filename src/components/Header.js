//import libraries
import React from 'react';
import { Text, View } from 'react-native';

//create component
const Header = props => {
  const { textStyling, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyling}>{props.title}</Text>
    </View>
  );
};

const styles = {
  textStyling: {
    fontSize: 22
  },

  viewStyle: {
    backgroundColor: 'gainsboro',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  }
};

//make component available to other components
export default Header;
