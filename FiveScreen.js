import React, {useState} from 'react';
import {View,Button, ScrollView, Text, StyleSheet, TouchableOpacity, FlatList, TextInput} from 'react-native';
import AddPage from '../Components/AddPage';  

const FiveScreen = props => {
	return <View> 
	<Button 
	onPress={() => props.navigation.navigate('Add')}
	title="Add a 'Week' Entry"
	/>
		<Button 
	onPress={() => props.navigation.navigate('Home')}
	title="Return Home"
	/> 
	</View>

};

const styles = StyleSheet.create({});

export default FiveScreen;