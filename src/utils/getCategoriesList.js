export default (listArr) => {
    let categories = [];
    listArr.forEach(item => {
        if (!categories.includes(item.category)) {
            categories.push(item.category);
        }
    });

    return categories;
}