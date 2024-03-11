import { BaseContainer } from '../components/base_container.js'
import { BaseLayout } from '../layouts/base.js'
import { PageHeader } from '../components/page_header.js'
import { PropsWithChildren } from '@kitajs/html'
import { MarkdownFileProcessed } from '#services/markdown_service'

interface PostPageProps extends PropsWithChildren {
  data?: MarkdownFileProcessed
}

export function PostPage(props: PostPageProps) {
  const { data } = props
  return (
    <BaseLayout>
      <PageHeader></PageHeader>
      <main class="relative top-[68px] h-full py-8">
        <BaseContainer otherClass="p-6">
          <article class="prose-lg mx-auto flex flex-col gap-4 text-justify">
            <h1>{data?.metas.title}</h1>
            {data?.content}
          </article>
        </BaseContainer>
      </main>
    </BaseLayout>
  )
}
