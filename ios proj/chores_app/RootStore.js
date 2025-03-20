import { createContext, useContext } from "react";
import { autorun, makeAutoObservable } from "mobx";
import { loginAPI, saveProfileData } from "./firebaseAPI";
import { Alert } from "react-native";

function getDayOfWeek(date) {
    const dayOfWeek = new Date(date).getDay();    
    return isNaN(dayOfWeek) ? null : 
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}


function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
}

export class RootStore {

    email
    signedIn
    choresList
    loginStateFunc

    constructor() {
        makeAutoObservable(this)
        this.email = ""
        this.signedIn = false
        this.choresList = []
        this.loginStateFunc = null
    }

    setEmail(email) {
        console.log("authorized")
        this.email = email
        this.signedIn = true
        this.loginStateFunc(true)
    }

    setChoresList(list) {
        this.choresList = list
        console.log("setChoresList: " + JSON.stringify(this.choresList))
    }

    setLoginStateFunc(func) {
        this.loginStateFunc = func
    }

    addChoreToList(chore) {
        // { selectedTime, taskName, selectedDate, selectedAssign }
        const weekDay = getDayOfWeek(chore.selectedDate)
        const dueDate = formatAMPM(chore.selectedTime)

        this.choresList.push({weekDay: weekDay, dueDate: dueDate, taskName: chore.taskName, selectedAssign: chore.selectedAssign})

        // var foundIndex = -1

        // for (let i = 0; i < this.choresList.length; i++) {
        //     if (this.choresList[i].weekDay == weekDay) {
        //         foundIndex = i
        //         break
        //     }
        // }

        // if (foundIndex == -1) {
        //     this.choresList.push({
        //         weekDay: weekDay,
        //         taskList: [{dueDate: chore.dueDate, taskName: chore.taskName, selectedAssign: chore.selectedAssign}]
        //     })
        // } else {
        //     this.choresList[i].taskList.push({dueDate: chore.dueDate, taskName: chore.taskName, selectedAssign: chore.selectedAssign})
        // }

        console.log("after addingchore to list: " + JSON.stringify(this.choresList))
    }

    saveData() {
        console.log("saveData: " + this.email)
        saveProfileData(this.email, this.choresList)
    }

    fetchMostUpdatedData() {
        loginAPI(this.email, (res, err) => {
            if (err != null) {
                Alert.alert(err)
                return
            }
            console.log("fetch most updated data: " + JSON.stringify(res))
        })
    }
}

export const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useRootStore = () => useContext(StoreContext)
