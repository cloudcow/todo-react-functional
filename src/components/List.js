import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';

/**
 * List element
 */
export default function ItemsList({ storage, setStorage }) {

    /**
     * Delete item on click
     * @param {*} deleteValue 
     */
    const deleteItemHandler = (deleteValue) => {
        let copyStorage = JSON.parse(JSON.stringify(storage));
        let clearStorage = copyStorage.filter(item => item.id !== deleteValue.id);
        setStorage(clearStorage);
    }

    /**
     * Check or uncheck checkbox item
     * @param {*} item 
     */
    const checkedBoxHandler = (item) => {
        let copyStorage = JSON.parse(JSON.stringify(storage));
        let itemIndex = copyStorage.findIndex((i) => i.id === item.id);
        copyStorage[itemIndex].checked = !copyStorage[itemIndex].checked;
        setStorage(copyStorage);
    }

    let listItems = storage.map((item) => {
        return < div className={'full-width'} key={item.id}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={item.checked}
                            onClick={() => checkedBoxHandler(item)}
                        />
                    </ListItemIcon>
                    <ListItemText primary={item.note} />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" onClick={() => deleteItemHandler(item)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div >
    });
    return listItems;
}
