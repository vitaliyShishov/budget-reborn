type TitleColor = 'green' | 'white' | 'black'

type TitleProps = {
  content: string
  color: TitleColor
  classes?: string
  Tag?: any
}

const colorToClass = {
  green: 'text-budget-green-500',
  white: 'text-white',
  black: 'text-gray-800',
}

const TitleComponent = ({ content, color, classes = '', Tag }: TitleProps) => {
  if (!content) return null

  return (
    <Tag className={`${colorToClass[color]} my-4 ${classes}`}>{content}</Tag>
  )
}

const Title = (props: TitleProps) => (
  <TitleComponent
    {...{
      ...props,
      Tag: 'h1',
      classes: `${props.classes || ''} text-6xl londrina uppercase`,
    }}
  />
)

Title.H2 = (props: TitleProps) => (
  <TitleComponent
    {...{
      ...props,
      Tag: 'h2',
      classes: `${props.classes || ''} text-5xl londrina uppercase`,
    }}
  />
)

Title.H3 = (props: TitleProps) => (
  <TitleComponent
    {...{
      ...props,
      Tag: 'h3',
      classes: `${props.classes || ''} text-4xl londrina uppercase`,
    }}
  />
)

Title.H4 = (props: TitleProps) => (
  <TitleComponent
    {...{ ...props, Tag: 'h4', classes: `${props.classes || ''} text-xl` }}
  />
)

export default Title
