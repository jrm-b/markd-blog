import { BaseContainer } from './base_container.js'
import { Button } from './button.js'
import { PropsWithChildren } from '@kitajs/html'
import { SunMedium } from 'lucide-static'
import { Vite } from '#start/view'

interface PageHeaderProps extends PropsWithChildren {}

export function PageHeader(props: PageHeaderProps) {
  return (
    <header class="w-full h-[68px] z-20 bg-transparent backdrop-blur-sm fixed border-b border-primary/20">
      <BaseContainer otherClass="p-2 justify-between" cvaVariants={{ display: 'flexRowCenter' }}>
        <a class="flex items-center flex-row gap-2 text-lg font-bold h-full" href="/">
          <Vite.Image src="resources/images/mountain-logo.webp" class="w-[58px]"></Vite.Image>
          <h1>MarkD Blog</h1>
        </a>
        <Button
          otherClass="bg-primary hover:bg-primary/90 text-customback/80"
          value={SunMedium}
          id="toggle-dark-mode"
        ></Button>
        {props.children}
      </BaseContainer>
    </header>
  )
}
