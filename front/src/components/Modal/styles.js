// styles.js
import styled from 'styled-components';

// Estilizando o Modal padrão do react-modal
export const CustomModalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  },
  content: {
    color: 'white',
    backgroundColor: 'rgb(48,44,44)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '90%', // Usando 90% da largura da tela
    maxHeight: '90%', // Usando 90% da altura da tela
    width: 'auto', // Largura automática para se ajustar ao conteúdo
    height: 'auto', // Altura automática para se ajustar ao conteúdo
    overflow: 'auto', // Adicionando overflow automático
    padding: '20px',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.9)'

  }
};

// Estilizando o ModalContainer
export const ModalContainer = styled.div`
  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;

    div {
      margin-bottom: 15px;

      label {
        font-weight: bold;
        margin-bottom: 5px;
      }

      input,
      select {
        padding: 8px;
        border-radius: 4px;
        border: 1px solid #ccc;
        width: 100%;
      }
    }

    button {
      padding: 10px 15px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;



export default CustomModalStyle;
