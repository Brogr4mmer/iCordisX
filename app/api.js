
function post(endpoint, body) {
    return fetch('https://cordisx.com/api/' + endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    })
}

function get(endpoint) {
    return fetch('https://cordisx.com/api/' + endpoint, {
        method: 'GET'
    })

}