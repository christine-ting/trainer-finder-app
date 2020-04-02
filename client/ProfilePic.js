import React, { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Platform } from '@unimodules/core';
import { RNS3 } from 'react-native-aws3';
import key from '../server/env/key';



const ProfilePic = ({ profile }) => {
  const [selectedImage, editImage] = useState(profile.image);
  const [imageDetails, editImageDetails] = useState(null);

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchCameraAsync({allowsEditing: true});
    if (pickerResult.cancelled === true) {
      return;
    }
    editImageDetails(pickerResult);
    editImage({ uri: pickerResult.uri });
  };

  const imageUpload = () => {
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
      });
  }

  const updateDatabase = (uri) => {
    axios
    .put('http://192.168.1.14:8070/upload', { uri })
    .then(() => console.log('profile picture updated'))
    .catch(err => console.error(err));
  }

  return (
    <View style={styles.profilePicContainer}>
      <View style={styles.profilePicBackground}>
        <Image source={selectedImage} style={styles.profilePic}/>
      </View>
      {/* <Button title="edit" onPress={openImagePickerAsync}/>
      <Button title="upload" onPress={imageUpload}/> */}
    </View>
  )
}

// class ProfilePic extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedImage: null,
//       image: props.profile.image,
//       editImg: false
//     };
//   }

//   editImage = () => {
//     this.setState({ editImg: true });
//   }

//   fileChangedHandler = (e) => {
//     this.setState({
//       selectedImage: e.target.files[0]
//     });
//   };

//   fileUploadHandler = () => {
//     const data = new FormData();
//     // If file selected
//     if ( this.state.selectedImage ) {
//       data.append('profileImage', this.state.selectedImage, this.state.selectedImage.name);
//       axios
//         .post('/upload', data, {
//           headers: {
//             'accept': 'application/json',
//             'Accept-Language': 'en-US,en;q=0.8',
//             'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
//           }
//         })
//         .then( ( response ) => {
//           if ( 200 === response.status ) {
//             // If file size is larger than expected.
//             if ( response.data.error ) {
//               if ( 'LIMIT_FILE_SIZE' === response.data.error.code ) {
//                 alert('Max size: 2MB');
//               } else {
//                 console.log( response.data );
//                 // If not the given file type
//                 alert( response.data.error);
//               }
//             } else {
//               // Success
//               let fileName = response.data;
//               console.log( 'fileName', fileName );
//               this.setState({ image: fileName.location, editImg: false })
//               alert('Image Uploaded');
//             }
//           }
//         })
//         .catch( ( error ) => {
//           // If another error
//           alert(error);
//         });
//     } else {
//       // if file not selected throw error
//       alert('Please upload file');
//     }
//   }

//   render() {
//     let { image, editImg } = this.state;
//     return (
//       <View className="ct_profile_pic">
//         <Image source={image} style={styles.profilePic}/>
//         {/* { !editImg ? (
//           <button className="ct_edit_btn" onClick={this.editImage}>change picture</button>
//         ) : (
//           <div>
//             <div className="ct_small_txt">Upload Size: Max 2MB </div>
//             <div className="ct_upload-btn-wrapper">
//               <button className="ct_upload_btn">choose a file</button>
//               <input type="file" onChange={this.fileChangedHandler}/>
//             </div>
//             <div>
//               <button className="ct_upload_btn" onClick={this.fileUploadHandler}>upload</button>
//             </div>
//           </div>
//         ) } */}
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  profilePicContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePicBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 165,
    width: 165,
    borderRadius: 700/ 6,
    backgroundColor: 'rgb(62,69,73)',
    borderColor: 'rgb(220,220,220)',
    borderWidth: 2,
    marginTop: -80
  },
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: 700/ 7
  }
});

export default ProfilePic;