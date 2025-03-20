import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const dayToColor = {
    "Monday": "#F7C9C9",
    "Tuesday": "#D5F7C9",
    "Wednesday": "#F7C9F5",
    "Thursday": "#F7C9C9",
    "Friday": "#D5F7C9",
    "Saturday": "#F7C9C9",
    "Sunday": "#D5F7C9"
}

export default TaskList = ({list}) => {
    console.log("task list list: " + JSON.stringify(list))
    const count = list.length;
    var loop = []
    for (let i=0; i < count; i++) {
        loop.push(
            <View style={[styles.listDetail, {backgroundColor: "white"}]}>
                <Text style={styles.listTime} numberOfLines={1}>
                    {list[i].dueDate}
                    <Text> {"     "}</Text>
                    <Text style={styles.listTitle}>
                        {list[i].taskName}
                    </Text>
                </Text>
            </View>
        )
        
    }
    return (
        
        <View style={[styles.listContainer, {backgroundColor: dayToColor[list[0].weekDay]}]}>
            <Text style={styles.listDate} numberOfLines={1}>
                {list[0].weekDay}
            </Text>
            
            {loop}
            
            
                

            {/* <View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.time}>01 <Text style={styles.name}>name1</Text> </Text>
                </View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.time}>02 <Text style={styles.name}>name2</Text> </Text> 
                </View>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 13,
        paddingHorizontal: 13,
        borderRadius: 12,
        marginVertical: 12,
        alignItems: 'Center',
        width: 300
    },
    listDate: {
        fontSize: 15,
        fontWeight: "500",
        color: "black",
        marginBottom: 20
    },
    listDetail: {
        paddingVertical: 13,
        paddingHorizontal: 13,
        borderRadius: 12,
        marginVertical: 12,
        alignItems: 'Center',
        width: 250
    },
    listTime: {
        fontSize: 13,
        fontWeight: "400",
        color: "black"
    },
    listTitle: {
        fontSize: 15,
        fontWeight: "400"
    }

})