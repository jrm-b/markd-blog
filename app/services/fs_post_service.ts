import fs from 'node:fs'
import FsDatabaseService, { DatabaseEntry } from './fs_database_service.js'

export interface RawBlogPost {
  metas: DatabaseEntry
  content: string
}

export default class FsPostService {
  #entryPoints: DatabaseEntry[] = []

  async initDb(dbEntrypoint: string) {
    this.#entryPoints = await new FsDatabaseService(dbEntrypoint).init()
    return this
  }

  async getAll() {
    const posts: RawBlogPost[] = []

    this.#entryPoints.forEach((entry) => {
      const post = this.#toJSON(entry)
      posts.push(post)
    })
    return posts
  }

  async getBySlug(slug: string): Promise<RawBlogPost> {
    try {
      const entry = this.#entryPoints.filter((entry) => entry.slug === slug)[0]
      const post = this.#toJSON(entry)
      return post
    } catch (error) {
      throw new Error(`Invalid slug provided. Can't find file with slug: "${slug}"`, {
        cause: 'E_INVALID_DATABASE_QUERY',
      })
    }
  }

  #toJSON(entry: DatabaseEntry): RawBlogPost {
    const content = fs.readFileSync(entry.path, 'utf-8')
    const post: RawBlogPost = {
      metas: entry,
      content,
    }
    return post
  }
}
