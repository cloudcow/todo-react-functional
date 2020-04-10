import React, { useState } from 'react';
import AddBox from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Grid, TextField } from '@material-ui/core';

/**
 * Add item element
 */
const Add = ({ storage, setStorage }) => {
    let [input, setInput] = useState('');

    /**
     * Remove welcome note
     */
    const removeWelcomeNote = () => {
        let copyStorage = JSON.parse(JSON.stringify(storage));
        const idOfWelcomeNote = -1;

        let welcomeNoteIndex = copyStorage.findIndex((item) => item.id === idOfWelcomeNote);

        if (welcomeNoteIndex > -1) {
            copyStorage.shift();
        }
        setStorage(copyStorage);
    }

    /**
     * Handler for adding item
     */
    const addItemHandler = () => {
        let copyStorage = JSON.parse(JSON.stringify(storage));

        copyStorage.push({
            id: storage.length,
            note: input,
            checked: false,
        });
        setStorage(copyStorage);
    }

    /**
     * Input changed handler
     */
    const inputChangeHandler = (event) => {
        setInput(event.target.value);
    }

    return <div>
        <Grid container spacing={0} align="center">
            <Grid xs={11} item={true}>
                <TextField id="user-input" label="Write your note..." className={'full-width'} onInput={(event) => { removeWelcomeNote(); inputChangeHandler(event); }} />
            </Grid>
            <Grid xs={1} item={true}>
                <IconButton edge="end" onClick={addItemHandler}>
                    <AddBox />
                </IconButton>
            </Grid>
        </Grid>
    </div>
}
export default Add; 
