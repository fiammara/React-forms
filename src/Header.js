import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function HeaderAppBar() {
  
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Link style={{textDecoration: 'none'}} to="/"> <Button>Home</Button></Link>
          <Link style={{textDecoration: 'none'}} to="/selectOne"> <Button>Select one</Button></Link>
          <Link style={{textDecoration: 'none'}} to="/selectMore"> <Button>Select more</Button></Link>        
        </Toolbar>
      </AppBar>
    </div>
  );
}