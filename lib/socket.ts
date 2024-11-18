import { useSession } from "@/context/authContext"
import { useEffect, useRef } from "react"
import io, { Socket } from "socket.io-client"

const SOCKET_SERVER = "http://192.168.1.134:3001"

type msgDate={
    fromUser:string,
    toUser:string,
    content:string,
    roomId:string
}

//defined socket server connection
export const useSocket =()=>{

    // create a ref of socket to storage the socket server
    const socketRef = useRef<Socket|null>(null);
    const {session} = useSession();



    // auto connect socket server after component rendered
     useEffect(()=>{

        // if ref is null, create a new server, avoid mult-create server
        if(!socketRef.current){
            socketRef.current = io(SOCKET_SERVER,{
            reconnection:true,
            reconnectionAttempts:2,
            reconnectionDelay:10000,
            auth:{
                token:"123"
            },    
            query:{
                    username:session,                    
                },
            })
        }
    
        const socket = socketRef.current


        // if socket is valid, run the logical socket 
        if(socket){
            socket.on("connect",()=>{
                console.log("Socket connected")
            
                socket.on("hello",(data)=>{
                    console.log("msg",data)
               })
   
               socket.on("error",(error)=>{
                   console.log(error)
               })
   
               socket.on("reconnect",(attempt)=>{
                   console.log("reconnect",attempt)
               })
   
               socket.on("reconnect_failed",()=>{
                   console.log("reconnect is failed")
               })
   
               socket.on("disconnect",(reason)=>{
                   console.log("disconnect reason",reason)
               })
            })
    
           
            // disconnect the socket server before the component unmount
            return ()=>{
                socket.disconnect();
                socketRef.current = null;
                console.log("socket disconnected")
             }
        }

    },[]);

    const sentMsg =(msg:msgDate)=>{
        const socket = socketRef.current
        if(socket)
            socket.emit("sendMsg",msg)
    }

    return {socket:socketRef.current,sentMsg}
}