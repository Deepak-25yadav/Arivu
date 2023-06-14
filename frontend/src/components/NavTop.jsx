import { Box, Flex, Input, Button } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"
import { IoSearchCircleOutline } from 'react-icons/io5'
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { TbCircleLetterM } from "react-icons/tb";


const NavTop = () => {
  return (
    <Flex h='10vh' justifyContent={'space-between'}  w={'wrap'}  >
        <Flex w={'60%'}  >

        <Link >
          <IoSearchCircleOutline style={{fontSize:'7vh', color:'gray', marginTop:"3px"}} /> 
        </Link>
        <Box w={'50%'}>
      <Input placeholder='Search Anything' border={'none'}  h={'8vh'} w='100%' />
        </Box>
        </Flex>
    <Flex  gap={20} flexDirection={['column','row']}>
      <Link  to="/"> < AiOutlineQuestionCircle style={{fontSize:'4vh', color:'black', marginTop:"10px"}} /> </Link>
      <Link> < AiOutlineBell style={{fontSize:'4vh', color:'black', marginTop:"10px"}}/> </Link>
      <Button border='none' bg='white' cursor='pointer'> < TbCircleLetterM style={{fontSize:'4vh', color:'red',marginBottom:'15px'}}/> </Button>
    </Flex>

    </Flex>
  )
}

export default NavTop
