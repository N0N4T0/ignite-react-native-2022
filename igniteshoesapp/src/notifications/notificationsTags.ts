import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate(){
    OneSignal.User.addTags({
        user_name: "Android",
        user_email: "android@gmail.com",
    })
}