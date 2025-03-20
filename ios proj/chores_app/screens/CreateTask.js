import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Modal, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Platform, ScrollView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Ionicons } from '@expo/vector-icons'; 
// import Entypo from 'react-native-vector-icons/Entypo'
import { Entypo, Ionicons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from 'react-redux';
import { addToCart } from '../src/store/actions/cartActions'
import TouchHistoryMath from 'react-native/Libraries/Interaction/TouchHistoryMath';
import { rootStore } from '../RootStore';
import { useNavigation } from '@react-navigation/native';


class CreateTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showTime: false,
            selectedTime: null,
            showDate: false,
            selectedDate: null,
            showAssign: false,
            selectedAssign: null,
            taskName: ""
        }
    }
    async componentDidMount() {
        this._unsubscribe = this.props.navigation.addListener("focus", async () => {
            this.handleIntital()
        });
        this.handleIntital()
    }
    handleIntital() {
        if (this.props.route?.params?.item?.taskName !== "") {
            this.setState({
                showTime: false,
                selectedTime: this.props.route?.params?.item?.selectedTime,
                showDate: false,
                selectedDate: this.props.route?.params?.item?.selectedDate,
                showAssign: false,
                selectedAssign: this.props.route?.params?.item?.selectedAssign,
                taskName: this.props.route?.params?.item?.taskName
            })
        }
        else {
            this.setState({
                showTime: false,
                selectedTime: null,
                showDate: false,
                selectedDate: null,
                showAssign: false,
                selectedAssign: null,
                taskName: ""
            })
        }
    }
    onTimeSelected = (event, value) => {
 
        this.setState({
            selectedTime: value
        })
    }
    onDateSelected = (event, value) => {
 
        this.setState({
            selectedDate: value
        })
    }
    setOpen = (open) => {
        this.setState({
            showAssign: open
        })
    }

    setValue(callback) {
        this.setState(state => ({
            selectedAssign: callback(state.value),
            showAssign: false
        }));
    }
    setOpen(open) {
        this.setState({
            open
        });
    }
    handleSubmit = () => {
        const { selectedTime, taskName, selectedDate, selectedAssign } = this.state
        if (taskName) {
            if (selectedTime) {
                if (selectedDate) {
                    if (selectedAssign) {
                        // console.log("test1: " + JSON.stringify({ selectedTime, taskName, selectedDate, selectedAssign }))
                        rootStore.addChoreToList({ selectedTime, taskName, selectedDate, selectedAssign })
                        rootStore.saveData()
                        this.setState({
                            // showTime: false,
                            // selectedTime: this.props.route?.params?.item?.selectedTime,
                            // showDate: false,
                            // selectedDate: this.props.route?.params?.item?.selectedDate,
                            // showAssign: false,
                            // selectedAssign: this.props.route?.params?.item?.selectedAssign,
                            // taskName: this.props.route?.params?.item?.taskName
                            showTime: false,
                            selectedTime: null,
                            showDate: false,
                            selectedDate: null,
                            showAssign: false,
                            selectedAssign: null,
                            taskName: ""
                        })
                        this.props.navigation.goBack()
                    }
                    else {
                        alert("Please Enter Assingnee")
                    }
                }
                else {
                    alert("Please Enter Date")
                }
            }
            else {
                alert("Please Enter Time")
            }
        }
        else {
            alert("Please Task Name")
        }

    }
    defaultDate = () => {
        var myTime = new Date(Date.now())
        var myDate = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
        if (this.props.route?.params?.item?.taskName) {
            var taskName = this.props.route?.params?.item?.taskName
            var DfValue = 0
            if (taskName == "Take Out Trash") {
                DfValue = 5
            }
            else if (taskName == "Clean Fridge") {
                DfValue = 60

            }
            else if (taskName == "Clean Kitchen Floor") {
                DfValue = 45

            }
            myTime.setMinutes(myTime.getMinutes() + DfValue)
        }
        this.setState({
            selectedTime: new Date(myTime),
            selectedDate: myDate
        })
        return myTime.toLocaleTimeString('en-US')
    }

    render() {
       
        return (
            <View style={{ flex: 1, paddingTop: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 80, backgroundColor: "white",  }} >
                    <Ionicons name="arrow-back-outline" onPress={() => this.props.navigation.goBack()} size={30} style={{paddingLeft:20}} color="black" />
                    <View style={{ width: "100%", position: "absolute", alignItems: "center",   zIndex:-1 }} >
                        <Text style={{fontSize:18}} >Create Task</Text>
                    </View>

                </View>
                <View style={styles.MainContainer}>
                    <View style={{ justifyContent: "space-between", flex: 0.6, paddingTop: 30 }}>
                        <View >
                            <Text>
                                Task Name
                            </Text>
                            <TextInput value={this.state.taskName} onChangeText={(taskName) => this.setState({
                                taskName
                            })} style={styles.input} />
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={styles.row}>
                                <Ionicons style={{ fontSize: 30, }} name="time-outline" />
                                <Text>Estimated time to complete </Text>
                            </View>

                            <TouchableOpacity onPress={() => this.setState({
                                showTime: true
                            })}>
                                <Text style={{ backgroundColor: "gray", padding: 10, color: "white" }} >{this.state.selectedTime ? new Date(this.state.selectedTime).toLocaleTimeString('en-US') :
                                    this.props.route?.params?.item?.taskName ?
                                        this.defaultDate() : "Select Time"
                                }</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={styles.row}>
                                <Entypo style={{ fontSize: 30, }} name="calendar" />
                                <Text>Completed By </Text>
                            </View>
                            <TouchableOpacity onPress={() => this.setState({
                                showDate: true
                            })}>
                                <Text style={{ backgroundColor: "gray", padding: 10, color: "white" }} >{this.state.selectedDate ? new Date(this.state.selectedDate).toDateString('en-US') : "Select Date"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={styles.row}>
                                <Entypo style={{ fontSize: 30, }} name="user" />
                                <Text>Assigned to </Text>
                            </View>
                            <DropDownPicker
                                itemProps={{
                                }}
                                open={this.state.showAssign}
                                value={this.state.selectedAssign}
                                items={[
                                    { label: 'Cindy', value: 'Cindy' },
                                    { label: 'Christina', value: 'Christina' },
                                    { label: 'Eloy', value: 'Eloy' },
                                    { label: 'Felix', value: 'Felix' },
                                    { label: 'Darren', value: 'Darren' },
                                    { label: 'Utsav', value: 'Utsav' },
                                ]}
                                setOpen={(open) => this.setOpen(open)}
                                setValue={(callback) => this.setValue(callback)}
                                containerProps={{
                                    width: 200,
                                }}
                            />
                        </View>
                        <Modal
                            animationType="slide"
                            visible={this.state.showTime}
                            onRequestClose={() => this.setState({
                                showTime: false
                            })}
                        >
                            <View style={styles.centeredView}>
                                <TouchableOpacity onPress={() => this.setState({
                                    showTime: false
                                })} style={{ marginLeft: 5, padding: 10, marginBottom: -50, zIndex: 10 }}>
                                    <Entypo style={{ fontSize: 30, }} name="circle-with-cross" />
                                </TouchableOpacity>
                                <View style={styles.modalView}>
                                    <DateTimePicker
                                        value={this.state.selectedTime ? this.state.selectedTime : new Date(Date.now())}
                                        mode={'time'}
                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        is24Hour={false}
                                        onChange={(event, value) => this.onTimeSelected(event, value)}
                                        style={styles.datePicker}
                                    />
                                </View>
                            </View>
                        </Modal>
                        <Modal
                            animationType="slide"
                            visible={this.state.showDate}
                            onRequestClose={() => this.setState({
                                showDate: false
                            })}
                        >
                            <View style={styles.centeredView}>
                                <TouchableOpacity onPress={() => this.setState({
                                    showDate: false
                                })} style={{ marginLeft: 5, padding: 10, marginBottom: -50, zIndex: 10 }}>
                                    <Entypo style={{ fontSize: 30, }} name="circle-with-cross" />
                                </TouchableOpacity>
                                <View style={styles.modalView}>
                                    <DateTimePicker
                                        value={this.state.selectedDate ? this.state.selectedDate : new Date(Date.now())}
                                        mode={'date'}
                                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                        is24Hour={false}
                                        onChange={(event, value) => this.onDateSelected(event, value)}
                                        style={styles.datePicker}
                                    />
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
                <View style={{ alignItems: 'center', marginVertical: 20 }}>
                    <TouchableOpacity onPress={() => this.handleSubmit()} style={{ padding: 15, paddingHorizontal: 40, alignItems: 'center', backgroundColor: "green", justifyContent: 'center', borderRadius: 20 }}>
                        <Text style={{ color: 'white' }}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapState = (state) => {
    return {
        loading: state.globalReducers.loading,
    }
}
const mapDispatch = (dispatch) => {
    return {
        addToCart: obj => dispatch(addToCart(obj)),
    }
}
export default connect(mapState, mapDispatch)(CreateTask);


const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'space-between'

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    input: {
        fontSize: 20,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        paddingTop: 20
    },
    datePicker: {
        justifyContent: 'center',
        display: 'flex',
        width: 300
    },
    head1: {
        fontSize: 50,
        color: 'red'
    },
    head2: {
        fontSize: 30,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
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