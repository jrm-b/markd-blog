/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FsPostService from '#services/fs_post_service'
import MarkdownService from '#services/markdown_service'
import { IndexPage } from '../resources/views/pages/index.js'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  try {
    const fileService = await new FsPostService().initDb('database/db.json')
    const markdownService = new MarkdownService(fileService)
    const post = await markdownService.readBySlug('comprendre-typescript')
    const metas = await markdownService.getAllMetas()
    console.dir({ content: post.content, metas })
  } catch (error) {
    console.error(error)
  }
  return <IndexPage></IndexPage>
})
