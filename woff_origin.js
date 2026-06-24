lintone.createSubmit = (data) => {
    // get email's value by id
    let Phone = lintone.getValueById('Phone');
    // if email is empty, alert and return false to stop submit
    if (!Phone) {
        alert('Please input Phone');
        return false;
    }
    return true;
};
