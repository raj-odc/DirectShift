import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';



import { getReferrals, invite } from "../utils/backend-api";

import { useNavigate } from 'react-router-dom';


const Products = () => {
    let navigate = useNavigate();

    const [referrers, setReferrers] = useState([]);

    const [email, setEmail] = useState('')

    useEffect(() => {
        const getReferrers = async () => {
            try {
                const apiData = await getReferrals();
                setReferrers(apiData.data)
            }
            catch(err) {
                alert(err);
                console.log(err);
            }
            
          }
        getReferrers();
      }, [])

      const inviteFriend = async() => {
        const inviteFrd = await invite({email: email});
        console.log("inviteFrd");
      }
      
      return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" sx={{mt: 5}}>
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: { md: 'row', lg: 'row', xl: 'row', xs: 'column', sm: 'row' }, justifyContent: 'center', mb: 5 }}>
                    <TextField sx={{mr: 2, minWidth: 250, mb: {md: 0, lg: 0, xl: 0, xs: 3, sm: 0 }}} id="filled-basic" label="Email" variant="filled" onChange={(e) => setEmail(e.target.value)} />
                    <Button variant="contained" onClick={inviteFriend}>Invite Your Friend</Button>
                </Box>
                <Typography variant="h4" gutterBottom>
                    List of referrers
                </Typography>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow sx={{color: '#FFF', backgroundColor: '#1976d2'}}>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {referrers.map((user) => (
                            <TableRow
                            key={user.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell align="right">{user.email}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </React.Fragment>

      );
};

export default Products;