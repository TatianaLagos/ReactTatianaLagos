// src/components/ItemDetailContainer.js

import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Flex, Spinner } from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';  // Asegúrate de que la ruta sea correcta

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const queryRef = doc(db, 'productos', productId);
        const response = await getDoc(queryRef);
        
        if (response.exists()) {
          const newItem = {
            ...response.data(),
            id: response.id
          };
          setProducto(newItem);
        } else {
          console.log('No such document!');
          navigate('/*'); // Navegar a una página de error si el documento no existe
        }
      } catch (error) {
        console.error('Error fetching document: ', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [productId, navigate]);

  return (
    <>
      {loading ? 
        <Flex justify={'center'} align={'center'} h={'90vh'}>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#243F4D'
            size='xl'
          />
        </Flex>
        : 
        <Flex justify={'center'} align={'center'} h={'70vh'}>
          {producto && <ItemDetail {...producto} />}
        </Flex>
      }
    </>
  );
};

export default ItemDetailContainer;




