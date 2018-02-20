import React, { Component } from 'react'
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native';

class Messages extends Component {

    constructor(){
        super()
        this.state={
            myObj:"This is text"
        }
    }

    render(){
        return(
            <TouchableOpacity>
                <Text>{this.state.myObj}</Text>
            </TouchableOpacity>
        )
    }
}