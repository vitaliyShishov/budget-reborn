type LinkButtonProps = {
  link: string
  text: string
}

const LinkButton = ({ link, text }: LinkButtonProps) => {
  return (
    <span className="bg-budget-blue-500 px-8 py-2 cursor-pointer inline-flex text-center shadow-link-button hover:shadow-none hover:translate-y-1 duration-200">
      <a href={link} target="_blank" className="londrina text-white text-xl">
        {text}
      </a>
    </span>
  )
}

export default LinkButton
