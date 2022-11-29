import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons(props) {
  return (
    <>
      <Button variant="contained" color='secondary'>{props.content}</Button>
    </>
  );
}