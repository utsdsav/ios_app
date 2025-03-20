import {firestore} from './config'
import { addDoc, collection, setDoc, doc, getDocs, getDoc, where, endAt, startAt, deleteDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { Alert } from 'react-native';

export async function loginAPI(email: string, callback) {
    try {
        console.log(2)
        const ref = doc(firestore, "profileData", email)
        const docSnap = await getDoc(ref)
        if (docSnap.exists()) {
            console.log(3)
            callback(docSnap.data(), null)
        } else {
            callback(null, "User not found or password incorrect")
        }
    } catch(err) {
        callback(null, err)
    }
}

export async function createNewAccountAPI(email: string, choresList, callback) {
    try {
        await setDoc(doc(firestore, "profileData", email), {
            email: email,
            choresList: choresList
        })
        callback()
    } catch(err) {
        callback()
    }
}

export async function fetchChores(email: string, callback) {
    try {
        const ref = doc(firestore, "profileData", email)
        const docSnap = await getDoc(ref)
        if (docSnap.exists()) {
            callback(docSnap.data().choresList, null)
        } else {
            callback([], null)
        }
    } catch(err) {
        callback(null, err)
    }
}

export async function saveProfileData(email: string, choresList) {
    try {
        console.log("saveProfileData: " + JSON.stringify(choresList))
        await setDoc(doc(firestore, "profileData", email), {
            email: email,
            choresList: choresList
        })
    } catch(err) {
        console.log("save profile data error: " + err)
    }
}

