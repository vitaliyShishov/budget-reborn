type ParagraphProps = {
  content: string
}

const Paragraph = () => null

Paragraph.Title = ({ content, ...rest }: { content: string }) => {
  return <span className="my-4 font-semibold block text-lg">{content}</span>
}
Paragraph.Text = ({ content, ...rest }: ParagraphProps) => {
  return <p dangerouslySetInnerHTML={{ __html: content }} className="my-2"></p>
}

export default Paragraph
