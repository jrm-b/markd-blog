import fs from 'node:fs'
import FsDatabaseService, { DatabaseEntry } from './fs_database_service.js'

interface RawBlogPost {
  metas: DatabaseEntry
  content: string
}

export default class FsPostService {
  #booted: boolean = false
  #entryPoints: DatabaseEntry[] = []
  #posts: RawBlogPost[] = []

  async initDb(dbEntrypoint: string) {
    this.#entryPoints = await new FsDatabaseService(dbEntrypoint).init()
    this.#booted = true
    return this
  }

  async getAll() {
    if (!this.#booted) {
      return new Error(
        'You need to initialize database by providing an entrypoint to initDb() method before trying to collect posts.',
        {
          cause: 'E_INVALID_DATABASE',
        }
      )
    }

    this.#entryPoints.forEach((entry) => {
      const post = this.#toJSON(entry)
      this.#posts = [...this.#posts, post]
    })
    return this.#posts
  }

  async getBySlud(slug: string) {
    const entry = this.#entryPoints.filter((entry) => entry.slug === slug)[0]

    if (!entry) {
      throw new Error(`File with slug "${slug}" doesn't exist.`, {
        cause: 'E_INVALID_DATABASE_QUERY',
      })
    }

    const post = this.#toJSON(entry)
    return post
  }

  #toJSON(entry: DatabaseEntry): RawBlogPost {
    const content = fs.readFileSync(entry.path, 'utf-8')
    const post: RawBlogPost = {
      metas: { ...entry },
      content,
    }
    return post
  }
}
