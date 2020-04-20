import Colors from '../profile/colors';

export const searchStyle = {
  search: {
    backgroundColor: Colors.background,
    flex: 1
  },
  headerImg: {
    width: '100%', 
    height: 100
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

export const gymViewStyle = {
  gymView: {
    backgroundColor: Colors.background,
  },
  gymImg: {
    height: 200,
    width: '100%'
  },
  topSection: {
    // backgroundColor: 'blue',
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  ratingView: {
    // backgroundColor: 'white',
    flexDirection: 'row'
  },
  numRating: {
    color: Colors.lightGrey,
    fontSize: 13
  },
  name: {
    fontSize: 20,
    paddingVertical: 5,
    color: Colors.mediumGrey,
    fontWeight: 'bold'
  },
  title: {
    backgroundColor: Colors.sectionBackground,
    paddingVertical: 7,
    paddingHorizontal: 10,
    color: Colors.mediumGrey,
    fontWeight: 'bold'
  },
};

export const gymDetailsStyle = {
  detailsView: {
    backgroundColor: Colors.background,
    paddingVertical: 15,
    paddingHorizontal: 20
  },
  sectionView: {
  },
  sectionTitleView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sectionTitle: {
    color: Colors.lightGrey,
    fontWeight: 'bold'

  },
  details: {
    flexDirection: 'row',
    paddingTop: 3
  },
  icons: {
    color: Colors.orangePink,
    paddingRight: 6
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 12,
    paddingLeft: 3,
    paddingVertical: 5
  }
};

export const trainersStyle = {
  trainersView: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20
  }
};

export const trainerStyle = {
  trainerView: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trainerImg: {
    height: 120,
    width: 120
  },
  trainerDetails: {
    paddingLeft: 5,
    paddingTop: 5
  },
  ratingView: {
    flexDirection: 'row'
  },
  numRating: {
    color: Colors.orangePink,
    fontSize: 10
  },
  name: {
    color: Colors.lightGrey,
    fontWeight: 'bold'
  },
  specialties: {
    color: Colors.orangePink,
    fontSize: 10
  }
};