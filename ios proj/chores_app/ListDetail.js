import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default TaskList = ({list}) => {
    const count = list.length;
    var loop = []
    for (let i=0; i < count; i++) {
        loop.push(
            <View style={[styles.listDetail, {backgroundColor: "white"}]}>
                <Text numberOfLines={1}>
                    <View style={[styles.listBox, {backgroundColor: "#CBEAF1"}]}>
                        <Text style={styles.listTime}>
                            {list[i].dueDate}
                        </Text>
                    </View>
                    <Text>{'     '}</Text>
                    <Text style={styles.listTitle}>
                        {list[i].taskName}
                    </Text>
                </Text>
            </View>
        )
    }
    return (
        <View style={[styles.listContainer, {backgroundColor: list.color}]}>
            <Text style={styles.listDate} numberOfLines={1}>
                {list[0].weekDay}
            </Text>
            <button>
            {loop}
            </button>
            
            
                

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
    listBox: {
        borderTopLeftRadius: 12,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 12,
        // marginVertical: 12,
        paddingVertical: 6,
        alignItems: 'Center',
        width: 60
    },
    listTitle: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        alignItems: "center"
    },
    listDate: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        marginBottom: 20
    },
    listDetail: {
        // paddingVertical: 13,
        // paddingHorizontal: 13,
        borderRadius: 12,
        marginVertical: 12,
        alignItems: 'Center',
        width: 250
    },
    listTime: {
        fontSize: 12,
        fontWeight: "500",
        color: "black",
        alignItems: "center",
        paddingLeft: 7
    }

})