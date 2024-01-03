import Baselayout from '@/components/Baselayout/Baselayout'
import Profile from '@/components/Profile/Profile'
import React, { useState } from 'react'

export default function Index() {
  const [profilePhoto, setProfilePhoto] = useState('images/profile.png');
  const [coverPhoto, setCoverPhoto] = useState('images/cover.png');

  const handleProfilePhotoUpload= (event) => {
    const selectedImage = event.target.files && event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleCoverPhotoUpload = (event) => {
    const selectedImage = event.target.files && event.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setCoverPhoto(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    }
  }

  return (
    <Baselayout>
      <Profile profilePhoto={profilePhoto} coverPhoto={coverPhoto} handleProfilePhotoUpload={handleProfilePhotoUpload}  handleCoverPhotoUpload={handleCoverPhotoUpload}
      username={'John Doe'}
      designation={'Web Developer'}
      email={"Faiza@gmail.com"}
      contactNumber={"+923123456789"}
      nationality={"Pakistani"}
      />
    </Baselayout>
  );
}
