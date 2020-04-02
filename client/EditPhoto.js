import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import PhotoIcon from 'react-native-vector-icons/FontAwesome';
import CameraIcon from 'react-native-vector-icons/Feather';


const EditPhoto = ({ clicktoEditPhoto }) => {
  console.log('here')
  const [showModal, setModalVisibility] = useState(true);
 
  const hideModal = () => {
    setModalVisibility(false);
    clicktoEditPhoto();
  }

  return (
    <View style={styles.editPhotoContainer}>
      <Modal isVisible={showModal} onBackdropPress={() => hideModal()}>
        <View style={styles.editPhotoBox}>
          <TouchableOpacity style={styles.selection}>
            <PhotoIcon name='photo' size={25} color='black' />
            <Text style={{fontSize: 18}}>&nbsp;
              Camera Roll
            </Text>
          </TouchableOpacity>
            <View style={styles.line}/>
          <TouchableOpacity style={styles.selection}>
            <CameraIcon name='camera' size={25} color='black' />
            <Text style={{fontSize: 18}}>&nbsp;
              Take Picture
            </Text>
          </TouchableOpacity>
            <View style={styles.line}/>
          <TouchableOpacity style={styles.selection} onPress={() => hideModal()}>
            <Text style={{fontSize: 18, color: 'red'}}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  editPhotoContainer: {
    // backgroundColor: 'white',
    // width: '100%',
    // height: '100%',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    position: 'relative'
  },
  editPhotoBox: {
    backgroundColor: 'white',
    height: '20%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
    alignItems: 'center',
    // paddingTop: 10
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
    width: '100%',
  }
})

export default EditPhoto;