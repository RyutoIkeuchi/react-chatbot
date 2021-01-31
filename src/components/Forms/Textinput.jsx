import React from 'react';
import TextField from '@material-ui/core/TextField';

const Textinput = (props) => {
  return (
    <TextField
      fullWidth={true}
      label={props.label}
      margin={"dense"}
      rows={props.rows}
      multiline={props.multiline}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  )
};

export default Textinput