type QuoteProps = {
  content: string
  author: string
}

const Quote = ({ content, author }: QuoteProps) => {
  return (
    <div className="my-4 londrina text-xl space-y-2">
      <p className="uppercase">{content}</p>
      <p className="uppercase">- {author}</p>
    </div>
  )
}

export default Quote
