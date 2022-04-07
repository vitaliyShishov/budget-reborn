import { useState, useLayoutEffect } from 'react'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Paragraph from '../Paragraph'
type HarmonicaLineProps = {
  text: string
  content: string
}

type HarmonicaProps = {
  lines: Array<HarmonicaLineProps>
}

type styleType =
  | 'height'
  | 'marginTop'
  | 'marginBottom'
  | 'paddingTop'
  | 'paddingBottom'

const getElementHeightToSet = (contentRef: HTMLDivElement) => {
  const height = (
    [
      'height',
      'marginTop',
      'marginBottom',
      'paddingTop',
      'paddingBottom',
    ] as Array<styleType>
  ).reduce((acc, styleProp: styleType) => {
    acc += parseInt(window.getComputedStyle(contentRef)[styleProp], 10)
    return acc
  }, 0)

  return `${height}px`
}

const HarmonicaLine = ({ text, content }: HarmonicaLineProps) => {
  const [isContentVisible, setIsContentVisible] = useState<Boolean>(false)
  const [contentRef, setContentRef] = useState<null | HTMLDivElement>(null)

  const setRefForContent = (ref: HTMLDivElement | null) => {
    if (ref !== null) {
      setContentRef(ref)
    }
  }

  useLayoutEffect(() => {
    if (contentRef !== null) {
      const parentEl = contentRef.parentElement as HTMLDivElement
      if (contentRef.classList.contains('hidden')) {
        contentRef.classList.toggle('hidden')

        requestAnimationFrame(
          () => (parentEl.style.height = getElementHeightToSet(contentRef))
        )
      } else {
        requestAnimationFrame(() => (parentEl.style.height = '0px'))
        parentEl.addEventListener(
          'transitionend',
          () => {
            contentRef.classList.toggle('hidden')
          },
          { once: true }
        )
      }
    }
  }, [isContentVisible])

  return (
    <>
      <div
        onClick={() => setIsContentVisible(!isContentVisible)}
        className="flex space-x-3 py-3 border border-solid border-gray-200 border-l-0 border-r-2 border-r-white hover:border-r-gray-600 cursor-pointer transition-all duration-200"
      >
        <ChevronRightIcon className="h-6 w-6 text-budget-green-500" />
        <span className="font-semibold">{text}</span>
      </div>

      <div className="h-0 overflow-hidden transition-[height] duration-300">
        <div
          ref={setRefForContent}
          className={`w-full my-4 overflow-hidden hidden`}
        >
          <Paragraph.Text {...{ content }} />
        </div>
      </div>
    </>
  )
}

const Harmonica = ({ lines }: HarmonicaProps) => {
  return (
    <div className="harmonica-holder w-full">
      {lines.map((line, i) => (
        <HarmonicaLine
          {...{
            key: i,
            ...line,
          }}
        />
      ))}
    </div>
  )
}

export default Harmonica
