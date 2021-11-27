import { Router } from 'express';
import * as HomeController from '../controllers/homeController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', HomeController.index);
router.get('/dogs', HomeController.getDogs);
router.get('/cats', HomeController.getCats);
router.get('/fishes', HomeController.getFishes);

router.get('/search', SearchController.search);

export default router;
