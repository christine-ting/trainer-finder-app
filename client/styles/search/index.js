import Colors from '../profile/colors';

export const searchStyle = {
  search: {
    backgroundColor: Colors.background,
    flex: 1
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
  searchView: {
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'yellow',
    // paddingRight: 10
  },
  searchBar: {
    // flex: 0.95,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent'
  },
};

export const gymListEntryStyle = {
  listView: {
    backgroundColor: Colors.sectionBackground,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  gymImg: {
    width: '100%',
    height: 200
  },

}