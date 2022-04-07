type ImageProps = {
  src: string
  altText: string
  height?: number
  width?: number
}

const Image = ({ src, altText, ...rest }: ImageProps) => {
  return (
    <img
      {...{
        src: src,
        alt: altText,
        ...rest,
      }}
    />
  )
}

export default Image
