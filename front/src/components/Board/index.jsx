/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import produce from 'immer';

import { list } from '../../services/api.ts';

import BoardContext from './context';

import List from '../List';

import { Container } from './styles';
import { api } from '../../services/axios';

export default function Board() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await list(api,'A Fazer');
        console.log(data)
        setLists(data);
      } catch (error) {
        console.error('Error loading lists:', error);
      }
    }

    fetchData();
  }, []); // Empty dependency array to run only once on component mount

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft => {
      const dragged = draft[fromList].cards[from];
      if (dragged.id) {
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      }
    }));
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => <List key={list.title} index={index} data={list} />)}
      </Container>
    </BoardContext.Provider>
  );
}
