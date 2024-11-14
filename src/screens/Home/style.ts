import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width / 3 - 10;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: '#1E1E1E',
  },
  icons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icone:{
    marginLeft: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcon: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  list: {
    paddingHorizontal: 5,
  },
  itemContainer: {
    width: itemWidth,
    margin: 5,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: itemWidth * 1.4,
    resizeMode: 'cover',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  chapter: {
    color: '#AAAAAA',
    fontSize: 12,
    paddingHorizontal: 5,
    paddingBottom: 5,
  },
});