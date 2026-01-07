const express = require('express');
const router = express.Router();
const masterController = require('../controllers/master.controller');
const verifyToken = require('../middlewares/auth.middleware');

router.use(verifyToken); // Protect all routes

// ================== CATEGORY ROUTES ==================
router.post('/categories', /* #swagger.tags = ['Master'] */ masterController.createCategory);
router.get('/categories', /* #swagger.tags = ['Master'] */ masterController.getAllCategories);
router.get('/allcategories', /* #swagger.tags = ['Master'] */ masterController.getAllCategoriesWithSubCategories);
router.get('/categories/:id', /* #swagger.tags = ['Master'] */ masterController.getCategoryById);
router.put('/categories/:id', /* #swagger.tags = ['Master'] */ masterController.updateCategory);
router.delete('/categories/:id', /* #swagger.tags = ['Master'] */ masterController.deleteCategory);

// ================== SUBCATEGORY ROUTES ==================
router.post('/subcategories', /* #swagger.tags = ['Master'] */ masterController.createSubCategory);
router.get('/subcategories', /* #swagger.tags = ['Master'] */ masterController.getAllSubCategories);
router.get('/subcategories/:id', /* #swagger.tags = ['Master'] */ masterController.getSubCategoryById);
router.get('/subcategoriesByCategory/:categoryId', /* #swagger.tags = ['Master'] */ masterController.getAllSubCategoriesByCategoryId);
router.put('/subcategories/:id', /* #swagger.tags = ['Master'] */ masterController.updateSubCategory);
router.delete('/subcategories/:id', /* #swagger.tags = ['Master'] */ masterController.deleteSubCategory);

// ================== AGE GROUP ROUTES ==================
router.post('/age-groups', /* #swagger.tags = ['Master'] */ masterController.createAgeGroup);
router.get('/age-groups', /* #swagger.tags = ['Master'] */ masterController.getAllAgeGroups);
router.get('/age-groups/:id', /* #swagger.tags = ['Master'] */ masterController.getAgeGroupById);
router.put('/age-groups/:id', /* #swagger.tags = ['Master'] */ masterController.updateAgeGroup);
router.delete('/age-groups/:id', /* #swagger.tags = ['Master'] */ masterController.deleteAgeGroup);

// ================== COLOR ROUTES ==================
router.post('/colors', /* #swagger.tags = ['Master'] */ masterController.createColor);
router.get('/colors', /* #swagger.tags = ['Master'] */ masterController.getAllColors);
router.get('/colors/:id', /* #swagger.tags = ['Master'] */ masterController.getColorById);
router.put('/colors/:id', /* #swagger.tags = ['Master'] */ masterController.updateColor);
router.delete('/colors/:id', /* #swagger.tags = ['Master'] */ masterController.deleteColor);

// ================== GENDER ROUTES ==================
router.post('/genders', /* #swagger.tags = ['Master'] */ masterController.createGender);
router.get('/genders', /* #swagger.tags = ['Master'] */ masterController.getAllGenders);
router.get('/genders/:id', /* #swagger.tags = ['Master'] */ masterController.getGenderById);
router.put('/genders/:id', /* #swagger.tags = ['Master'] */ masterController.updateGender);
router.delete('/genders/:id', /* #swagger.tags = ['Master'] */ masterController.deleteGender);

// ================== MATERIAL ROUTES ==================
router.post('/materials', /* #swagger.tags = ['Master'] */ masterController.createMaterial);
router.get('/materials', /* #swagger.tags = ['Master'] */ masterController.getAllMaterials);
router.get('/materials/:id', /* #swagger.tags = ['Master'] */ masterController.getMaterialById);
router.put('/materials/:id', /* #swagger.tags = ['Master'] */ masterController.updateMaterial);
router.delete('/materials/:id', /* #swagger.tags = ['Master'] */ masterController.deleteMaterial);



module.exports = router;