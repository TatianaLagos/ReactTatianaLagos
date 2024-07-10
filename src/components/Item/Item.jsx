import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, ButtonGroup, Button, Divider, Heading, Center, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, precio, stock, img, id, texto}) => {
  return (
    <Card maxW='sm' border='3px' borderColor='#243F4D' boxShadow='2xl'>
      <CardBody>
        <Image
          src={img}
          alt={nombre}
          borderRadius='md'
          boxSize='100%'
          objectFit='cover' 
          w={'300px'}
          h='300px' 
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{nombre}</Heading>
          <Heading size={'sm'}>{texto}</Heading>
          <Text color='black' fontSize='2xl'>
            ${precio}
          </Text>
          <Text color='black' fontSize='2xl'>
            stock: {stock}
          </Text>
          </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent='center'>
        <Button 
          variant='solid' 
          bg='black' 
          color='white'
          _hover={{ bg: 'green', color: 'white' }}
          as={Link} to={`/producto/${id}`}
          width='100%' // Añadido para ocupar el ancho completo
          >
          Ver detalle
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Item





