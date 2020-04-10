import React from 'react';
import { Button } from '@material-ui/core';
import { initStorage, saveStorage } from './Storage';

/**
 * Save button element
 */
export const SaveButton = ({ storage }) => {

    const saveStorageHandler = () => {
        saveStorage(storage);
    }
    return <Button variant="contained" color="primary" className={'full-width'} onClick={saveStorageHandler}>Save</Button>
}

/**
 * Delete button element
 */
export const DeletedButton = ({ setStorage }) => {

    const emptyItemStorageHandler = () => {
        setStorage([
            {
                id: -1,
                note: 'Your first note!',
                checked: false,
            }
        ]);
        initStorage();
    }
    return <Button variant="contained" color="secondary" className={'full-width'} onClick={emptyItemStorageHandler}>Empty</Button>
}
