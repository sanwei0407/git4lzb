import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import * as Mock from 'mockjs';

export default function DataTable() {
  const history = useHistory();
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: '用户名', width: 130 },
    {
      field: 'age',
      headerName: '年龄',
      type: 'number',
      width: 90,
    },
    {
      field: '操作',
      width: 160,
      renderCell: (rows) => {
        return (
          <Button
            onClick={() => {
              history.push('/edit?id=' + rows.id);
            }}
          >
            编辑
          </Button>
        );
      },
    },
  ];

  const _mockData = Mock.mock({
    'list|20': [{ id: '@increment', name: '@cname', age: '@integer(15,40)' }],
  });

  console.log('mock', _mockData);

  const rows = _mockData.list;
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
