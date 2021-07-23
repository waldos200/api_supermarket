const { Item } = require('../models');

const create = async (data) => await Item.create(data);

const findItemByName = async (name) => {
    try {
      const item = await Item.findOne({name, is_active:true}).exec()
  
      if (!item) throw ({error: new Error('item not found'), messsage: 'item not found'});
  
      return item;
    } catch (error) {
      throw error;
    }
};

const findAllItems = async () => {
    try {
      const items = await Item.find({is_active:true}).exec();
  
      if (!items) throw ({error: new Error('items not found'), messsage: 'items not found'});
  
      return items;
    } catch (error) {
      throw error;
    }
};

const findItemById = async (id) => {
    try {
      const item = await Item.findById(id).exec()
  
      if (!item) throw ({error: new Error('item not found'), messsage: 'item not found'});
      
      return item;
    } catch (error) {
      throw error;
    }
};

const updateItemById = async (id, data) => {
    try {
      const item = await Item.findByIdAndUpdate(id, {$set: data }, {new: true})
  
      if (!item) throw ({error: new Error('item not found'), messsage: 'item not found'});
  
      return item;
    } catch (error) {
      throw error;
    }
};

const deleteItemById = async (id) => {
    try {
      const item = await Item.findByIdAndUpdate(id, {$set: {is_active: false} }, {new: true})
  
      if (!item) throw ({error: new Error('item not found'), messsage: 'item not found'});
  
      return item;
    } catch (error) {
      throw error;
    }
};

module.exports = {
    create,
    findItemByName,
    findAllItems,
    findItemById,
    updateItemById,
    deleteItemById
}