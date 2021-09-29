import React from 'react';
import { Content } from '../../components/global';
import TableComponent from '../../components/TableComponent';

export default function List() {
  return (
    <Content>
      <TableComponent thead={['Todo Item', 'Controls']} />
    </Content>
  );
}
