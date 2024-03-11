/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FsDatabaseService from '#services/fs_database_service'
import { IndexPage } from '../resources/views/pages/index.js'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  try {
    const db = await new FsDatabaseService('database/db.json').init()
    console.log(db)
  } catch (error) {
    console.log(error)
  }
  return <IndexPage></IndexPage>
})
