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
    paddingTop: 20,
    paddingBottom: 15,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  gymImg: {
    width: '100%',
    height: 200,
    borderRadius: 8
  },
  description: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    flexDirection: 'row',
    flex: 1
  },
  gymTextView: {
    paddingHorizontal: 5,
    flex: 0.7
  },
  name: {
    fontSize: 20,
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    paddingBottom: 5
  },
  address: {
    color: Colors.orangePink
  },
  ratingView: {
    flex: 0.3,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  numRating: {
    color: Colors.lightGrey,
    fontSize: 13
  }
};