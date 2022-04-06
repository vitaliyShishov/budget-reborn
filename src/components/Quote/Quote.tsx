type QuoteProps = {
  text: string
  author: string
}

const Quote = ({ text, author }: QuoteProps) => {
  return (
    <div className="my-4 londrina text-xl space-y-2">
      <p className="uppercase">{text}</p>
      <p className="uppercase">{author}</p>
    </div>
  )
}

export default Quote
