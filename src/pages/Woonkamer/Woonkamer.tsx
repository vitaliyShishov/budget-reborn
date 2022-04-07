import Section from '@components/Section'
import Title from '@components/Title'
import DateStamp from '@components/DateStamp'
import Paragraph from '@components/Paragraph'
import List from '@components/List'
import Quote from '@components/Quote'
import Image from '@components/Image'
import Separator from '@components/Separator'
import LinkButton from '@components/LinkButton'
const checkedList = [
  {
    text: '10x LEKKER E-Bikes ter waarde van € 2.098,-',
    isCountable: true,
  },
  {
    text: '100x Budget Thuis pakket met producten waarmee je de koude dagen doorkomt',
    isCountable: true,
  },
  {
    text: '100x OPPO Band die jouw hartslag of zuurstofniveau in je bloed kan meten tijdens het sporten',
    isCountable: true,
  },
  {
    text: '1000x Exclusieve Budget Thuis truien zodat je de verwarming een graadje lager kunt zetten',
    isCountable: true,
  },
]

const WoonkamerPage = () => {
  return (
    <>
      <Section {...{ classes: 'bg-budget-green-500' }}>
        <Title
          {...{
            color: 'white',
            content: 'Trek Een trui aan',
          }}
        />
      </Section>
      <Section>
        <div className="mt-6">
          <DateStamp {...{ title: 'Energie', datetime: '18 januari 2022' }} />
          <Title.H2
            {...{
              color: 'green',
              content: 'DE EERSTE PRIJZEN ZIJN DE DEUR UIT',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'Inmiddels zijn we alweer twee maanden op weg met onze actie Trek een trui aan. Dit betekent dat in de tussentijd ook de eerste prijzen zijn uitgereikt aan onze klanten. We vinden het leuk om te laten zien welke prijzen er zijn uitgereikt. En het motiveert hopelijk ook andere klanten om minder te gaan verbruiken én dus ook kans te maken op één van de vele prijzen!',
            }}
          />
        </div>
      </Section>
      <Section {...{ classes: 'bg-gray-100' }}>
        <>
          <Title.H3
            {...{
              color: 'green',
              content: 'DE PRIJZEN',
              classes: 'mt-6',
            }}
          />
          <Paragraph.Text
            {...{
              content: 'Wat kan er ook alweer gewonnen worden?',
            }}
          />
          <List
            {...{
              type: 'checked',
              items: checkedList,
            }}
          />
          <Quote
            {...{
              text: 'MONIQUE: “BEDANKT VOOR DE LEKKERE WARME TRUI DIE IK MOCHT ONTVANGEN IN HET KADER VAN #TREKEENTRUIAAN"',
              author: '- WINNARES TRUI',
            }}
          />
          <Image
            {...{
              src: 'http://localhost:3000/src/assets/images/budgetThuisSweater.jpg',
              altText: 'Budget Winner',
              width: 500,
            }}
          />
          <Quote
            {...{
              text: 'Elly: "We hebben gezien de razendsnel stijgende gasprijzen besloten de verwarming iets lager te zetten en een vest aan te trekken"',
              author: '- WINNARES OPPO BAND',
            }}
          />
        </>
      </Section>
      <Section>
        <>
          <Title.H4
            {...{
              color: 'green',
              content: 'LEKKER E-bike',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'De eerste LEKKER E-Bike is uitgereikt aan één van onze klanten, aangezien hij meer dan 10% minder heeft verbruikt ten opzichte van vorig jaar. De fiets is persoonlijk overhandigd aan onze winnende klant. Hoe dat is verlopen zie je in de video!',
            }}
          />
        </>
      </Section>
      <Section {...{ classes: 'bg-gray-100' }}>
        <>
          <Title.H4
            {...{
              color: 'green',
              content: 'Interview deelnemer Trek een trui aan',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'We hebben onze klant Mehmet, winnaar van de fiets, een aantal vragen gesteld over Trek een trui aan.',
            }}
          />
          <Paragraph.Title
            {...{
              content: 'Waarom heb je je aangemeld voor Trek een trui aan?',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'Ik ontving een e-mail van Budget Energie met een link over de wedstrijd. Het was zo gemakkelijk om deze wedstrijd bij te wonen. Ik dacht "waarom niet?". Het enige wat ik moest doen was op een link klikken.',
            }}
          />
          <Paragraph.Title
            {...{
              content: 'Op welke manieren heb je je verbruik verminderd?',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'Wij hebben een paar jaar geleden ons huis gekocht. Het enige wat me stoort aan ons nieuwe huis was het energielabel, dat was C. Ik moest er van mezelf iets aan doen, op een plek waar de mensheid lijdt onder de opwarming van de aarde. We hebben besloten om stap voor stap wat veranderingen door te voeren om het energielabel van ons huis te verhogen.',
            }}
          />
          <Paragraph.Title
            {...{
              content: 'Is het moeilijk om minder te verbruiken?',
            }}
          />

          <Paragraph.Text
            {...{
              content:
                'Het is niet moeilijk. Het gaat gewoon om beslissingen. Beslissingen om op een betere plek te leven, besluiten een betere wereld achter te laten voor de komende generatie.',
            }}
          />
          <Paragraph.Title
            {...{
              content:
                'Heb je zelf je verbruik gemonitord of heb je gewacht op onze resultaten?',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'Voorheen wachtte ik elke maand op de uitslag in het verbruiksoverzicht. Met de nieuwe Budget Thuis App is het echter vrij eenvoudig om mijn verbruik in de gaten te houden. Je hoeft geen maand te wachten. Je zou je verbruik wekelijks of zelfs dagelijks kunnen bekijken.',
            }}
          />
          <Image
            {...{
              src: 'http://localhost:3000/src/assets/images/budgetThuisHappyCustomer.jpg',
              altText: 'Budget Winner',
              width: 500,
              className: 'my-6',
            }}
          />
          <Quote
            {...{
              text: 'ELMA: "HEERLIJK GENIETEN MET EEN KOP THEE, EN DAN HET ZWARTE ZACHTE THUIS DEKENTJE OM MIJ HEEN. EEN TEVREDEN KLANT!"',
              author: '- WINNARES BUDGET THUIS PAKKET',
            }}
          />
        </>
      </Section>
      <Section>
        <>
          <Title.H4
            {...{
              color: 'green',
              content: 'Doe mee!',
            }}
          />
          <Paragraph.Text
            {...{
              content:
                'De winactie loopt nog tot 31 maart 2022. Je kunt je dus nog steeds aanmelden (tot 28 februari) en kans maken op prijzen. Het enige wat je hoeft te doen is je hier aan te melden en de komende tijd minder te verbruiken dan vorig jaar. Dus, trui aan, verwarming een graadje lager en lig lekker op de bank met een dekentje. Wij nemen contact met je op als je in aanmerking komt voor een van onze prijzen. Lees hier een artikel met 12 handige tips om minder te verbruiken!',
            }}
          />
          <Separator {...{ type: 'vertical' }} />
          <LinkButton
            {...{
              text: 'Meer artikelen lezen',
              link: 'https://google.com',
            }}
          />
        </>
      </Section>
      <Section {...{ classes: 'bg-gray-100' }}>
        <div className="flex">
          <div className="flex flex-1 flex-col items-start py-6">
            <Title.H2
              {...{
                color: 'green',
                content: 'ELKE MAAND € 5,- COMBIKORTING',
                classes: 'mb-2',
              }}
            />
            <Title.H3
              {...{
                color: 'black',
                content: 'Combineer Budget Mobiel met Energie en Alles-in-1',
                classes: 'mt-0',
              }}
            />
            <Paragraph.Text
              {...{
                content:
                  'Budget Thuis is er voor de nuchtere Nederlander die niet in mooie praatjes gelooft en niet te veel wil betalen. Wij beloven minder: minder betalen, minder gedoe en minder blabla. Combineer je Budget Energie met Budget Alles-in-1 en Budget Mobiel? Dan krijg je bovenop de lage prijs nog eens elke maand minimaal € 5,- combikorting. Wat kan oplopen tot € 30,- per maand. En wel zo handig. Je energie- en telecomdiensten onder één dak.',
              }}
            />
            <div className="flex flex-wrap justify-between w-full mt-4">
              <LinkButton
                {...{
                  text: 'Energie',
                  link: 'https://google.com',
                }}
              />
              <LinkButton
                {...{
                  text: 'All-in-1',
                  link: 'https://google.com',
                }}
              />
              <LinkButton
                {...{
                  text: 'Mobiel',
                  link: 'https://google.com',
                }}
              />
            </div>
          </div>
          <div className="flex-1">
            <Image
              {...{
                src: 'http://localhost:3000/src/assets/images/combikorting_budget_energie.png',
                altText: 'Budget Winner',
                className: 'flex-1',
                width: 500,
              }}
            />
          </div>
        </div>
      </Section>
    </>
  )
}

export default WoonkamerPage
