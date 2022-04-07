import LinkButton from '@components/LinkButton'
import Image from '@components/Image'
import Title from '@components/Title'
import List from '@components/List'
import { WifiIcon, PhoneIcon } from '@heroicons/react/solid'
import { CreditCardIcon } from '@heroicons/react/outline'

const CrossSellBlock = () => {
  return (
    <div className="relative py-7 flex-1 flex justify-center">
      <div className="absolute flex flex-col flex-1 top-0 h-full justify-between items-center">
        <div className="w-[100px]">
          <Image
            {...{
              src: 'src/assets/images/logo-allInOne-payoff.svg',
              altText: '',
              width: 100,
              className: 'bg-white border-4 border-solid border-white',
            }}
          />
        </div>
        <div className="border-4 border-solid border-white shadow-lg">
          <LinkButton
            {...{
              interactive: false,
              text: 'Bekijk aanbod',
              link: 'https://google.com',
            }}
          />
        </div>
      </div>
      <div className="bg-white flex-1 text-center flex flex-col shadow-lg">
        <Title.H3
          {...{
            content: 'Internet, TV & BELLEN',
            color: 'black',
            classes: 'mt-16',
          }}
        />
        <div className="flex my-6 space-x-4 justify-center">
          <WifiIcon className="h-8 w-8 text-budget-green-500" />
          <PhoneIcon className="h-8 w-8 text-budget-green-500" />
          <CreditCardIcon className="h-8 w-8 text-budget-green-500" />
        </div>
        <div className="flex justify-center bg-gray-100 mx-4 mb-12">
          <List
            {...{
              type: 'checked',
              items: [
                {
                  text: '6 mnd vanaf € 17,- p/m',
                  isCountable: true,
                },
                {
                  text: 'óf kies cadeau tot € 260,-',
                  isCountable: false,
                },
                {
                  text: 'Via betrouwbaar KPN-netwerk',
                  isCountable: true,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  )
}
export default CrossSellBlock
