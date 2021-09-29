import styled from 'styled-components';
import {
  PrimaryHover,
  Margin,
  Padding,
  Primary,
  Radius,
  Secondary,
  SecondaryHover,
  Danger,
  DangerHover,
} from './style';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  margin: 30px auto;
`;

export const Header = styled.div`
  text-align: center;
  width: 100%;
  height: auto;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 85% 85% / 30%;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 0;
  color: #fff;
  text-shadow: 1px 1px 1px #333;
  background-image: linear-gradient(135deg, ${Primary} 10%, ${Secondary} 100%);
`;

export const H1 = styled.h1`
  margin: ${Margin};
`;

export const H3 = styled.h3`
  margin: ${Margin};
`;

export const Input = styled.input`
  width: 50%;
  padding: ${Padding};
  margin: ${Margin};
  border: 1px solid #ccc;
  border-radius: ${Radius};
  box-sizing: border-box;
`;

export const ButtonPrimary = styled.button`
  background-color: ${Primary};
  color: white;
  padding: ${Padding};
  margin: ${Margin};
  border: none;
  border-radius: ${Radius};
  cursor: pointer;

  :hover {
    background-color: ${PrimaryHover};
  }
`;

export const ButtonSecondary = styled.button`
  background-color: ${Secondary};
  color: white;
  padding: ${Padding};
  margin: ${Margin};
  border: none;
  border-radius: ${Radius};
  cursor: pointer;

  :hover {
    background-color: ${SecondaryHover};
  }
`;

export const ButtonDanger = styled.button`
  background-color: ${Danger};
  color: white;
  padding: ${Padding};
  margin: ${Margin};
  border: none;
  border-radius: ${Radius};
  cursor: pointer;

  :hover {
    background-color: ${DangerHover};
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const Th = styled.th`
  width: 70%;
  overflow: hidden;
  text-align: left;
  padding: 8px;
  background-color: ${Primary};
  color: white;
  :last-child {
  }
`;
export const Td = styled.td`
  margin: ${Margin};
  text-align: left;
  padding: 8px;
`;

export const Tr = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
