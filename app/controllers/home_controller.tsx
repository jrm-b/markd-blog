// import type { HttpContext } from '@adonisjs/core/http'

import FsPostService from '#services/fs_post_service'
import { IndexPage } from '../../resources/views/pages/index.js'
import MarkdownService from '#services/markdown_service'

export default class HomeController {
  async handle() {
    try {
      const db = await new FsPostService().initDb('database/db.json')
      const metas = await new MarkdownService(db).getAllMetas()
      return <IndexPage data={metas}></IndexPage>
    } catch (error) {
      console.error(error)
    }
  }
}
