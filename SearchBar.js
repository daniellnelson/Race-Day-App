import React from 'react';
import  {View, StyleSheet, TextInput } from 'react-native';

const SearchBar = ({object, onChange}) => {
return <View style = {styles.background}> 
	<TextInput style= {styles.textStyle} 
	placeholder="ex. 1/1/2020" 
	value={object}
	onChangeText={onChange}
	/>
	</View>
	
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 10,
		marginTop: 15,
		flexDirection: 'row'
	}, 
	textStyle: {
		flex: 1,
		fontSize: 18
	}
});

export default SearchBar;