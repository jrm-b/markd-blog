import { toHtml } from '@dimerapp/markdown/utils'
import { DatabaseEntry } from './fs_database_service.js'
import FsPostService from './fs_post_service.js'
import { RawBlogPost } from './fs_post_service.js'
import { MarkdownFile } from '@dimerapp/markdown'

interface MarkdownFileMetas extends Omit<DatabaseEntry, 'path'> {
  summary?: string
  date?: string
}

interface MarkdownFileProcessed {
  metas: MarkdownFileMetas
  content: string
}

export default class MarkdownService {
  constructor(private postService: FsPostService) {}

  async getAllMetas(): Promise<MarkdownFileMetas[]> {
    const rawPosts: RawBlogPost[] = await this.postService.getAll()
    const processedMetas: MarkdownFileMetas[] = []

    for (const rawPost of rawPosts) {
      const { slug } = rawPost.metas
      const { metas } = await this.readBySlug(slug)
      processedMetas.push(metas)
    }
    return processedMetas
  }

  async readBySlug(slug: string): Promise<MarkdownFileProcessed> {
    const rawPost: RawBlogPost = await this.postService.getBySlug(slug)
    const { path, ...metas } = rawPost.metas
    const md = new MarkdownFile(rawPost.content)
    await md.process()
    const html = toHtml(md).contents
    const post: MarkdownFileProcessed = {
      metas: {
        ...metas,
        summary: md.frontmatter.summary,
        date: md.frontmatter.date,
      },
      content: html,
    }
    return post
  }
}
