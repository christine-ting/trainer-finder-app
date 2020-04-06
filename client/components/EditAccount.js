import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import Colors from "../constants/Colors";
import EditIcon from "react-native-vector-icons/Feather";

const titles = ["First Name", "Last Name", "Email"];
const dbTitles = ["first_name", "last_name", "email"];

const EditAccount = ({ profile, userInput, changeHandler }) => {
  return (
    <View style={styles.editPersonalDetails}>
      <Text style={styles.title}>ACCOUNT</Text>
      <View style={styles.details}>
        {titles.map((title, index) => (
          <View key={index}>
            <View style={styles.row}>
              <Text style={styles.item}>{title}</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.info}
                  value={userInput[dbTitles[index]].toString()}
                  onChangeText={text => changeHandler(text, dbTitles[index])}
                />
                <Text>&nbsp;</Text>
                <EditIcon name="edit-2" size={15} color={Colors.orangePink} />
              </View>
            </View>
            <View style={styles.line} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  editAccount: {
    width: "100%"
  },
  title: {
    color: Colors.mediumGrey,
    fontWeight: "bold",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15
  },
  details: {
    backgroundColor: Colors.sectionBackground
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1
  },
  item: {
    color: Colors.lightGrey,
    justifyContent: "center",
    // backgroundColor: 'blue',
    flex: 0.3
  },
  inputView: {
    flexDirection: "row",
    // backgroundColor: 'white',
    flex: 0.7,
    justifyContent: "flex-end"
  },
  info: {
    color: Colors.mediumGrey
  },
  line: {
    backgroundColor: Colors.background,
    height: 1
  }
});
export default EditAccount;
