import React from 'react';
import AddItem from '../../pages/List/components/AddItem';
import { H1, H3, Header, Overlay } from '../global';
export default function HeaderComponent() {
  return (
    <Header>
      <Overlay>
        <H1>Simple ToDo App</H1>
        <H3>The Simplest the better!</H3>
        <AddItem />
      </Overlay>
    </Header>
  );
}
