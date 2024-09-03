import { Button, Card } from 'antd';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grey_2};
  transition: background-color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_4};
  }

  .ant-card-body {
    padding: 10px;
    flex-grow: 1;
  }
  .card-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const CardCover = styled.div`
  padding: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const EditButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green_6};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-right: 3px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.green_7} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red_6};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  margin-left: 3px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.red_7} !important;
    color: ${({ theme }) => theme.colors.white} !important;
  }
`;
