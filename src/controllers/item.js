const { itemService } = require('../services');


const create = async (req, res) => {
  try {
    const item = await itemService.create(req.body);
    
    res.status(202).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const findItems = async (req, res) => {
  try {
    const items = await itemService.findAllitem();

    res.status(200).send({items});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const findItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await itemService.findItemById(id)

    res.status(202).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const findByName = async (req, res) => {
  try {
    // console.log(req.query);
    const { name } = req.query;

    const item = await itemService.findItemByName(name);

    res.status(202).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
};

const updateItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body

    const item = await itemService.updateItemById(id, body);

    res.status(202).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

const deleteItemById = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await itemService.deleteItemById(id);

    res.status(200).send({item});
  } catch (error) {
    console.error(error);
    res.status(400).json(error);
  }
}

module.exports = {
  create,
  findItems,
  findItemById,
  findByName,
  updateItemById,
  deleteItemById,
}