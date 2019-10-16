import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const HomeScreen = props => {
return <View style ={styles.container}> 
  <Text style = {styles.text}>Let's get you ready for Race Day!</Text>
  <TouchableOpacity onPress={() => {props.navigation.navigate('FiveK')}}>
	<MaterialCommunityIcons name="run" style = {styles.iconStyle}/>
	<Text style = {styles.fiveButton}>5K Training</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {props.navigation.navigate('TenK')}}>
	<MaterialCommunityIcons name="run" style = {styles.iconStyle}/>
	<Text style = {styles.tenButton}>10K Training</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {props.navigation.navigate('Half')}}>
	<MaterialCommunityIcons name="run" style = {styles.iconStyle}/>
	<Text style = {styles.halfButton}>Half Marathon Training</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => {props.navigation.navigate('Full')}}>
	<MaterialCommunityIcons name="run" style = {styles.iconStyle}/>
	<Text style = {styles.fullButton}>Full Marathon Training</Text>
  </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
	
	container:{
		backgroundColor: 'yellow',
		flex:1
	},
	text: {
		alignSelf: 'center',
		fontSize: 18,
		fontWeight: 'bold'
	},
	iconStyle: {
		fontSize: 35,
		margin: 15
	},
	fiveButton: 
	{
		marginHorizontal: 20,
		fontWeight: 'bold',
		backgroundColor: 'green',
		padding: 20,
		height: 65,
		width: 200,
		color: 'white'
	},
	tenButton: 
	{
		marginHorizontal: 20,   
		fontWeight: 'bold',
		backgroundColor: 'blue',
		padding: 20,
		height: 65,
		width: 200,
		color: 'white'
	},
	halfButton: 
	{
		marginHorizontal: 20,
		fontWeight: 'bold',
		backgroundColor: 'red',
		padding: 20,
		height: 65,
		width: 200,
		color: 'white'
	},
	fullButton: 
	{
		marginHorizontal: 20,
		fontWeight: 'bold',
		backgroundColor: 'black',
		padding: 20,
		height: 65,
		width: 200,
		color: 'white'
	}
});

export default HomeScreen;