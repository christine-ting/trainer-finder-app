import Colors from './colors';

export const profilePageStyle = {
  profilePage: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: Colors.background
  },
  scrollProfile: {
    flex: 1
  },
  editIcon: {
    color: Colors.mediumGrey,
    marginRight: 10,
    marginBottom: 10
  },
  logoutIcon: {
    color: Colors.mediumGrey,
    marginLeft: 10,
    marginBottom: 10
  }
};

export const basicProfileStyle = {
  basicProfile: {
    width: '100%',
    backgroundColor: Colors.sectionBackground,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center'
  },
  profileView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileName: {
    fontSize: 25,
    color: Colors.lightGrey,
    fontFamily: 'pixel-font',
    paddingVertical: 15
  },
  profileText: {
    color: Colors.lightGrey
  },
  editCoverPhotoContainer: {
    alignItems: 'flex-end',
    position: 'absolute',
    width: '92%',
    top: -40,
    paddingBottom: 10,
    paddingRight: 10
  },
  editCoverPhotoBackground: {
    backgroundColor: Colors.mediumGrey,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 5
  },
  editProfilePicContainer: {
    alignItems: 'center',
    position: 'absolute',
    width: '92%',
    paddingTop: 40,
    paddingLeft: 130
  },
  editProfilePicBackground: {
    backgroundColor: Colors.mediumGrey,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 20,
    borderColor: Colors.sectionBackground,
    borderWidth: 4
  }
};

export const BMRStyle = {
  BMR: {
    paddingVertical: 20,
    paddingHorizontal: 30,
    width: '100%',
    backgroundColor: Colors.sectionBackground
  },
  BMRstatement: {
    color: Colors.lightGrey,
    lineHeight: 20
  },
  number: {
    color: Colors.orangePink,
    fontWeight: 'bold'
  }
};

export const editContainerStyle = {
  main: {
    width: '100%'
  },
  title: {
    color: Colors.mediumGrey,
    fontWeight: 'bold',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15
  },
  details: {
    backgroundColor: Colors.sectionBackground
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1
  },
  item: {
    color: Colors.lightGrey,
    justifyContent: 'center',
    flex: 0.4
  },
  inputView: {
    flexDirection: 'row',
    flex: 0.6,
    justifyContent: 'flex-end'
  },
  info: {
    color: Colors.mediumGrey
  },
  line: {
    backgroundColor: Colors.background,
    height: 1
  }
};

export const editPhotoStyle = {
  editPhotoContainer: {
    position: 'relative'
  },
  editPhotoBox: {
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
    alignItems: 'center'
  },
  selection: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    flexDirection: 'row'
  },
  line: {
    height: 1,
    backgroundColor: 'silver',
    width: '100%'
  }
};

export const editProfileStyle = {
  editProfile: {
    flexDirection: 'column',
    height: '100%',
    backgroundColor: Colors.background,
    flex: 1,
    paddingBottom: 20
  },
  appNameView: {
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appName: {
    color: Colors.mediumGrey,
    fontSize: 17
  }
};

export const blockStyle = {
  main: {
    backgroundColor: Colors.sectionBackground,
    paddingHorizontal: 50,
    paddingBottom: 15,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomColor: Colors.orangePink,
    borderBottomWidth: 1  
  },
  column: {
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  entry: {
  },
  itemsTitle: {
    color: Colors.mediumGrey
  },
  itemsText: {
    color: Colors.lightGrey,
    paddingTop: 8,
    paddingBottom: 15,
    marginLeft: 3
  }
};

export const workoutPlansStyle = {
  workoutPlans: {
    backgroundColor: Colors.sectionBackground,
    paddingHorizontal: 50,
    paddingBottom: 20,
    paddingTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: Colors.orangePink,
    borderBottomWidth: 1  
  },
  itemsTitle: {
    color: Colors.mediumGrey
  },
  entry: {
    paddingRight: 40
  }, 
  itemsText: {
    color: Colors.lightGrey,
    paddingTop: 8,
    marginLeft: 3
  }
};

export const footerStyle = {
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }, 
  icon: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: 'whitesmoke',
    fontSize: 13
  }
};

export const profileStyle = {
  profile: {    
    justifyContent: 'space-evenly',
    paddingBottom: 30
  },
  coverPotoView: {
    alignItems: 'center',
    backgroundColor: Colors.sectionBackground
  },
  coverPhoto: {
    width: '92%',
    height: 180,
    borderRadius: 600 / 70,
  },
  BMRContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 15
  },
  sectionContainer: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    position: 'relative',
    width: '100%'
  },
  verticalLine: {
    backgroundColor: Colors.lineAndIcon,
    width: 2,
    height: '79%',
    position: 'absolute',
    marginLeft: 30
  },
  sectionTitle: {
    paddingLeft: 16,
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    width: '100%'
  },
  iconBackground: {
    backgroundColor: Colors.lineAndIcon,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 1,
    paddingTop: 3
  },
  headerText: {
    color: Colors.mediumGrey,
    fontSize: 20,
    fontFamily: 'pixel-font',
    marginLeft: 10,
  },
  shortVerticalLine: {
    backgroundColor: Colors.lineAndIcon,
    width: 2,
    height: '70%',
    position: 'absolute',
    marginLeft: 30
  }
};

export const profilePicStyle = {
  profilePicContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePicBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 165,
    width: 165,
    borderRadius: 700 / 6,
    backgroundColor: Colors.sectionBackground,
    borderColor: Colors.mediumGrey,
    borderWidth: 2,
    marginTop: -80
  },
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: 700 / 7
  }
};

export const authenticationStyle = {
  authentication: {
    backgroundColor: Colors.sectionBackground,
    flex: 1,
    paddingBottom: 20
  },
  header: {
    backgroundColor: Colors.headerFooter,
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.lightGrey,
    fontSize: 20,
    marginTop: 30
  },
  authView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.88
  },
  authBox: {
    backgroundColor: Colors.lightGrey,
    justifyContent: 'center',
    width: '75%',
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 10,
    borderRadius: 5
  },
  title: {
    paddingTop: 20
  },
  authInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 5,
    color: Colors.sectionBackground
  },
  buttonView: {
    paddingTop: 25,
    paddingBottom: 10,
    justifyContent: 'space-between',
    height: 120
  },
  loginButton: {
    backgroundColor: 'grey',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 3
  },
  signUpButton: {
    backgroundColor: Colors.orangePink,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 3
  },
  buttonText: {
    color: Colors.lightGrey,
    fontSize: 16
  },
  showPwdView: {
    alignItems: 'flex-end'
  },
  showPwdText: {
    fontSize: 13,
    color: 'rgb(122,129,133)'
  }
};

export const homeStyle = {
  home: {
    backgroundColor: Colors.sectionBackground,
    flex: 1,
    paddingBottom: 20
  },
  header: {
    backgroundColor: Colors.headerFooter,
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.lightGrey,
    fontSize: 20,
    marginTop: 30
  }
};

export const searchStyle = {
  search: {
    backgroundColor: Colors.sectionBackground,
    flex: 1,
    paddingBottom: 20
  },
  header: {
    backgroundColor: Colors.headerFooter,
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.lightGrey,
    fontSize: 20,
    marginTop: 30
  }
}