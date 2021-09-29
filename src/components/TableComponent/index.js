import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ButtonDanger,
  ButtonSecondary,
  Table,
  Td,
  Tr,
} from '../../components/global';
import TableHeader from './TableHeader';

export default function TableComponent(props) {
  const list = useSelector((state) => state);
  const dispatch = useDispatch();

  function toggleItem(id) {
    dispatch({ type: 'TOGGLE_ITEM', id });
  }

  function deleteItem(id) {
    dispatch({ type: 'DELETE_ITEM', id });
  }

  return (
    <Table>
      <thead>
        <TableHeader items={props.thead} />
      </thead>
      <tbody>
        {list.map((item) => (
          <Tr key={item.id}>
            <Td
              style={
                item.done
                  ? { textDecoration: 'line-Through' }
                  : { textDecoration: 'none' }
              }
            >
              {item.text}
            </Td>
            <Td>
              <ButtonSecondary
                type="button"
                onClick={() => toggleItem(item.id)}
              >
                Toggle
              </ButtonSecondary>
              <ButtonDanger type="button" onClick={() => deleteItem(item.id)}>
                Remove
              </ButtonDanger>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
