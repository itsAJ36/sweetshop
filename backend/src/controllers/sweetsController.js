const sweetsService = require('../services/sweetsService');


exports.getAllSweets = async (req, res, next) => {
try {
const sweets = await sweetsService.getAll();
res.json(sweets);
} catch (err) {
next(err);
}
};


exports.searchSweets = async (req, res, next) => {
try {
const { name, category, minPrice, maxPrice } = req.query;
const results = await sweetsService.search({ name, category, minPrice, maxPrice });
res.json(results);
} catch (err) {
next(err);
}
};


exports.createSweet = async (req, res, next) => {
try {
const data = req.body;
if (!data.name || !data.category || typeof data.price !== 'number' || typeof data.quantity !== 'number') {
return res.status(400).json({ message: 'Invalid sweet data' });
}
const sweet = await sweetsService.create(data);
res.status(201).json(sweet);
} catch (err) {
next(err);
}
};


exports.updateSweet = async (req, res, next) => {
try {
const { id } = req.params;
const data = req.body;
const sweet = await sweetsService.update(id, data);
res.json(sweet);
} catch (err) {
next(err);
}
};


exports.deleteSweet = async (req, res, next) => {
try {
const { id } = req.params;
await sweetsService.remove(id);
res.status(204).send();
} catch (err) {
next(err);
}
};


exports.purchaseSweet = async (req, res, next) => {
try {
const { id } = req.params;
const { quantity = 1 } = req.body;
const result = await sweetsService.purchase(id, Number(quantity));
res.json(result);
} catch (err) {
next(err);
}
};


exports.restockSweet = async (req, res, next) => {
try {
const { id } = req.params;
const { quantity } = req.body;
const result = await sweetsService.restock(id, Number(quantity));
res.json(result);
} catch (err) {
next(err);
}
};