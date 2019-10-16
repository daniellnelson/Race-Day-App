import React, {useState} from 'react';
import  {ScrollView, Button, StyleSheet, Text } from 'react-native';
import SearchBar from '../Components/SearchBar';  

const AddPage = props => {
	const [pace, setPace] = useState(0);
	const [distance, setDistance] = useState(0);
	const [calories, setCalories] = useState(0);
	const [week, setWeek] = useState(1);
	
return <ScrollView> 
	<Text style = {styles.weeks}>Week {week}</Text>
	<SearchBar/>
	<Text style = {styles.textStyle}>Distance Needed: 1</Text>
	<Text style = {styles.textStyle}>Distance Met: {distance}</Text>
	<SearchBar object={distance} 
	onChange={setDistance}/>
	<Text style = {styles.textStyle}>Time:</Text>
	<SearchBar object={pace} 
	onChange={setPace}/>
	<Text style = {styles.textStyle}>Calories Burned:</Text>
	<SearchBar object={calories} 
	onChange={setCalories}/>
	<Text style = {styles.textStyle}>Your Pace: {pace/distance}</Text>
	<Text style = {styles.textStyle}>Your Improvement: 100% for Week: {week}!</Text>
	<Button 
	onPress={() => props.navigation.navigate('FiveK') && 
	setWeek(week + 1)}
	title="Submit Entry"
  />
	</ScrollView>
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 15,
		fontWeight: 'bold',
		marginHorizontal: 10,
		padding: 10
	},
	weeks: {
		alignSelf: 'center',
		fontWeight: 'bold',
		fontSize: 20
	}
});

export default AddPage;