import React, { useState } from 'react';
import { Grid, Container } from '@material-ui/core';
import Add from './components/Add';
import List from './components/List';
import { SaveButton, DeletedButton } from './components/Buttons';
import { getStorage } from './components/Storage';

const App = () => {
    const [storage, setStorage] = useState(getStorage());

    return (
        <div>
            <Container maxWidth="sm">
                <Grid container spacing={1} align="center">
                    <h1>Your Notes</h1>
                    <Grid xs={12} item={true}>
                        <Add storage={storage} setStorage={setStorage} />
                    </Grid>
                    <Grid xs={12} item={true}>
                        <List storage={storage} setStorage={setStorage} />
                    </Grid>
                    <Grid item xs={6} >
                        <SaveButton storage={storage} />
                    </Grid>
                    <Grid item xs={6}>
                        <DeletedButton setStorage={setStorage} />
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
}
export default App;
