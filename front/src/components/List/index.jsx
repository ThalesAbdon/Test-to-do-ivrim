/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';
import Fake from '../Card/fake';
import { Container } from './styles';

// Importe o componente de modal aqui
import {CustomModal} from '../Modal/createModal';

export default function List({ data, index: listIndex }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <>
            <button type="button" onClick={openModal}>
              <MdAdd size={24} color="#FFF" />
            </button>
            <CustomModal isOpen={isModalOpen} onRequestClose={closeModal} />
          </>
        )}
      </header>

      <ul style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}>
        {data.cards.map((card, index) => ( 
          <Card 
            key={card._id} 
            listIndex={listIndex}
            index={index} 
            data={card}
          />
        ))}
        <Fake index={data.cards.length} listIndex={listIndex}/>
      </ul>
    </Container>
  );
}
