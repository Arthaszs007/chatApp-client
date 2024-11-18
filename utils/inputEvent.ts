import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native"

//receive a set func to return input change event type func
export const handleInputChange =(setValue:React.Dispatch<React.SetStateAction<string>>)=>{
    return (e :NativeSyntheticEvent<TextInputChangeEventData>)=>{
        setValue(e.nativeEvent.text)
    }
}