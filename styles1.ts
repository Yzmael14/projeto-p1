import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#'
  },
  header: {
    height: 200,
    paddingTop: 30,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    justifyContent: 'space-between',
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: 'lightgrey',
  },
  headerText: {
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  conta: {
    marginTop: 0,
    flexDirection: 'column',
    backgroundColor: 'white',
    height: 70,
    alignContent: "space-between",
    justifyContent: "flex-start"
  },
  iconG: {
    marginRight: -190
  },
  arrowdown: {
    marginRight: 10
  },
  contatext: {
      marginTop: 10,
      marginLeft: 10,
      fontSize: 16, 
  },
  iconButton: {

  },
  menu: {
    flexDirection: "row",
    justifyContent:"center",

  },
  menubox: {
    height: 175,
    width: 380,
    margin: 10,
    backgroundColor: "lightcyan",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 15,
    borderColor: "black",
    
  },
  menutext: {
    fontSize: 20,
    marginTop: 15,
    marginHorizontal: 25    
  }

})

