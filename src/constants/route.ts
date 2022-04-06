export type IRouteItem = {
  title: string
  children?: IRoute
}

export type IRoute = {
  [key: string]: IRouteItem
}

const ROUTES: IRoute = {
  home: {
    title: 'Thuis',
  },
  energie: {
    title: 'Energie',
    children: {
      bereken: {
        title: 'Bereken je voordeel',
      },
      stroom: {
        title: 'Stroom en gas',
      },
      overstappen: {
        title: 'Overstappen',
      },
      besparen: {
        title: 'Besparen',
      },
      zakelijk: {
        title: 'Zakelijk',
      },
      service: {
        title: 'Service & Contact',
      },
    },
  },
  allInOne: {
    title: 'Alles-in-1',
    children: {
      paket: {
        title: 'Stel je paket samen',
      },
      internet: {
        title: 'Internet',
      },
      tv: {
        title: 'TV',
      },
      vast: {
        title: 'Vast bellen',
      },
      alloverstappen: {
        title: 'Overstappen',
      },
      allservice: {
        title: 'Service & Contact',
      },
    },
  },
  mobile: {
    title: 'Mobiel',
    children: {
      abonement: {
        title: 'Kies je abonement',
      },
      simonly: {
        title: 'Sim only',
      },
      buiteland: {
        title: 'Buitenland',
      },
      mobileovertappen: {
        title: 'Overstappen',
      },
      bewind: {
        title: 'Bewinddvoerdes',
      },
      mobileservice: {
        title: 'Service & Contact',
      },
    },
  },
  service: {
    title: 'Service & Contact',
    children: {
      energie: {
        title: 'Energie',
      },
      allinone: {
        title: 'Alles-in-1',
      },
      mobiel: {
        title: 'Mobiel',
      },
    },
  },
  overons: {
    title: 'Over ons',
    children: {
      overbudget: {
        title: 'Over Budget Thuis',
      },
      woonkamer: {
        title: 'De Woonkamer',
      },
      vacatures: {
        title: 'Vacatures',
      },
    },
  },
}

export default ROUTES
