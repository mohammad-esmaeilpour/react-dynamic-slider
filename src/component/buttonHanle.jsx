import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import { MyCounter } from '../App';

const ButtonHanle = () => {
  const { index, setIndex } = useContext(MyCounter);

  return (
    <div className="btn-list">
      <Button
        className="mx-1"
        variant="contained"
        onClick={() => {
          setIndex(index - 1);
        }}
        color="primary"
      >
        <ChevronLeft />
      </Button>
      <Button
        className="mx-1"
        variant="contained"
        onClick={() => {
          setIndex(index + 1);
        }}
        color="primary"
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default ButtonHanle;
