import FsPostService from '#services/fs_post_service'
import MarkdownService from '#services/markdown_service'
import { PostPage } from '../../resources/views/pages/post.js'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async handle(ctx: HttpContext) {
    const { params } = ctx
    try {
      const db = await new FsPostService().initDb('database/db.json')
      const post = await new MarkdownService(db).readBySlug(params.slug)
      return <PostPage data={post}></PostPage>
    } catch (error) {
      console.error(error)
    }
  }
}
