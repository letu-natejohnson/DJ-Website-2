import React, { Component } from 'react';

class Database extends Component {

    Component() {

    }

    connect = () => {

    }
    
    
    connection = mysql.createConnection({
        // disable FOUND_ROWS flag, enable IGNORE_SPACE flag
        flags: '-FOUND_ROWS,IGNORE_SPACE'
      });

}