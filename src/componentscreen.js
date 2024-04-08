import React from "react";
import { Text,StyleSheet } from "react-native";

const componentscreen = () => {
    return <Text style = {styles.textstyle}> this is the first componet </Text>

};
const styles = StyleSheet.create({
    textstyle:{
        fontSize: 30

    }
});
export default componentscreen;