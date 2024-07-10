import { Button, Heading, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import Context from '../../context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex
} from '@chakra-ui/react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(Context)
    console.log('carrito', cart)
    if (cart.length === 0) {
        return (
            <Flex direction={'column'} justify={'center'} align={'center'}>
                <Heading color="white">Todavía no agregaste productos al carrito</Heading>
                <Link to='/'>
                    <Text color="white">Ver productos</Text>
                </Link>
            </Flex>
        )
    } else {
        return (
            <TableContainer>
                <Table variant='striped' bg="black" border="1px solid green">
                    <Thead>
                        <Tr>
                            <Th color="green" borderColor="green">Nombre</Th>
                            <Th color="green" borderColor="green">Cantidad</Th>
                            <Th color="green" borderColor="green">Precio</Th>
                            <Th color="green" borderColor="green">Subtotal</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {cart.map((prod) => (
                            <Tr key={prod.id}>
                                <Td color="green" borderColor="green">{prod.nombre}</Td>
                                <Td color="green" borderColor="green">{prod.quantity}</Td>
                                <Td color="green" borderColor="green">{prod.precio}</Td>
                                <Td color="green" borderColor="green">{prod.precio * prod.quantity}</Td>
                                <Td>
                                    <Button onClick={() => removeItem(prod.id)}>
                                        <RiDeleteBin5Line />
                                    </Button>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Th>
                                <Button
                                    onClick={() => clearCart()}
                                    border="1px solid green"
                                    color="green"
                                    bg="black"
                                >
                                    Vaciar carrito
                                </Button>
                            </Th>
                            <Th>
                                <Heading color="white">{getTotal()}</Heading>
                            </Th>
                            <Th>
                                <Link to='/Checkout'>
                                    <Text color="white">Finalizar compra</Text>
                                </Link>
                            </Th>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        )
    }
}

export default Cart
