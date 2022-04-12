import { useEffect, Dispatch, SetStateAction } from 'react'

import Section from '@components/Section'
import Title from '@components/Title'
import DateStamp from '@components/DateStamp'
import Paragraph from '@components/Paragraph'
import Image from '@components/Image'
import LinkButton from '@components/LinkButton'
import CrossSellBlock from '@components/CrossSellBlock'
import Harmonica from '@components/Harmonica'

const HarmonicaLines = [
  {
    text: 'Voor wie worden de tarieven maandelijks aangepast?',
    content:
      'Deze wijziging geldt alleen voor klanten met een variabel contract. Het gaat dan ook alleen om de variabele tarieven. Twijfelt u of u een vast contract (met bepaalde looptijd) of een variabel contract heeft? U controleert dit eenvoudig op MijnBudget onder ‘Mijn Contract’.'
  },
  {
    text: 'Waarom passen wij de variabele tarieven maandelijks aan i.p.v. halfjaarlijks?',
    content:
      'Het is onduidelijk wat de prijsontwikkeling van stroom en gas gaat doen in de toekomst. Daarom passen we onze variabele tarieven sinds 1 januari 2022 maandelijks aan. Zo kunnen we maandelijks bekijken wat de inkooptarieven doen, en daar onze variabele tarieven direct op aanpassen. Dit betekent natuurlijk ook, dat als de inkoopprijzen weer dalen, we de tarieven naar beneden kunnen bijstellen. Zo betaalt u als klant altijd actuele tarieven.'
  },
  {
    text: 'Wat betekent dit voor u als klant?',
    content:
      'In plaats van elk half jaar, ontvangt u vanaf nu elke maand de nieuwe variabele tarieven voor de volgende maand. Deze worden tijdig gecommuniceerd per e-mail. Zo weet u dus op tijd waar u aan toe bent én betaalt u het actuele tarief. Dit betekent natuurlijk ook, dat zodra de inkoopprijzen weer dalen, we de tarieven naar beneden bijstellen.'
  },
  {
    text: 'Wanneer ontvangt u uw nieuwe tarieven en termijnbedrag?',
    content:
      'We communiceren de nieuwe tarieven altijd tijdig voor aanvang van de nieuwe periode, meestal halverwege de maand ervoor. Het termijnbedrag wijzigt niet maandelijks. We hebben een inschatting gemaakt van uw verbruik voor aankomend jaar i.c.m. de tarieven van aankomende periode.'
  },
  {
    text: 'Hoe berekenen we uw nieuwe termijnbedrag?',
    content:
      'We baseren de berekening van uw termijnbedrag op uw verwachte verbruik tot aan uw jaarnota, de dan geldende tarieven en een inschatting van de tarieven voor de komende maanden. Ook nemen we de compensatie van de overheid mee in deze berekening.'
  }
]

type PageProps = {
  setHideLayouts: Dispatch<SetStateAction<Boolean>>
}

