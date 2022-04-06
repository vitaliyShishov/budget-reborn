type SeparatorType = 'gorizontal' | 'vertical'

type SeparatorProps = {
  type: SeparatorType
}

const Separator = ({ type }: SeparatorProps) => {
  let classes = 'border border-solid border-l-none border-b-none my-8 '
  if (type === 'vertical') {
    classes += 'border-r-none border-gray-100 w-full'
  } else if (type === 'gorizontal') {
    classes += 'border-t-none border-gray-100 h-full'
  }
  return <div className={classes}></div>
}

export default Separator
