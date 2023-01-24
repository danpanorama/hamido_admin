import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function MenuTable(props) {
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">שם מנה</TableCell>
            <TableCell align="right"> צורת הגשה</TableCell>

            <TableCell align="right">מוצג בתפריט</TableCell>
            <TableCell align="right">תמונה</TableCell>
            <TableCell align="right">מחיר</TableCell>
            <TableCell align="right">כמה סלטים</TableCell>

            <TableCell align="right">מחק</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.list.map((row) => (
            <TableRow
              key={row.mid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
             <p className="p">   {row.productname}</p>
              </TableCell>

              <TableCell align="right" component="th" scope="row">
             <p className="p">   {row.servingway}</p>
              </TableCell>
              <TableCell align="right"><p className="p">{row.mactive == 1 ? 'כן':'לא'}</p> </TableCell>

              <TableCell align="right"><p className="p">{row.mimg}</p></TableCell>
              <TableCell align="right"><p className="p">{row.mprice} שח</p></TableCell>
              <TableCell align="right"><p className="p">{row.sumextra}</p></TableCell>


              <TableCell align="right"><button onClick={()=>{props.deleteItem(row)}} >מחק</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
