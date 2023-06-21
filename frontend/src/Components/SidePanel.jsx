import { Checkbox, Heading } from '@chakra-ui/react'
import React from 'react'
import styles from './CSS/SidePanel.module.css'

export const SidePanel = () => {
  const handleGenre=(e)=>{
    console.log(e.target.checked)
    console.log(e.target.value)
  }

  const handleEdition=(e)=>{
    console.log(e.target.value)
  }
  return (
    <div>
      <Heading>Filter</Heading>
      <div className={styles.filterContainer}>
        <div>
        <Heading>Genre</Heading>
        <Checkbox value={'Science'} onChange={handleGenre}>Science</Checkbox>
        <Checkbox value={'Fiction'} onChange={handleGenre}>Fiction</Checkbox>
        <Checkbox value={'History'} onChange={handleGenre}>History</Checkbox>
        <Checkbox value={'Tech'} onChange={handleGenre}>Tech</Checkbox>
        <Checkbox value={'Business'} onChange={handleGenre}>Business</Checkbox>
        </div>
        <div>
        <Heading>Edition</Heading>
        <Checkbox value={'2021'} onChange={handleEdition}>2021</Checkbox>
        <Checkbox value={'2022'} onChange={handleEdition}>2022</Checkbox>
        <Checkbox value={'2023'} onChange={handleEdition}>2023</Checkbox>
        </div>
      </div>
    </div>
  )
}
