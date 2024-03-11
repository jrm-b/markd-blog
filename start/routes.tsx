/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { IndexPage } from '../resources/views/pages/index.js'

router.get('/', async () => <IndexPage></IndexPage>)
