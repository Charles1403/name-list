import { Box, Button, FormControl, Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'
import React, { useContext } from 'react'
import {AppContext} from '../../App'

function Form() {
    const { input, setInput, people, setPeople } = useContext(AppContext)
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }
    const handleClick = (e) => {
        e.preventDefault()
        setPeople([
            ...people,
            {
                firstname: input.firstname,
                lastname: input.lastname
            }
        ])
        console.log(people)
        setInput({
            firstname: "",
            lastname: ""
        })
    }
  return (
   <Box w="30%" mx="auto" my="6rem" minHeight='100vh'>
       <form action="submit">
           <Stack spacing={3}>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<InfoIcon/>}/>
                        <Input 
                        placeholder='Firstname'
                        name='firstname'
                        value={input.firstname}
                        onChange={handleChange}
                        />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <InputGroup>
                        <InputLeftElement children={<InfoIcon/>}/>
                        <Input 
                        placeholder='Lastname'
                        name='lastname'
                        value={input.lastname}
                        onChange={handleChange}
                        />
                    </InputGroup>
                </FormControl>
                <Button type='button' variant='solid' colorScheme='teal' onClick={handleClick}>Display</Button>
           </Stack>
       </form>
   </Box>
  )
}

export default Form