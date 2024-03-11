import { cva } from 'class-variance-authority'
import { PropsWithChildren } from '@kitajs/html'

interface BaseContainerProps extends PropsWithChildren {
  otherClass?: string
  cvaVariants?: cvaVariants
}

type cvaVariants = {
  display?: 'flexRowCenter'
}

export function BaseContainer(props: BaseContainerProps) {
  const { cvaVariants = {} } = props
  const styleBaseContainer = cva(['w-full', 'max-w-screen-md', 'h-full', 'mx-auto'], {
    variants: {
      display: {
        flexRowCenter: ['flex', 'flex-row', 'flex-wrap', 'items-center', 'justify-center'],
      },
    },
  })
  return (
    <div
      class={
        props.otherClass
          ? `${styleBaseContainer({ ...cvaVariants })} ${props.otherClass}`
          : styleBaseContainer({ ...cvaVariants })
      }
    >
      {props.children}
    </div>
  )
}
