import React from 'react';
import { Th, Tr } from '../global';

export default function TableHeader(props) {
  const { items } = props;
  return (
    <Tr>
      {items.map((item) => (
        <Th key={item}>{item}</Th>
      ))}
    </Tr>
  );
}
