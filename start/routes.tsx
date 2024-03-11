/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/home_controller')
const PostController = () => import('#controllers/post_controller')

router.get('/', [HomeController]).as('home')
router.get('/:slug', [PostController]).as('post')
