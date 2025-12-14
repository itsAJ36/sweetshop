const prisma = require('../../prismaClient');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

exports.register = async (username, password) => {
  const hashed = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({ data: { username, password: hashed } });
  return { id: user.id, username: user.username, role: user.role };
};

exports.login = async (username, password) => {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) throw new Error('Invalid credentials');

  const ok = await bcrypt.compare(password, user.password);
  if (!ok) throw new Error('Invalid credentials');

  return jwt.sign({ sub: user.id, role: user.role }, SECRET, { expiresIn: '7d' });
};
