import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import PhotoIcon from 'react-native-vector-icons/FontAwesome';
import CameraIcon from 'react-native-vector-icons/Feather';
import * as ImagePicker from 'expo-image-picker';
import { RNS3 } from 'react-native-aws3';
import key from '../../server/env/key';
import axios from 'axios';




const EditPhoto = ({ photoType, changeProfilePic, changeCoverPhoto, setShowModal }) => {
  const [showModal, setModalVisibility] = useState(true);
 
  const hideModal = () => {
    setModalVisibility(false);
    setShowModal(false);
  }

  const takePicture = async() => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({ allowsEditing: true });
    if (pickerResult.cancelled === true) {
      console.log('cancel')
      return;
    }
    uploadPhoto(pickerResult);
    setModalVisibility(false);
  }

  selectFromCameraRoll = async() => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({ allowsEditing: true });
    if (pickerResult.cancelled === true) {
      console.log('cancel')
      return;
    }
    uploadPhoto(pickerResult);
    setModalVisibility(false);
  }

  const uploadPhoto = (imageDetails) => {
    const imageArray = imageDetails.uri.split('/');
    const imageName = imageArray[imageArray.length - 1];
    const file = {
      name: imageName,
      type: "image/jpeg",
      uri: imageDetails.uri
    };
    const options = {
      keyPrefix: "uploads/",
      bucket: key.Bucket,
      region: "us-west-1",
      accessKey: key.accessKeyId,
      secretKey: key.secretAccessKey,
      successActionStatus: 201      
    };
    RNS3.put(file, options)
      .then(response => {
        if (response.status !== 201)
          throw new Error("Failed to upload image to S3");
        const imageLocationS3 = response.body.postResponse.location;
        updateDatabase(imageLocationS3);
        if (photoType === 'profile') {
          changeProfilePic(imageLocationS3);
        }
        if (photoType === 'cover') {
          changeCoverPhoto(imageLocationS3);
        }
        setShowModal(false);
      });
  }

  const updateDatabase = (uri) => {
    axios
    .put('http://192.168.1.14:8070/upload', { photoType, uri })
    .then(() => console.log('picture updated'))
    .catch(err => console.error(err));
  }

  return (
    <View style={styles.editPhotoContainer}>
      <Modal isVisible={showModal} onBackdropPress={() => hideModal()}>
        <View style={styles.editPhotoBox}>
          <TouchableOpacity style={styles.selection} onPress={selectFromCameraRoll}>
            <PhotoIcon name='photo' size={25} color='black' />
            <Text style={{fontSize: 18}}>&nbsp;
              Camera Roll
            </Text>
          </TouchableOpacity>
            <View style={styles.line}/>
          <TouchableOpacity style={styles.selection} onPress={takePicture}>
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
    width: '100%',
  }
})

export default EditPhoto;