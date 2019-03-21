const mongoose = require('mongoose');
const Ticket = require('./schema/types/ticket.model');
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/tickets';

const methods = {
    create: model => async (body = {}) => {
        const doc = await model.create({ ... body });
        return doc;
    },
    get: model =>  async (find = {}) => {
        const docs = await model.find({ ...find});
        return docs;
    },
    getOne: model =>   async (id) => {
        const doc = await model.findOne({ _id: id});
        return doc;
    },
    update: model =>  async (find, body) => {
        const updateDoc = await model.findOneAndUpdate({ ...find }, { ...body }, { new: true });
        return updateDoc;
    },
    remove: model =>  async (id) => {
        const removed = await model.findOneAndRemove({ _id: id });
        return removed;
    }
}

const crudController = (model) => ({
    create: methods.create(model),
    get: methods.get(model),
    getOne: methods.getOne(model),
    update: methods.update(model),
    remove: methods.remove(model)
})
const DBConnect = () => {
    return new Promise((resolve, reject) => {
          mongoose.connect(DB_URL, { useNewUrlParser: true})
            .then(() => resolve(crudController(Ticket)))
            .catch(err => reject(err));
    })
}

module.exports = DBConnect