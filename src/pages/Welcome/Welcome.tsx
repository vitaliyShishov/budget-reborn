import { useEffect, useState } from 'react'

const Welcome = () => {
  const [nextChar, setNextChar] = useState<number>(0)
  const [placeToType, setPlaceToType] = useState<any>(null)
  const [wordToShow, setWordToShow] = useState<string>('')
  const phrase = 'Welcome'

  useEffect(() => {
    if (placeToType) {
      if (nextChar < phrase.length) {
        console.log(nextChar)
        setTimeout(() => {
          setWordToShow(`${wordToShow}${phrase.charAt(nextChar)}`)
          setNextChar(nextChar + 1)
        }, 300)
      }
    }
  }, [nextChar, placeToType])

  return (
    <div className="bg-budget-green-500 w-full flex flex-1 text-white text-center">
      <div className="w-full my-20">
        <span
          ref={(node) => {
            if (node) {
              setPlaceToType(node)
            }
          }}
          className="text-6xl londrina uppercase"
        >
          {wordToShow}
        </span>
      </div>
    </div>
  )
}

export default Welcome
