import { inputMaxLen, inputMinLen } from "@/config/default"
import { isValidContent } from "@/utils/contentTools"
import Constant from "expo-constants"

//use to register
export const userRegister = async(username:string,password:string, repeat:string)=>{
   
    try{
        // input check
        if(!username||!password||!repeat) throw new Error("Input can't be empty");
        if(password !== repeat) throw new Error("Twice password must be same");
        if (username.length>inputMaxLen||password.length>inputMaxLen||repeat.length>inputMaxLen) throw new Error(`Input max length is ${inputMaxLen}` );
        if (username.length<inputMinLen||password.length<inputMinLen||repeat.length<inputMinLen) throw new Error(`Input mini length is ${inputMinLen}` );
        if(!isValidContent(username)||!isValidContent(password)||!isValidContent(repeat)) throw new Error("Please input valid value as numbers or letters");   

        const res = await fetch(`${Constant.expoConfig?.extra?.API_URL}/user/register`,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username:username,
                password:password,
                repeat:repeat,
            }),
        });
        // if data is empty, return error, or return data
        const data = await res.json();
        if(!data.data) throw new Error(data.msg);

        return data.data;
    }catch(e:any){
        return {error : e.message || "An unknown error occured when register"};
    }
}

//use to login
export const userLogin = async(username:string,password:string)=>{
    try{
        // input check
        if(!username||!password) throw new Error("Input can't be empty");
        if (username.length>inputMaxLen||password.length>inputMaxLen) throw new Error(`Input max length is ${inputMaxLen}` );
        if (username.length<inputMinLen||password.length<inputMinLen) throw new Error(`Input mini length is ${inputMinLen}` );
        if(!isValidContent(username)||!isValidContent(password)) throw new Error("Please input valid value as numbers or letters");   
        
        const res = await fetch(`${Constant.expoConfig?.extra?.API_URL}/user/login`,{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                username:username,
                password:password,
            }),
        });
        // if data is empty ,return error, or data
        const data = await res.json();
        if(!data.data) throw new Error(data.msg);
        return data.data;
    }catch(e:any){
        return {error:e.message||"An unknown error occured when login"}
    }
}
// use to verify token when visit
export const verifyJWT = async(token:string)=>{
    try{
        if(!token) throw new Error("Token is empty")
        const res =await fetch(`${Constant.expoConfig?.extra?.API_URL}/user/jwt`,{
        method:"GET",
        headers:{"Authorization":`Bearer ${token}`}
    })

        const data = await res.json();
        if(!data.data) throw new Error(data.msg)

        return data.data;

    }catch(e:any){
        return {error:e.message ||"An unknown error occured when verify jwt"}
    }
}