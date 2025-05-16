import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import profileImage from '../../images/profile_sample.png'

// const PROFILE_IMAGE_LINK = '../../images/profile_sample.png'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
  background-color: white;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={profileImage} alt="Profile Image" />
}

export default ProfileImage
