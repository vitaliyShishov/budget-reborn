import Title from '@components/Title'
import Paragraph from '@components/Paragraph'
import Image from '@components/Image'
import LinkButton from '@components/LinkButton'

const ProductsBlock = () => {
  return (
    <div className="flex">
      <div className="flex flex-1 flex-col items-start py-6">
        <Title
          {...{
            color: 'green',
            content: 'ELKE MAAND € 5,- COMBIKORTING',
            classes: 'mb-2',
            size: 'h2'
          }}
        />
        <Title
          {...{
            color: 'black',
            content: 'Combineer Budget Mobiel met Energie en Alles-in-1',
            classes: 'mt-0',
            size: 'h3'
          }}
        />
        <Paragraph
          {...{
            content:
              'Budget Thuis is er voor de nuchtere Nederlander die niet in mooie praatjes gelooft en niet te veel wil betalen. Wij beloven minder: minder betalen, minder gedoe en minder blabla. Combineer je Budget Energie met Budget Alles-in-1 en Budget Mobiel? Dan krijg je bovenop de lage prijs nog eens elke maand minimaal € 5,- combikorting. Wat kan oplopen tot € 30,- per maand. En wel zo handig. Je energie- en telecomdiensten onder één dak.'
          }}
        />
        <div className="flex flex-wrap justify-between w-full mt-4">
          <LinkButton
            {...{
              content: 'Energie',
              url: 'https://google.com'
            }}
          />
          <LinkButton
            {...{
              content: 'All-in-1',
              url: 'https://google.com'
            }}
          />
          <LinkButton
            {...{
              content: 'Mobiel',
              url: 'https://google.com'
            }}
          />
        </div>
      </div>
      <div className="flex-1 flex items-center">
        <Image
          {...{
            src: 'http://localhost:3000/src/assets/images/combikorting_budget_energie.png',
            altText: 'Budget Winner',
            className: 'flex-1',
            width: 500
          }}
        />
      </div>
    </div>
  )
}

export default ProductsBlock
