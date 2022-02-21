import React from 'react';
import styled from 'styled-components';

const Button = styled.button.attrs({ type: 'button' })`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #eee;
  }
`;

export function EditButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="22px"
        height="22px"
        fill="#5a5a65"
      >
        <path
          fill="#5a5a65"
          d="M53.7,20.523,28.455,50.815a1,1,0,0,1-1.438.1L10.523,36.073a1,1,0,0,1-.062-1.426l5.379-5.758a1,1,0,0,1,1.388-.071l9.194,8.018L47.166,13.26a1,1,0,0,1,1.516.017L53.7,19.239A1,1,0,0,1,53.7,20.523Z"
          data-name="Check Mark"
        />
      </svg>
    </Button>
  );
}

export function DeleteButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Layer_1"
        x="0"
        y="0"
        width="20px"
        height="20px"
        fill="#5a5a65"
        version="1.1"
        viewBox="0 0 29 29"
        xmlSpace="preserve"
      >
        <path
          fill="#414141"
          d="M19.795 27H9.205a2.99 2.99 0 0 1-2.985-2.702L4.505 7.099A.998.998 0 0 1 5.5 6h18a1 1 0 0 1 .995 1.099L22.78 24.297A2.991 2.991 0 0 1 19.795 27zM6.604 8L8.21 24.099a.998.998 0 0 0 .995.901h10.59a.998.998 0 0 0 .995-.901L22.396 8H6.604z"
        />
        <path d="M26 8H3a1 1 0 110-2h23a1 1 0 110 2zM14.5 23a1 1 0 01-1-1V11a1 1 0 112 0v11a1 1 0 01-1 1zM10.999 23a1 1 0 01-.995-.91l-1-11a1 1 0 01.905-1.086 1.003 1.003 0 011.087.906l1 11a1 1 0 01-.997 1.09zM18.001 23a1 1 0 01-.997-1.09l1-11c.051-.55.531-.946 1.087-.906a1 1 0 01.905 1.086l-1 11a1 1 0 01-.995.91z" />
        <path d="M19 8h-9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1zm-8-2h7V4h-7v2z" />
      </svg>
    </Button>
  );
}

export function CancelButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="26px"
        height="26px"
      >
        <path
          fill="#414141"
          d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
        />
      </svg>
    </Button>
  );
}
