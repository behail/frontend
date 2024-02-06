import styled from "@emotion/styled";
import { color } from "styled-system";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  paddingleft: 10px;
  padding-right: 10px;
  border-collapse: collapse;
`;
export const THead = styled.thead``;
export const TBody = styled.tbody``;
export const Th = styled.th`
  text-align: left;
  padding: 8px;
  border-bottom: 2px solid #ccc;
`;
export const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #eee;
`;
export const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Button = styled.button`
  ${color}
  padding: 8px 16px;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 30px;
  background: none;
  &:hover {
    background: #000;
    color: #fff;
    cursor: pointer;
  }
`;

export const P = styled.p`
  font-weight: 100;
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const Text = styled.text`
  ${color}
  font-size: 28px;
  font-weight: 800;
  text-transform: uppercase;
  padding-top: 20px;
`;

export const Spacer = styled.div`
  height: 20px;
  width: 100%;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: block;
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const StyledListItem = styled.li`
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #f4f4f4;
  display: flex;
  justifycontent: space-between;
  padding: 12px;
  &:hover {
    background-color: #e0e0e0;
  }
`;