const Bespaarweken = ({ setHideLayouts }: PageProps) => {
  useEffect(() => {
    setHideLayouts(false)
  }, [])
  return (
    <>
      <Section {...{ sectionBackground: 'green', blocks: [] }}>
        <Title
          {...{
            color: 'white',
            content: 'BUDGET THUIS BESPAARWEKEN',
            size: 'h1'
          }}
        />
      </Section>
      <Section {...{ sectionBackground: 'white', blocks: [] }}>
        <>
          <DateStamp {...{ title: 'Budget Thuis', datetime: '23 februari 2022' }} />
          <Title
            {...{
              color: 'green',
              content: 'WAAROM TEVEEL BETALEN VOOR VASTE LASTEN?',
              size: 'h2'
            }}
          />
          <Paragraph
            {...{
              content:
                'Inflatie. Een vaak gehoorde term in deze tijd. En niet voor niets, want de inflatie is het hoogst in 40 jaar (CBS, dec ’21). Dit betekent dat je minder kunt kopen voor je euro’s, omdat de prijzen van goederen en diensten zijn gestegen. En, dat kan best vervelend uitpakken. Want hoogstwaarschijnlijk zijn je inkomsten niet net zo hard meegestegen.'
            }}
          />
          <Paragraph
            {...{
              content:
                'Naast dat de energieprijzen gestegen zijn voor een groep mensen, geldt dit ook voor de basisbehoeften zoals boodschappen, brandstof, de zorgverzekering en huisvesting. Iedereen voelt dit in de portemonnee.'
            }}
          />
          <Paragraph
            {...{
              content:
                'Mensen gaan daarom op zoek naar manieren om slimmer met hun geld om te gaan. Ze speuren naar aanbiedingen en kortingscodes, de verwarming wordt een graad lager gezet, er wordt zuinig omgegaan met water en slimme deals worden gescoord. Andere uitgaves waar vaak nog vrij gemakkelijk op bespaard kan worden? De vaste lasten en abonnementen.'
            }}
          />
          <Title
            {...{
              content: 'BESPAARWEKEN',
              color: 'green',
              size: 'h2',
              classes:
                'text-center mt-0 mb-0 inline-flex border-4 border-solid border-white bg-white'
            }}
          />
          <Paragraph
            {...{
              content:
                'Op vaste lasten en abonnementen, daar is wat ons betreft met gemak op te besparen. Waarom teveel betalen voor producten die gewoon moeten werken en waarbij vaak het enige verschil de prijs is? Want bellen is bellen, en internetten is internetten. Zou je zeggen. Waarom dan teveel betalen voor je internetpakket en GB’s, toch?'
            }}
          />
          <Title
            {...{
              content: 'BESPAARWEKEN',
              color: 'green',
              size: 'h2',
              classes:
                'text-center mt-0 mb-0 inline-flex border-4 border-solid border-white bg-white'
            }}
          />
          <Paragraph
            {...{
              content:
                'De uitgaves op een rijtje? Dan is het nu tijd om eens de vergelijking te maken met ons aanbod. Bij Budget Thuis zijn er nu de Bespaarweken. Internet en tv kan al vanaf € 17,- per maand als je kiest voor korting. En onbeperkt bellen, sms’en en internet? Dat kan de eerste 3 maanden al vanaf € 15,- per maand als je kiest voor een 2-jarig abonnement. En tel daar ook nog eens een cadeau naar keuze bij op!'
            }}
          />
          <Paragraph
            {...{
              content:
                '<a href="https://google.com" class="text-budget-green-500 underline">Bekijk Budget Alles-in-1 aanbod</a>'
            }}
          />
          <Paragraph
            {...{
              content:
                '<a href="https://google.com" class="text-budget-green-500 underline">Bekijk Budget Mobiel aanbod</a>'
            }}
          />
          <Title
            {...{
              content: 'BESPAARWEKEN',
              color: 'green',
              size: 'h2',
              classes:
                'text-center mt-0 mb-0 inline-flex border-4 border-solid border-white bg-white'
            }}
          />
          <Paragraph
            {...{
              content:
                'Bijkomend voordeel is dat als je onze producten (Budget Energie, Alles-in-1 en Mobiel) combineert, je tot maar liefst € 360,- per jaar kan besparen. En dat bovenop de al lage prijzen van Internet & TV en Sim Only. Een slimme manier om ondanks de stijgende prijzen toch geld te besparen op je vaste lasten.'
            }}
          />
        </>
      </Section>
      <Section {...{ sectionBackground: 'green-image', blocks: [] }}>
        <>
          <div className="flex flex-col w-full items-center">
            <Title
              {...{
                content: 'BESPAARWEKEN',
                color: 'green',
                size: 'h2',
                classes:
                  'text-center mt-0 mb-0 inline-flex border-4 border-solid border-white bg-white'
              }}
            />
            <Title
              {...{
                content: 'BIJ BUDGET THUIS',
                color: 'green',
                size: 'h2',
                classes:
                  'text-center mt-0 mb-0 inline-flex border-4 border-solid border-white bg-white'
              }}
            />
          </div>
          <div className="text-white text-center my-8">
            <Paragraph
              {...{
                content:
                  'Internet en tv. Mobiel bellen. Diensten die gewoon moeten werken. Het liefst voor een zo laag mogelijke prijs. Profiteer nu van superscherpe acties én combikorting!'
              }}
            />
          </div>
          <div className="flex gap-5 flex-1 w-full">
            <CrossSellBlock />
            <CrossSellBlock />
          </div>
        </>
      </Section>
      <Section {...{ sectionBackground: 'white', blocks: [] }}>
        <>
          <Harmonica
            {...{
              lines: HarmonicaLines
            }}
          />
        </>
      </Section>
      <Section {...{ sectionBackground: 'gray', blocks: [] }}>
        <div className="flex py-6">
          <div className="flex flex-col items-start flex-1">
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
          <div className="flex-1">
            <Image
              {...{
                src: 'http://localhost:3000/src/assets/images/combikorting_budget_energie.png',
                altText: 'Budget Winner'
              }}
            />
          </div>
        </div>
      </Section>
    </>
  )
}

export default Bespaarweken
