import React, {createContext, useState} from 'react'
import { Flex } from '@chakra-ui/react';
import Form from './components/Form';
import List from './components/List';

export const AppContext = createContext(null)

function App() {
  const [input, setInput] = useState({
    firstname: "",
    lastname: ""
})
  const [people, setPeople] = useState([])
  return (
  <AppContext.Provider value={{input, setInput, people, setPeople}}>
        <Flex direction="row" textAlign="center" justify="center">
            <Form/>
            <List/>
        </Flex>
  </AppContext.Provider>
  
  );
}

export default App;
