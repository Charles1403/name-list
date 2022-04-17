import React, { useContext, useState } from 'react'
import {AppContext} from '../../App'
import { 
    Table,
    Thead,
    Tbody,
    Tr,
    TableContainer,
    TableCaption,
    Button,
} from '@chakra-ui/react'

function List() {
    const {people, setPeople} = useContext(AppContext)
    const [order, setOrder] = useState("ASC")

    const sorting = (col) => {
        if(order === "ASC"){
            const sorted = [...people].sort((a, b) => 
            a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            );
            setPeople(sorted)
        }
    };

    const column = [
        {heading: 'Lastname', value: 'lastname'},
        {heading: 'Firstname',  value: 'firstname'}
    ]
    const TableHeaditem = ({item}) =>  <th>{item.heading}</th>
    const TableRow = ({item}) => {
        return (
            <tr>
                {column.map((columnItem) => {
                    return (
                        <td>{item[`${columnItem.value}`]}</td>
                    )
                })}
            </tr>
        )
    }
       
  return (
    <TableContainer mx='auto' my='5rem' minHeight='100vh'>
    <Table variant='striped' colorScheme='teal'>
    <TableCaption>
        <Button type='button' variant='solid' colorScheme='teal' onClick={() => sorting("lastname")}>Order Alphabetically</Button>
    </TableCaption>
        <Thead>
        <Tr>
            {column.map((item) => <TableHeaditem item={item} />)}
        </Tr>
        </Thead>
        <Tbody>
            {people.map((item) => <TableRow item={item} column={column}/>)} 
        </Tbody>
        
    </Table>
   
    </TableContainer>
  )
}

export default List