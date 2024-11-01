import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

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

interface Data {
  organization: string;
  username: string;
  email: string;
  phone: string;
  date: string;
  status: string;
}

function createData(
  organization: string,
  username: string,
  email: string,
  phone: string,
  date: string,
  status: string,
): Data {
//   const density = email / phone;
  return { organization, username, email, phone, date, status };
}

const rows = [
  createData('Lendsqr', 'Adedeji', "adedeji@lendsqr.com", "08078903721", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Irorun', 'Debby Ogana', "debby2@irorun.com", "08160780928", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendstar', 'Grace Effiom', "grace@lendstar.com", "07060780922", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendsqr', 'Tosin Dokunmu', "tosin@lendsqr.com", "07003309226", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendstar', 'Grace Effiom', "grace@lendstar.com", "07060780922", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendsqr', 'Tosin Dokunmu', "tosin@lendsqr.com", "07003309226", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendstar', 'Grace Effiom', "grace@lendstar.com", "07060780922", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Irorun', 'Tosin Dokunmu', "tosin@lendsqr.com", "07003309226", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendsqr', 'Grace Effiom', "grace@lendstar.com", "07060780922", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Irorun', 'Tosin Dokunmu', "tosin@lendsqr.com", "07003309226", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendsqr', 'Debby Ogana', "debby2@irorun.com", "08160780928", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendstar', 'Adedeji', "adedeji@lendsqr.com", "08078903721", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Irorun', 'Debby Ogana', "debby2@irorun.com", "08160780928", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendsqr', 'Tosin Dokunmu',"tosin@lendsqr.com", "07003309226", "May 15, 2020 10:00 AM" , "Inactive"),
  createData('Lendstar', 'Grace Effiom',"grace@lendstar.com", "07060780922", "May 15, 2020 10:00 AM" , "Inactive"),
];

export function MaindashboardContent() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.username}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} className='tableContent'>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
