import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, MenuItem, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  gender: yup.string().required('Gender is required'),
  salary: yup.number().typeError('Salary must be a number'),
  description: yup.string().max(100, 'Max 100 characters'),
});

function Form({ onSubmit }) {
  const { handleSubmit, control, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitHandler)} sx={{ mb: 4 }}>
      <Controller
        name="first_name"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField label="First Name" fullWidth margin="normal" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
        )}
      />
      <Controller
        name="last_name"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField label="Last Name" fullWidth margin="normal" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
        )}
      />
      <Controller
        name="gender"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField select label="Gender" fullWidth margin="normal" {...field} error={!!fieldState.error} helperText={fieldState.error?.message}>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
        )}
      />
      <Controller
        name="salary"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField type="number" label="Salary" fullWidth margin="normal" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
        )}
      />
      <Controller
        name="description"
        control={control}
        defaultValue=""
        render={({ field, fieldState }) => (
          <TextField label="Description" fullWidth multiline maxRows={4} margin="normal" {...field} error={!!fieldState.error} helperText={fieldState.error?.message} />
        )}
      />
      <Button type="submit" variant="contained">Submit</Button>
    </Box>
  );
}

export default Form;
