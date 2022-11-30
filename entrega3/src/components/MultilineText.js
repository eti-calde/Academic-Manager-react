import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function MultilinText(props) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <TextField
          id="outlined-multiline-flexible"
          label={props.content}
          multiline
          maxRows={4}
          defaultValue={props.default}
          value={value}
          onChange={handleChange}
          color="secondary"
        />
    </>
  );
}



