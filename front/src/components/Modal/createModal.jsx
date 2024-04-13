/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// CustomModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import { create } from '../../services/api';
import { api } from '../../services/axios';
import { ModalContainer,CustomModalStyle } from './styles'; // Importando o ModalContainer dos estilos

export const CustomModal = ({ isOpen, onRequestClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('A Fazer');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await create(api, { title: title, description: description, status: status });
    window.location.reload();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Adicionar Tarefa"
      style={CustomModalStyle}
    >
      <ModalContainer>
        <h2>Adicionar Tarefa</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Descrição:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="status">Status:</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="A Fazer">A Fazer</option>
              <option value="Em Progresso">Em Progresso</option>
              <option value="Concluído">Concluído</option>
            </select>
          </div>
          <button type="submit">Adicionar</button>
        </form>
      </ModalContainer>
    </Modal>
  );
};

export default CustomModal;
