import Colors from '../profile/colors';
export const homeStyle = {
  home: {
    backgroundColor: Colors.background,
    flex: 1
  },
  header: {
    backgroundColor: Colors.headerFooter,
    flex: 0.13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: Colors.lightGrey,
    fontSize: 21,
    marginTop: 40,
    fontWeight: 'bold'
  },
  scroll: {
    flex: 0.87
  },
  sectionView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  image: {
    width: '100%',
    height: 160,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  title: {
    color: Colors.lightGrey,
    fontSize: 28,
    paddingRight: 8,
    paddingBottom: 10
  }
};