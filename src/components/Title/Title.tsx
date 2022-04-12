type TitleColor = 'green' | 'white' | 'black'

type TitleProps = {
  content: string
  color: TitleColor
  classes?: string
  size: string
  Tag?: any
}

const colorToClass = {
  green: 'text-budget-green-500',
  white: 'text-white',
  black: 'text-gray-800'
}

const TitleComponent = ({ content, color, classes = '', Tag }: TitleProps) => {
  if (!content) return null

  const splittedContent = content.split('\n')

  return (
    <>
      {splittedContent.map((contentPart: string, i: number) => {
        return (
          <Tag
            dangerouslySetInnerHTML={{ __html: contentPart }}
            className={`${colorToClass[color]} my-4 ${classes}`}
          ></Tag>
        )
      })}
    </>
  )
}

const Title = (props: TitleProps) => {
  switch (props.size) {
    case 'h1':
      return (
        <TitleComponent
          {...{
            ...props,
            Tag: 'h1',
            classes: `${props.classes || ''} text-6xl londrina uppercase`
          }}
        />
      )
    case 'h2':
      return (
        <TitleComponent
          {...{
            ...props,
            Tag: 'h2',
            classes: `${props.classes || ''} text-5xl londrina uppercase`
          }}
        />
      )
    case 'h3':
      return (
        <TitleComponent
          {...{
            ...props,
            Tag: 'h3',
            classes: `${props.classes || ''} text-4xl londrina uppercase`
          }}
        />
      )
    case 'h4':
      return (
        <TitleComponent
          {...{
            ...props,
            Tag: 'h4',
            classes: `${props.classes || ''} text-xl`
          }}
        />
      )
    default:
      return (
        <TitleComponent
          {...{
            ...props,
            Tag: 'h5',
            classes: `${props.classes || ''} text-lg font-semibold`
          }}
        />
      )
  }
}

export default Title
