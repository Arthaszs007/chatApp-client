import Constant from "expo-constants"
// use to fecth server to get user info
export const searchUser =async(username:string)=>{
    try{
        if(!username) throw new Error("Params can't be empty");

        const res = await fetch(`${Constant.expoConfig?.extra?.API_URL}/user/search/${username}`)

        const data = await res.json();
        if(!data.data) throw new Error(data.msg)
        
        return data.data

    }catch(e:any){
        return{error:e.message || "An unknown error occured when search"}
    }
}
export const addFriend = async()=>{}
export const deleteFriend =async()=>{}

// use to fetch server to get friend list based on username
export const getFriendList=async( username:string)=>{
    try{
        if(!username) throw new Error("session is empty")

        const res = await fetch(`${Constant.expoConfig?.extra?.API_URL}/contact/get/${username}`)

        const data =await res.json()

        if(!data.data) throw new Error(data.msg)

        return data.data

    }catch(e:any){
        return{error:e.message || "An unknown error occured when get friend list"}
    }
}