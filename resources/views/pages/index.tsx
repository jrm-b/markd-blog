import { BaseLayout } from '../layouts/base.js'
import { PageHeader } from '../components/page_header.js'
import { PropsWithChildren } from '@kitajs/html'
import { BaseContainer } from '../components/base_container.js'

interface IndexPageProps extends PropsWithChildren {}

export function IndexPage(props: IndexPageProps) {
  return (
    <BaseLayout>
      <PageHeader></PageHeader>
      <main class="relative top-[68px] h-full">
        <BaseContainer></BaseContainer>
      </main>
    </BaseLayout>
  )
}
