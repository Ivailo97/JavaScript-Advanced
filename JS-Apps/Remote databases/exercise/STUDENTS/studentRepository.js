const errorHandler = (error) => console.log(error)

const dataDeserializer = (data) => data.json();

const fetchData = (
    url,
    method = "GET",
    reloadData,
    data = {},
    errHandler = errorHandler,
    dData = dataDeserializer
) => {

    const postAndPutFetch = () => {
        fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }).then(dData)
            .then(reloadData)
            .catch(errHandler)
    };

    const methods = {

        "GET": () => fetch(url).then(dData).catch(errHandler),

        "POST": postAndPutFetch,

        "PUT": postAndPutFetch,

        'DELETE': () => fetch(url, {
                method: method,
            })
            .then(dData)
            .then(reloadData)
            .catch(eHandler),
    }

    return methods[method]();
}

export { fetchData };