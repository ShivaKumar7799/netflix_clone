import React from 'react'
import HeaderWrapper from '../dumb/header/HeaderWrapper/HeaderWrapper'
import SignInButton from '../dumb/header/SignInButton/SignInButton'
import NavBar from '../dumb/header/NavBar/NavBar'
import Logo from '../dumb/header/Logo/Logo'
import FeatureWrapper from '../dumb/header/FeatureWrapper/FeatureWrapper'
import FeatureTitle from '../dumb/header/FeatureTitle/FeatureTitle'
import SubScribeWrapper from '../dumb/forms/subscribe/SubscribeWrapper/SubScribeWrapper'
import SubScribeEmail from '../dumb/forms/subscribe/SubscribeEmail/SubScribeEmail'
import SubscribeButton from '../dumb/forms/subscribe/subscibeButton/SubscribeButton'


function HeaderComponent() {
  return (
    <>
    <HeaderWrapper>
      <NavBar className = "navbar-home" >
        <Logo />
        <SignInButton />
      </NavBar>
      <FeatureWrapper className = "feature-wrapper-home" >
        <FeatureTitle className = "feature-tile-home">
          Unlimed movies, TV shows & more.
        </FeatureTitle>
      </FeatureWrapper>
      <SubScribeWrapper>
        <SubScribeEmail type = "email" />
        <SubscribeButton>
          Get Started
        </SubscribeButton>
      </SubScribeWrapper>
    </HeaderWrapper>
    
    </>
  )
}

export default HeaderComponent