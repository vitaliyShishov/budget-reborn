import { ReactElement } from 'react'

export type SectionProps = {
  children: ReactElement | string
  classes?: string
}

const Section = ({ children, classes = '' }: SectionProps) => {
  return (
    <section className={`${classes} w-full flex justify-center py-12 px-4`}>
      <div className="container flex flex-col items-start">{children}</div>
    </section>
  )
}

export default Section
