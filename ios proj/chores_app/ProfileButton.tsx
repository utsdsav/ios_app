import * as React from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react';
import { useRootStore } from './RootStore';

const ProfileButton = observer(() => {
    const navigation = useNavigation();
    const rootStore = useRootStore()
    //TODO: REPLACE USERNAME
    const currentName = rootStore.email
    return (
        <Button icon="account" color="#000000" onPress={() => 
            navigation.navigate('Profile', {username: currentName ,isUser: true})
            }>
        </Button>
    );
});
export default ProfileButton;