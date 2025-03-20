import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux';

class MyTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            item: []
        }
    }
    render() {
      
        return (
            <ScrollView contentContainerStyle={styles.MainContainer}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 80, backgroundColor: "white", width: "100%"}} >
                    {/* <Ionicons name="arrow-back-outline" size={30} style={{paddingLeft:20}} color="black" /> */}
                    <View style={{ width: "100%", position: "absolute", alignItems: "center", zIndex: -2 }} >
                        <Text style={{ fontSize: 18 }} >My Tasks</Text>
                    </View>

                </View>
                <View style={{ paddingHorizontal: 20, justifyContent: "space-evenly", flex:1 }} >

                    <View>
                        <View style={styles.row}>
                            <Text style={styles.head}>
                                Hi
                            </Text>
                            <Text style={styles.head1}>
                                {" "}There,
                            </Text>
                        </View>
                        <Text style={styles.head2}>
                            What tasks are you creating today?
                        </Text>
                    </View>
                    <View>
                        {!(!this.props.products.length) && this.props.products.reverse().map((item, index) => (
                            <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate("CreateTask", { item: item })} style={{ padding: 10, backgroundColor: 'white', margin: 5, borderRadius: 10, flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: "space-between", alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                    {item.taskName}
                                </Text>
                                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("CreateTask", {
                            item: {
                                showTime: false,
                                selectedTime: null,
                                showDate: false,
                                selectedDate: null,
                                showAssign: false,
                                selectedAssign: null,
                                taskName: ""
                            }
                        })} style={{ padding: 10, backgroundColor: '#feffa6', margin: 5, borderRadius: 10, flexDirection: 'row', borderColor: 'black', borderWidth: 1, justifyContent: "space-between", alignItems: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 15 }}>
                                {"Customize"}
                            </Text>
                            <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>

        );
    }
}

const mapState = (state) => {
    return {
        products: state.cart.products,
    }
}
const mapDispatch = (dispatch) => {
    return {
        addToCart: obj => dispatch(addToCart(obj)),
    }
}
export default connect(mapState, mapDispatch)(MyTask);



const styles = StyleSheet.create({

    MainContainer: {
        minHeight: Dimensions.get("window").height,
        paddingTop: 20


    },
    head: {
        fontSize: 50,
    },
    head1: {
        fontSize: 50,
        color: 'red'
    },
    head2: {
        fontSize: 30,
    },
    row: {
        flexDirection: 'row'
    },
    pageContainer: {
        flex: 1,
    },
    subHeadingsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Brand: {
        marginTop: 10,
        marginLeft: 5,
        fontSize: 13,
        color: '#FFFFFF',
    },
    buttonContainer: {
        marginVertical: 10
    },
    progressBarinfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ContainerUpperHeadings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ContainerLowerHeadings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // paddingTop: 60,
    }
});