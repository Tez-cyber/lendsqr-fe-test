import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import fetchUsers, { User } from '../utils/users';

interface Column {
  id: 'organization' | 'username' | 'email' | 'phone' | 'date' | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'organization', label: 'Organization', minWidth: 100 },
  { id: 'username', label: 'Username', minWidth: 100 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 150
  },
  {
    id: 'phone',
    label: 'Phone Number',
    minWidth: 100
  },
  {
    id: 'date',
    label: 'Date joined',
    minWidth: 150
  },
  {
    id: 'status',
    label: 'Status'
  }
];


export function MaindashboardContent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [users, setUsers] = React.useState<User[]>([])

  React.useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
      const stringifiedData = JSON.stringify(data);
      localStorage.setItem('Users', stringifiedData);

    })
  }, [])

  const handleChangePage = (event:unknown, newPage: number) => {
    console.log(event)
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }} className='dashTable'>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className='tableHead'
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => {
                return (
                  <TableRow key={user.fullname}>
                    <TableCell className='tableContent'>{user.organization}</TableCell>
                    <TableCell className='tableContent'>{user.fullname}</TableCell>
                    <TableCell className='tableContent'>{user.email}</TableCell>
                    <TableCell className='tableContent'>{user.mobile}</TableCell>
                    <TableCell className='tableContent'>May 15, 2020 10:00 AM</TableCell>
                    <TableCell className='tableContent'>{user.status}</TableCell>

                    {/* Add more cells for other properties */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
