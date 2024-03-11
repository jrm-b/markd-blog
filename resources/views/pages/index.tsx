import { BaseContainer } from '../components/base_container.js'
import { BaseLayout } from '../layouts/base.js'
import { MarkdownFileMetas } from '#services/markdown_service'
import { PageHeader } from '../components/page_header.js'
import { PropsWithChildren } from '@kitajs/html'
import string from '@poppinss/utils/string'

interface IndexPageProps extends PropsWithChildren {
  data?: MarkdownFileMetas[]
}

export function IndexPage(props: IndexPageProps) {
  const { data } = props
  return (
    <BaseLayout>
      <PageHeader></PageHeader>
      <main class="relative top-[68px] h-full pt-8">
        <BaseContainer>
          {data?.map((postMeta) => {
            const summary = postMeta.summary && string.truncate(postMeta.summary, 250)
            return (
              <article class="rounded-md shadow shadow-primary/30 mb-8 p-6 max-w-screen-sm mx-auto hover:border hover:border-primary hover:shadow-primary">
                <a href={`/${postMeta.slug}`} class="prose-sm">
                  <p class="max-w-fit rounded-xl px-4 bg-secondary/40 font-bold">
                    {postMeta.category}
                  </p>
                  <h2 class="mt-2">{postMeta.title}</h2>
                  <p class="text-justify">{summary}</p>
                  <p>{postMeta.date}</p>
                </a>
              </article>
            )
          })}
        </BaseContainer>
      </main>
    </BaseLayout>
  )
}
