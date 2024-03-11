import fs from 'node:fs/promises'
import { dirname, join } from 'node:path'

export interface DatabaseEntry {
  title: string
  slug: string
  category: string
  path: string
}

export default class FsDatabaseService {
  constructor(private entrypoint: string) {
    if (this.entrypoint.startsWith('.') || this.entrypoint.startsWith('/')) {
      throw new Error(
        'You need to provide an absolute path from the root directory of the application.',
        {
          cause: 'E_INVALID_DATABASE',
        }
      )
    }
  }
  async init() {
    const collectedSlugs = new Set()
    const entries: DatabaseEntry[] = JSON.parse(await fs.readFile(this.entrypoint, 'utf-8'))

    if (!Array.isArray(entries)) {
      throw new Error(
        'The json database entrypoint file must provide an array of object and start with []',
        {
          cause: 'E_INVALID_DATABASE',
        }
      )
    }

    entries.forEach((entry, index) => {
      if (!entry.slug || entry.slug === '') {
        throw new Error(`Invalid database entry at index ${index}. Missing "slug" !`, {
          cause: 'E_INVALID_DATABASE',
        })
      }
      if (!entry.title || entry.title === '') {
        throw new Error(`Invalid database entry at index ${index}. Missing "title" !`, {
          cause: 'E_INVALID_DATABASE',
        })
      }
      if (!entry.path || entry.path === '') {
        throw new Error(`Invalid database entry at index ${index}. Missing "path" !`, {
          cause: 'E_INVALID_DATABASE',
        })
      }
      if (!entry.category || entry.category === '') {
        throw new Error(`Invalid database entry at index ${index}. Missing "category" !`, {
          cause: 'E_INVALID_DATABASE',
        })
      }
      if (collectedSlugs.has(entry.slug)) {
        throw new Error(
          `Invalid database entry at index ${index}. Duplicated "slug", need to be unique.`,
          { cause: 'E_INVALID_DATABASE' }
        )
      }
      entry.path = join(dirname(this.entrypoint), entry.path)
      collectedSlugs.add(entry.slug)
    })
    collectedSlugs.clear()
    return entries
  }
}
