import React, { useEffect, useState } from 'react'
import { useGetUserDataQuery } from '../../../hooks/graphql/queries/useGetProfileDataQuery'
import { BsGithub, BsWindowFullscreen  } from "react-icons/bs";

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import useAppContext from '../../../hooks/context/useAppContext';

import './desktop-profile.css'
import './android.-profile.css'
import './iphone-profile.css'

export default function Profile() {
  const {data, error, loading} = useGetUserDataQuery(); 
  const {typeDevice} = useAppContext()
  const [userProfile, setUserProfile] = useState('');
  useEffect(()=>{
    if (data != undefined && !loading) {
      setUserProfile(data.profile)
    }
  },[loading, data])

  loading ? (
    <SkeletonTheme  baseColor='#202020'>
      <Skeleton />
    </SkeletonTheme>
  ) : <></>
  return (
    <div className={`${typeDevice}-profile`}>
      <div className={`${typeDevice}-profile__content`}>
        <img 
          className={`${typeDevice}-profile__img`}
          src="https://avatars.githubusercontent.com/u/104279834?v=4" 
        />
        <p className={`${typeDevice}-profile__name ${typeDevice}-bold-S-display`}>
          {userProfile.fullName ||
            <Skeleton className={`${typeDevice}-profile__skeleton`} baseColor="#2C2F33" width={200}/>  
          }
        </p>
        <p className={`${typeDevice}-profile__email`}> 
          {userProfile.email ||
            <Skeleton className={`${typeDevice}-profile__skeleton`} baseColor="#2C2F33" width={200}/>
          }
        </p>  
        <p className={` ${typeDevice}-profile__type`}>
          {userProfile.type ||  
            <Skeleton className={`${typeDevice}-profile__skeleton`} baseColor="#FFFFFF" width={200}/>
          }
        </p>
    </div>
    <div className={`${typeDevice}-profile__links-container`}>
      <a className={`${typeDevice}-profile__links`} href='https://github.com/LuisSilvaB' target='_blanck'>
        <p className={`${typeDevice}-profile__links-title`}>Github</p>
        <BsGithub className={`${typeDevice}-profile__links-icon`}/>
      </a>

      <a className={`${typeDevice}-profile__links`} href='https://portafolio-kappa-mocha.vercel.app/' target='_blanck'>
        <p className={`${typeDevice}-profile__links-title`}>Portfolio</p>
        <BsWindowFullscreen className={`${typeDevice}-profile__links-icon`}/>
      </a>
    </div>

</div>
  )
}
