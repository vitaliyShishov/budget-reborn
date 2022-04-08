import { useEffect, useState, Dispatch, SetStateAction } from 'react'
import LinkButton from '@components/LinkButton'

type WelcomeProps = {
  setHideLayouts: Dispatch<SetStateAction<Boolean>>
}

const Welcome = ({ setHideLayouts }: WelcomeProps) => {
  const [nextChar, setNextChar] = useState<number>(0)
  const [placeToType, setPlaceToType] = useState<any>(null)
  const [wordToShow, setWordToShow] = useState<string>('')
  const [isButtonsVisible, setIsButtonsVisible] = useState<boolean>(false)
  const phrase = 'Welcome to Budget Thuis Reborn Project'

  useEffect(() => {
    setHideLayouts(true)
  }, [])

  useEffect(() => {
    if (placeToType) {
      if (nextChar < phrase.length) {
        setTimeout(() => {
          setWordToShow(`${wordToShow}${phrase.charAt(nextChar)}`)
          setNextChar(nextChar + 1)
        }, 100)
      } else if (nextChar === phrase.length) {
        setTimeout(() => {
          setIsButtonsVisible(true)
        }, 500)
      }
    }
  }, [nextChar, placeToType])

  return (
    <div className="bg-budget-green-500 w-full flex flex-1 text-white text-center justify-center">
      <div className=" my-20 inline-flex flex-col justify-center items-center space-y-20">
        <span
          ref={node => {
            if (node) {
              setPlaceToType(node)
            }
          }}
          className="text-6xl londrina uppercase max-w-[600px]"
        >
          {wordToShow}
        </span>
        {isButtonsVisible && (
          <>
            <LinkButton
              {...{
                text: 'Visit the first page',
                link: 'http://localhost:3000/bespaarweken'
              }}
            />
            <LinkButton
              {...{
                text: 'Visit the second page',
                link: 'http://localhost:3000/wookamer'
              }}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Welcome
