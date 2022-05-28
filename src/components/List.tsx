import classnames from 'classnames'
import * as React from 'react'
import { COLORS, Comp, styled, useOvermind } from '../app'
import { getEntry } from '../helpers/getEntry'
import { Link, LinkProps } from './Link'
import { Markdown } from './Markdown'

export interface DerivedProps {
  className?: string
  type?: 'md' | 'md-open'
  glo?: boolean
  entries: string[]
}

export const ListWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-self: flex-start;
  flex-direction: row;
  &.phrase.etym.glo {
    align-self: stretch;
    border: none;
    background: #d0cdc261;
    margin: 0 0 5px;
    padding: 0;
    border-radius: 0;
    border-bottom: 1px solid #888;
  }
  &.etym a {
    color: #222;
    font-weight: 500;
  }
  &.phrase {
    margin: 0;
  }
  &.phrases {
    flex-direction: column;
  }
  &.phrases > *:not(:first-child) {
    margin-top: 5px;
  }
  &.phrase.glo {
    display: flex;
    flex-direction: row;
    background: #d0cdc2;
    border-radius: 4px;
    border: 1px solid #333;
    padding: 5px;
  }
  & .Link:not(:last-child) {
    margin-right: 10px;
  }
  & .Link.Link a {
    color: inherit;
  }
`

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  margin: 8px 15px;
  & > p {
    font-family: Monaco;
    font-size: 0.9rem;
    margin-top: 6px;
    font-size: 0.8rem;
    color: #777;
  }
  &&.noun strong {
    color: ${COLORS.noun};
  }
  &&.noun em,
  &&.adj strong,
  &&.adj em {
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.adj};
  }
  &&.verb strong {
    color: ${COLORS.verb};
  }
  &&.verb em,
  &&.adv strong,
  &&.adv em {
    font-style: italic;
    font-weight: normal;
    color: ${COLORS.adv};
  }
`

const Aspect = styled.div`
  font-family: Monaco;
  font-size: 0.9rem;
  margin-top: 6px;
  &.writ {
    font-family: 'Telugu';
    font-size: 110%;
    opacity: 0.4;
  }
  &.name {
    opacity: 0.4;
  }
  &.glo {
    font-size: 0.8rem;
  }
  &.phon {
    position: relative;
    left: -8px;
  }
  color: #565656;
`

export const GlossAndLink: Comp<LinkProps> = props => {
  const ctx = useOvermind()
  const { writ } = ctx.state.zulapa
  const entry = getEntry(ctx, props.id)
  if (!entry) {
    return null
  }
  return (
    <Detail className={entry.cla}>
      <Link {...props} />
      <Aspect className="phon">{entry.phon}</Aspect>
      <Aspect className={writ ? 'name' : 'writ'}>
        {writ ? entry.name : entry.writ}
      </Aspect>
      <Markdown text={entry.glo!} type="md" />
    </Detail>
  )
}

export const List: Comp<DerivedProps> = ({ className, entries, type, glo }) => {
  return (
    <ListWrapper
      className={classnames(className, { phrase: type !== undefined, glo })}
    >
      {entries.map(key =>
        glo ? (
          <GlossAndLink id={key} type={type} />
        ) : (
          <Link id={key} type={type} />
        )
      )}
    </ListWrapper>
  )
}
