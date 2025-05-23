import React, { useState } from 'react';
import Form from './Form';
import DataTable from './DataTable';
import Container from '@mui/material/Container';

function App() {
  const [data, setData] = useState([]);

  const addData = (newEntry) => {
    setData(prev => [...prev, newEntry]);
  };

  const deleteRow = (index) => {
    setData(prev => prev.filter((_, i) => i !== index));
  };

  const reorderData = (updated) => {
    setData(updated);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Form onSubmit={addData} />
      <DataTable data={data} onDelete={deleteRow} onDragEnd={reorderData} />
    </Container>
  );
}

export default App;
