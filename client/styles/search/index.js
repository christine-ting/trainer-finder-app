import Colors from '../profile/colors';

export const searchStyle = {
  search: {
    backgroundColor: Colors.sectionBackground,
    flex: 1,
    paddingBottom: 20
  },
  header: {
    backgroundColor: Colors.headerFooter,
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.lightGrey,
    fontSize: 20,
    marginTop: 30
  },
  headerImg: {
    width: '100%', 
    height: 200
  },
  searchBar: {
    // backgroundColor: 'white',
    // borderWidth: 0, //no effect
    // shadowColor: 'white', //no effect
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  }
};