import { ReactElement } from 'react'
import Title from '@components/Title'
import DateStamp from '@components/DateStamp'
import Paragraph from '@components/Paragraph'
import List from '@components/List'
import Quote from '@components/Quote'
import Image from '@components/Image'
import Separator from '@components/Separator'
import LinkButton from '@components/LinkButton'
import ProductsBlock from '@components/ProductsBlock'
import CrossSellBlock from '@components/CrossSellBlock'
export type SectionProps = {
  children?: ReactElement | string
  classes?: string
  sectionBackground?: string
  blocks: Array<any>
}

const sectionBgClasses = {
  green: 'bg-budget-green-500',
  white: 'bg-white',
  gray: 'bg-gray-100',
  'green-image': 'bg-budget-green-img'
} as any

const Section = ({
  children,
  sectionBackground = 'white',
  blocks = []
}: SectionProps) => {
  console.log(import.meta.env)
  return (
    <section
      className={`${sectionBgClasses[sectionBackground]} w-full flex justify-center py-12 px-4`}
    >
      <div className="container flex flex-col items-start">
        <>
          {blocks.map((block: any, i: number) => {
            switch (block.componentType) {
              case 'title':
                return <Title key={i} {...block}></Title>
              case 'paragraph':
                return (
                  <Paragraph
                    {...{
                      key: i,
                      content: block.content
                    }}
                  />
                )
              case 'quote':
                return <Quote {...{ key: i, ...block }} />
              case 'separationLine':
                return <Separator {...{ key: i, ...block }} />
              case 'button':
                return <LinkButton {...{ key: i, ...block }} />
              case 'datestamp':
                return (
                  <DateStamp
                    {...{ key: i, title: block.title, datetime: block.dateAdded }}
                  />
                )
              case 'image':
                return (
                  <Image
                    {...{
                      key: i,
                      src: `${import.meta.env.VITE_SERVER_URL}${block.source}`,
                      altText: block.allText
                    }}
                  />
                )
              case 'list':
                return (
                  <List
                    {...{
                      key: i,
                      ...block
                    }}
                  />
                )
              case 'combiDiscountBanner':
                return <ProductsBlock key={i} />
              case 'crossSellBlock':
                return <CrossSellBlock {...{ key: i, ...block }}></CrossSellBlock>
            }
          })}
          {children}
        </>
      </div>
    </section>
  )
}

export default Section
