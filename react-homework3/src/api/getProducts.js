const getProducts = () => {
    return (
        fetch('db/db.json')
            .then(response => response.json())
    )
}

export default getProducts