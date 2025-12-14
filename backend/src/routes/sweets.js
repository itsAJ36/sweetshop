const express = require('express');
const {
  getAllSweets,
  searchSweets,
  createSweet,
  updateSweet,
  deleteSweet,
  purchaseSweet,
  restockSweet
} = require('../controllers/sweetsController');

const { authenticate, requireAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticate, getAllSweets);
router.get('/search', authenticate, searchSweets);
router.post('/', authenticate, requireAdmin, createSweet);
router.put('/:id', authenticate, requireAdmin, updateSweet);
router.delete('/:id', authenticate, requireAdmin, deleteSweet);
router.post('/:id/purchase', authenticate, purchaseSweet);
router.post('/:id/restock', authenticate, requireAdmin, restockSweet);

module.exports = router;
