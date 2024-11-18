import { useCallback, useEffect, useReducer } from "react"
import * as SecureStore from 'expo-secure-store';

type UseStateHook<T>= [[boolean,T|null],(value:T|null)=>void]

//
function useAsyncState<T>(initialValue:[boolean,T|null]=[true,null],):UseStateHook<T>{
    return useReducer(
        (state:[boolean,T|null],action:T|null):[boolean,T|null]=>[false,action],
        initialValue
    ) as UseStateHook<T>;
}

// receive key and value, if value is null, delete storage,or re-cover storage
export async function setStorageItemAsync(key:string, value:string|null){
    if(value == null){
        await SecureStore.deleteItemAsync(key);
    }else {
        await SecureStore.setItemAsync(key,value);
    }
}

// receive a key , use to get local storage value 
export async function getStorageItemAsync(key:string){
    if(!key){
        return await SecureStore.getItemAsync(key);
    }
}

//receive a key and return a callback func and a value
export function useStorageState(key:string):UseStateHook<string>{
    const [state,setState] = useAsyncState<string>();
    useEffect(()=>{
        SecureStore.getItemAsync(key).then(value =>{
            setState(value);
        })
    },[key])

    const setValue = useCallback(
        (value:string|null)=>{
            setState(value);
            setStorageItemAsync(key,value);
        },
        [key]
    );
    return [state,setValue];
}