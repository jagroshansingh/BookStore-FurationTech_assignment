import { Button, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CSS/Error404.module.css'

export const Error404 = () => {
    const navigate=useNavigate()
  return (
    <div className={styles.error}>
        <VStack>
        <Heading>Error 404</Heading>
        <Heading>Page Not Found</Heading>
        <Button onClick={()=>navigate('/')}>Home</Button>
        </VStack>
    </div>
  )
}
