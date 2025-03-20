
import { observer } from 'mobx-react';
import { View, Animated, Image, Text, StyleSheet, FlatList, ListItem} from "react-native";
import tempData from './tempData';
import TaskList from './TaskList';
import { Button } from 'react-native-paper';
// import ListDetail from './ListDetail';
import ProfileButton from './ProfileButton';
import { rootStore } from './RootStore';
import React from 'react'

const SecondRootTabView = observer(() => {

    const [refreshing, setRefreshing] = React.useState(false);

    function renderItems({item}){
        const filteredList = rootStore.choresList.filter((elem) => {
            return elem.weekDay == item
        })
        console.log("filteredList: " + JSON.stringify(filteredList))
        if (filteredList.length > 0) {
            return (
                <View>
                    <TaskList list={filteredList} />
                    {/* <FlatList
                        data={tempData}
                        vertical={true}
                        showsVerticalScrollIndicator={false}
                        renderItem = {({item}) => (
                            <ListDetail list={item.chores}
                            />
                        )}
                    /> */}
                </View>
            )
        } else {
            return null
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.profileButton}>
            <ProfileButton/>
            </View>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.title}>
                    <Text style={{fontSize: "26"}}>Weekly Task List</Text>
                </Text>
                
            </View>
            <Button onPress={() => setRefreshing(!refreshing)} uppercase={false} mode='contained' style={{borderRadius: 25, marginTop: 20}}>Refresh</Button>

            <View style={{height: 600, paddingTop: 30}}>
                <FlatList 
                    data={["Saturday", 'Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]} 
                    keyExtractor={(item, index) => index} 
                    vertical={true} 
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItems}
                    // renderItem={({item}) => (
                    //     <View>
                    //         <TaskList list={item} />
                    //         {/* <FlatList
                    //             data={tempData}
                    //             vertical={true}
                    //             showsVerticalScrollIndicator={false}
                    //             renderItem = {({item}) => (
                    //                 <ListDetail list={item.chores}
                    //                 />
                    //             )}
                    //         /> */}
                    //     </View>
                    // )} 
                />
            </View>
        </View>
    )
})

export default SecondRootTabView

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 30
    },
    // Edit once you add Back Button
    profileButton: {
        alignItems: 'left',
        justifyContent: 'left',
        marginLeft: 275,
    }
    ,
    title: {
        fontSize: 26,
        fontWeight: "800",
        paddingHorizontal: 64
    }
  });
