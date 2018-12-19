const list =  (req, res) =>{
    res.send('clients list')
}

const create = (req, res) => {
    res.send('clients new')
}
module.exports = {
    list, create
}