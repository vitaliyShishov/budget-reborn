type LinkButtonProps = {
  url: string
  content: string
  interactive?: boolean
}

const LinkButton = ({ url, content, interactive = true }: LinkButtonProps) => {
  const interactiveClasses = interactive
    ? 'shadow-link-button hover:shadow-none hover:translate-y-1 duration-200'
    : ''
  return (
    <span
      className={`${interactiveClasses} bg-budget-blue-500 px-8 py-2 cursor-pointer inline-flex text-center`}
    >
      <a href={url} target="_blank" className="londrina text-white text-xl">
        {content}
      </a>
    </span>
  )
}

export default LinkButton
