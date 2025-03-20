import { View, Animated, Image, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { RootStackScreenProps } from './types';

const ProfilePage = ({ route, navigation }: RootStackScreenProps<'Profile'>) => {
    
    //whenever you navigation.navigate('Profile', {username, isUser})
    //this is to preserve state like username and whether or not you are the user
    //change maybe????????  
    //Not user means that logout page is not there
    const {username, isUser} = route.params;

    return (
        // here lays the layout of our page
        <View style={styles.whiteBackground}>
            {/* //profile picture; could just be a placeholder */}
            <View style={styles.center}>
            <Button labelStyle={{fontSize: 100}} icon="account" color="#000000" style={[styles.center, styles.profile_pic]}>
            </Button>
            {/* <Icon style={[styles.center, styles.profile_pic]} name="ios-person" size={100} color='#000000'/> */}
            </View>
            {/* username: fetched from the firestore; */}
            <Text style={[styles.center, styles.username]} >{username}</Text>
            {/* Current Location */}
            <View style={[styles.center, styles.locationLayout]}>
                <Text style={[styles.locationDisplay]}> BERKELEY, CA</Text>
            </View>
            {/* ignore error below and change the destination*/}
            <Button icon="account" color="#000000" onPress={() => 
                    navigation.navigate('TabThree')
                    }>
                Friends
            </Button>
            {/* add onPress to take the screen from here to the login page */}
            { isUser &&
                <Button style={styles.LogoutButton} icon="logout" color="#E42A2A">
                Logout
                </Button>
            }
        </View>
        //username
    );
}

//' UNION SELECT token FROM sessions --
export default ProfilePage
const paddingProportion = "10%"
const paddingProportion2 = "5%"
const marginLeft = "75%";
const fullHeight = "100%";
const styles = StyleSheet.create({
    whiteBackground : {backgroundColor: "white", 
    height: fullHeight},
    center: {alignItems: 'center', 
    textAlign:'center'},
    profile_pic: {paddingVertical: paddingProportion},
    username: {fontSize: 26},
    locationDisplay: {fontSize: 14},
    locationLayout: {paddingBottom: paddingProportion, paddingTop: paddingProportion2},
    LogoutButton: {paddingTop: paddingProportion},
    friendsDisplay: {flex:2, 
        marginHorizontal: "auto"},
    accountGroup: {
        marginLeft: marginLeft
    }
})
