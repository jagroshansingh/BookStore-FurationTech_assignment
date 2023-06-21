import { Icon, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {BsCart3} from 'react-icons/bs'
import styles from './CSS/Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
        <Image src='https://furation.tech/ftlogo2.svg'/>
        <Input width={'500px'} placeholder='SearchBar'/>
        <Icon as={BsCart3}/>
    </div>
  )
}
