import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store"

const key = "user-jwt"
export const setJWT=(value:string|null)=>{
    if(value)
        setItemAsync(key,value)

    else deleteItemAsync(key)
}   

export const getJWT=()=>{
    const token = getItemAsync(key)
    return token
}