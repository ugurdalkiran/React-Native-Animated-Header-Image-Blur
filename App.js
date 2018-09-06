import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Animated } from 'react-native';

let IMAGE_MAX_HEIGHT = 300;
let IMAGE_MIN_HEIGHT = 100;

export default class App extends Component{

	constructor(props){
		super(props);

		this.state = {
			scrollY: new Animated.Value(0)
		};
	}

	render(){

		let imageHeight = this.state.scrollY.interpolate({
			inputRange: [0, IMAGE_MAX_HEIGHT - IMAGE_MIN_HEIGHT],
			outputRange: [IMAGE_MAX_HEIGHT, IMAGE_MIN_HEIGHT],
			extrapolate: 'clamp'
		});

		let imageBlur = this.state.scrollY.interpolate({
			inputRange: [0, IMAGE_MAX_HEIGHT - IMAGE_MIN_HEIGHT],
			outputRange: [0, 3],
			extrapolate: 'clamp'
		});

		return(
			<View style={styles.bg}>

				<Animated.View style={{
					height: imageHeight
				}}>
					<Animated.Image
						source = {{ uri: 'https://blog.gezinomi.com/wp-content/uploads/fethiye2-1-730x336.jpg' }}
						style = {{ flex: 1, resizeMode: 'cover' }}
						blurRadius = { imageBlur }
					/>
				</Animated.View>

				<ScrollView style={{ flex: 1 }} onScroll={ Animated.event([
					{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }
				]) }>

					<Text style={styles.paragraf}>Paragraf 1</Text>
					<Text style={styles.paragraf}>Paragraf 2</Text>
					<Text style={styles.paragraf}>Paragraf 3</Text>
					<Text style={styles.paragraf}>Paragraf 4</Text>
					<Text style={styles.paragraf}>Paragraf 5</Text>
					<Text style={styles.paragraf}>Paragraf 6</Text>
					<Text style={styles.paragraf}>Paragraf 7</Text>
					<Text style={styles.paragraf}>Paragraf 8</Text>
					<Text style={styles.paragraf}>Paragraf 9</Text>
					<Text style={styles.paragraf}>Paragraf 10</Text>
					<Text style={styles.paragraf}>Paragraf 1</Text>
					<Text style={styles.paragraf}>Paragraf 2</Text>
					<Text style={styles.paragraf}>Paragraf 3</Text>
					<Text style={styles.paragraf}>Paragraf 4</Text>
					<Text style={styles.paragraf}>Paragraf 5</Text>
					<Text style={styles.paragraf}>Paragraf 6</Text>
					<Text style={styles.paragraf}>Paragraf 7</Text>
					<Text style={styles.paragraf}>Paragraf 8</Text>
					<Text style={styles.paragraf}>Paragraf 9</Text>
					<Text style={styles.paragraf}>Paragraf 10</Text>
					<Text style={styles.paragraf}>Paragraf 1</Text>
					<Text style={styles.paragraf}>Paragraf 2</Text>
					<Text style={styles.paragraf}>Paragraf 3</Text>
					<Text style={styles.paragraf}>Paragraf 4</Text>
					<Text style={styles.paragraf}>Paragraf 5</Text>
					<Text style={styles.paragraf}>Paragraf 6</Text>
					<Text style={styles.paragraf}>Paragraf 7</Text>
					<Text style={styles.paragraf}>Paragraf 8</Text>
					<Text style={styles.paragraf}>Paragraf 9</Text>
					<Text style={styles.paragraf}>Paragraf 10</Text>
					<Text style={styles.paragraf}>Paragraf 1</Text>
					<Text style={styles.paragraf}>Paragraf 2</Text>
					<Text style={styles.paragraf}>Paragraf 3</Text>
					<Text style={styles.paragraf}>Paragraf 4</Text>
					<Text style={styles.paragraf}>Paragraf 5</Text>
					<Text style={styles.paragraf}>Paragraf 6</Text>
					<Text style={styles.paragraf}>Paragraf 7</Text>
					<Text style={styles.paragraf}>Paragraf 8</Text>
					<Text style={styles.paragraf}>Paragraf 9</Text>
					<Text style={styles.paragraf}>Paragraf 10</Text>
				</ScrollView>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	bg: { flex: 1, backgroundColor: '#ddd' },
	paragraf: { backgroundColor: '#fff', padding: 16, marginTop: 1, color: '#3498db' },
});