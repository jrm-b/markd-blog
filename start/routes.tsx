/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FsPostService from '#services/fs_post_service'
import { IndexPage } from '../resources/views/pages/index.js'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  try {
    const db = await new FsPostService().initDb('database/db.json')
    const posts = await db.getAll()
    const post = await db.getBySlud('comprendre-typescript')
    console.log(post)
  } catch (error) {
    console.log(error)
  }
  return <IndexPage></IndexPage>
})
