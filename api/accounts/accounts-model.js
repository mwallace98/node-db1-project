const db = require('../../data/db-config')

const getAll = () => {
  return db('accounts')
}

const getById = id => {
  return db('accounts').where('id',id).first()
}

const create =async account => {

  const trimmedAccount = {
    name:account.name.trim(),
    budget:account.budget
  };
  const [id] = await db('accounts').insert(trimmedAccount)
  return getById(id)
}

const updateById = (id, account) => {
  
}

const deleteById = id => {
  return db('accounts').where('id',id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
