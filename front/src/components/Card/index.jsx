/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { FaTrash } from 'react-icons/fa';
import BoardContext from '../Board/context';
import { Container, Label, TrashIcon } from './styles';
import { deleteTask } from '../../services/api';
import { api } from "../../services/axios";

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  
    const handleClick = async (_id) => {
        await deleteTask(api,_id);
        window.location.reload();
    };


  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      const targetSize = ref.current.getBoundingClientRect();
      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      const draggedOffset = monitor.getClientOffset();
      const draggedTop = draggedOffset.y - targetSize.top;

      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  })

  dragRef(dropRef(ref));



  return (
    <>
    <Container ref={ref} isDragging={isDragging}>
      <header>
      <h4>{data.title}</h4>
      <div><TrashIcon ><FaTrash onClick={() => handleClick(data._id)}/></TrashIcon></div>
      {<Label key={data._id}/>}
      </header>
      <p>{data.description}</p>
    </Container>
    </>);
  
}
