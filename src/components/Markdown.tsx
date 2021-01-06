import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import { Comp } from '../app'
import { Link } from './Link'
import gfm from 'remark-gfm'

export interface MarkdownProps {
  className?: string
  type: 'md' | 'md-open'
  text: string
}

export const Markdown: Comp<MarkdownProps> = ({ type, text }) => {
  const renderers = {
    link: ({
      href,
      children,
    }: {
      href: string
      children: React.ElementType[]
    }) => {
      return <Link id={href} type={type} children={children} />
    },
  }

  return (
    <ReactMarkdown plugins={[gfm]} renderers={renderers}>
      {text}
    </ReactMarkdown>
  )
}
