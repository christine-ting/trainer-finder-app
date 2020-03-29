import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';

const ProfilePic = ({ profile }) => {
  return (
    <View>
      <Image source={profile.image} style={styles.profilePic}/>
    </View>
  )
}

// class ProfilePic extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedFile: null,
//       image: props.profile.image,
//       editImg: false
//     };
//   }

//   editImage = () => {
//     this.setState({ editImg: true });
//   }

//   fileChangedHandler = (e) => {
//     this.setState({
//       selectedFile: e.target.files[0]
//     });
//   };

//   fileUploadHandler = () => {
//     const data = new FormData();
//     // If file selected
//     if ( this.state.selectedFile ) {
//       data.append('profileImage', this.state.selectedFile, this.state.selectedFile.name);
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
  profilePic: {
    height: 150,
    width: 150,
    borderRadius: 700/ 7,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: -50
  }
});

export default ProfilePic;