type ImageProps = {
  src: string
  altText: string
}

const Image = ({ src, altText }: ImageProps) => {
  return (
    <div className="my-4">
      <img className="w-auto h-full max-w-[500px]" src={src} alt={altText} />
    </div>
  )
}

export default Image
