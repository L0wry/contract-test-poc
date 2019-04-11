const axios = require('axios');

const fetchUsers = ({ URL, PORT }) => axios.get(`${URL}:${PORT}/users`).then(res => res.data)

export { fetchUsers }
