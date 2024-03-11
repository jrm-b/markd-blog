import { cva } from 'class-variance-authority'
import { PropsWithChildren } from '@kitajs/html'

interface ButtonProps extends PropsWithChildren<JSX.HtmlButtonTag> {
  otherClass?: string
  cvaVariants?: cvaVariant
}

type cvaVariant = {}

export function Button(props: ButtonProps) {
  const { cvaVariants = {} } = props
  const styleButton = cva(['px-2', 'py-2', 'rounded-md'])
  return (
    <button
      class={
        props.otherClass
          ? `${styleButton({ ...cvaVariants })} ${props.otherClass}`
          : styleButton({ ...cvaVariants })
      }
      type={props.type || 'button'}
    >
      {props.value}
      {props.children}
    </button>
  )
}
