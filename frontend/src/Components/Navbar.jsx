import { Button, Icon, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {BsCart3} from 'react-icons/bs'
import styles from './CSS/Navbar.module.css'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div className={styles.navbarContainer}>
        <Image onClick={()=>navigate('/')} src='https://furation.tech/ftlogo2.svg'/>
        <Input width={'500px'} placeholder='SearchBar'/>
        <div>
        <Icon as={BsCart3} onClick={()=>navigate('/shoppingcart')}/>
        <Button onClick={()=>navigate('/auth')}>Sign-up/Sign-in</Button>
        </div>
    </div>
  )
}
