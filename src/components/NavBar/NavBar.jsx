import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Button, Flex, Image, Link as ChakraLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Importación de Link agregada
import logo from '../../Imgenes/logo.png'; // Ajusta la ruta según sea necesario

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex as="nav" align="center" justify="space-between" bg="black" color="white" p="4">
      {/* Botón de Menú */}
      <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MenuButton
          as={Button}
          fontWeight="bold"
          bg="black"
          color="white"
          border="1px solid white"
          px="4"
          py="2"
          borderRadius="md"
          onClick={() => setIsOpen(!isOpen)}
          _focus={{ outline: 'none' }}
        >
          Menú
        </MenuButton>
        <MenuList
          bg="black" // Ajusta el color de fondo del menú desplegable
          color="black" 
          border="1px solid white"
          borderRadius="md"
          transformOrigin="top right"
          transform={isOpen ? 'scale(1)' : 'scale(0)'}
          transition="transform 0.3s ease-in-out"
          position="absolute"
          zIndex="1"
        >
          <MenuItem>
            <Link to="/categorias/Blusas" color="black">
            Blusas
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Accesorios" color="black">
            Accesorios
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Chaquetas" color="black">
            Chaquetas
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Tennis" color="black">
            Tennis
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Vestidos" color="black">
            Vestidos
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/categorias/Jeans" color="black">
            Jeans
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      {/* Logo en el centro */}
      <Flex justify="center" width={'30%'}> {/* Centra el contenido horizontalmente */}
        <ChakraLink as={Link} to='/'>
          <Image src={logo} alt="Logo" w="100px" h="auto" />
        </ChakraLink>
      </Flex>

      {/* Widget del Carrito */}
      <CartWidget />
    </Flex>
  );
};

export default NavBar;
