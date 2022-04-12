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
        className: 'w-1/2 my-8',
        ...rest
      }}
    />
  )
}

export default Image
