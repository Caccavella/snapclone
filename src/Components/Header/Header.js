import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

    componentDidMount() {
        alert(JSON.stringify(this.props.text))
    }
    render() {
        return (
            <View style={styles.topNav}>
                <Text>Messages:</Text>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

let styles = StyleSheet.create({
    topNav: {
        background: whitesmoke;
    }
})