import { PropsWithChildren } from '@kitajs/html'
import { Vite } from '#start/view'

interface BaseLayoutProps extends PropsWithChildren {
  title?: string
  description?: string
}

export function BaseLayout(props: BaseLayoutProps) {
  return (
    <>
      {'<!DOCTYPE html>'}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content={props.description || 'Provide me a description'} />
          <title>{props.title || 'Provide me a title'}</title>
          <Vite.Entrypoint
            entrypoints={['resources/css/app.css', 'resources/js/app.ts']}
          ></Vite.Entrypoint>
        </head>
        <body class="bg-customback font-atkinson text-customtext">{props.children}</body>
      </html>
    </>
  )
}
