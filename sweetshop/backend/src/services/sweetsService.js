const prisma = require('../../prismaClient');


exports.getAll = async () => {
return prisma.sweet.findMany();
};


exports.search = async ({ name, category, minPrice, maxPrice }) => {
const where = {};
if (name) where.name = { contains: String(name), mode: 'insensitive' };
if (category) where.category = { equals: String(category), mode: 'insensitive' };
if (minPrice !== undefined || maxPrice !== undefined) where.price = {};
if (minPrice !== undefined) where.price.gte = Number(minPrice);
if (maxPrice !== undefined) where.price.lte = Number(maxPrice);
return prisma.sweet.findMany({ where });
};


exports.create = async (data) => {
return prisma.sweet.create({ data });
};


exports.update = async (id, data) => {
return prisma.sweet.update({ where: { id }, data });
};


exports.remove = async (id) => {
return prisma.sweet.delete({ where: { id } });
};


exports.purchase = async (id, quantity) => {
if (quantity <= 0) throw Object.assign(new Error('Quantity must be > 0'), { status: 400 });
return prisma.$transaction(async (tx) => {
const sweet = await tx.sweet.findUnique({ where: { id } });
if (!sweet) throw Object.assign(new Error('Sweet not found'), { status: 404 });
if (sweet.quantity < quantity) throw Object.assign(new Error('Not enough stock'), { status: 400 });
const updated = await tx.sweet.update({ where: { id }, data: { quantity: sweet.quantity - quantity } });
return updated;
});
};


exports.restock = async (id, quantity) => {
if (quantity <= 0) throw Object.assign(new Error('Quantity must be > 0'), { status: 400 });
return prisma.sweet.update({ where: { id }, data: { quantity: { increment: quantity } } });
};