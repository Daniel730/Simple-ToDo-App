import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ButtonPrimary, Input } from '../../../components/global';

export default function AddItem() {
  const [item, setItem] = useState('');
  const dispatch = useDispatch();

  function addItem() {
    setItem('');
    return item !== '' ? dispatch({ type: 'ADD_ITEM', text: item }) : false;
  }

  return (
    <>
      <Input
        type="text"
        onChange={(e) => setItem(e.target.value)}
        value={item}
        placeholder="Please inform a Todo"
      />
      <ButtonPrimary onClick={addItem}>Add Todo</ButtonPrimary>
    </>
  );
}
