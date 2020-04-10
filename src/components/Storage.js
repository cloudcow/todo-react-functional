/**
 * Initialize local storage with welcome message
 */
export const initStorage = () => {
    localStorage.removeItem('todo-list');
    localStorage.setItem(
        'todo-list',
        JSON.stringify(
            [
                {
                    id: -1,
                    note: 'Your first note!',
                    checked: false,
                }
            ]
        )
    );
};

/**
 * Get items stored in local storage
 */
export const getStorage = () => {

    if (!localStorage.getItem('todo-list')) {
        initStorage();
    }
    return JSON.parse(localStorage.getItem('todo-list'));
};

/**
 * Save new items into local storage
 * @param {*} storageItem 
 */
export const saveStorage = (storageItem) => {
    localStorage.setItem('todo-list', JSON.stringify(storageItem))
};
