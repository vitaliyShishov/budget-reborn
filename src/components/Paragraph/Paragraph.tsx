type ParagraphProps = {
  content: string
}

const Paragraph = ({ content }: ParagraphProps) => {
  return <p dangerouslySetInnerHTML={{ __html: content }} className="my-2"></p>
}

export default Paragraph
