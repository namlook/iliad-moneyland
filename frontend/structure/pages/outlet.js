
const color = 'violet';

export default {
  path: '/',
  widgets: [
    {
      layout: { mobile: 16 },
      type: 'application-navbar',
      title: 'Scora',
      color,
      secondaryItems: [
        {
          action: 'deleteAll',
          store: 'scores',
          color: 'red',
          confirm: {
            displayIcon: 'trash',
            confirmIcon: 'check',
            confirmLabel: 'confirmer',
          },
        },
      ],
      linkedStores: {
        scores: 'scores-store',
      },
    },
    {
      layout: { mobile: 0, tablet: 0, computer: 3 },
      type: 'application-menu',
      color,
      items: [
        { label: 'Joueurs', route: '/participants', icon: 'users' },
        { label: 'Scores', route: '/scores', icon: 'game' },
        { label: 'Statistiques', route: '', items: [
          { label: 'Total', route: '/statistics/hall-of-fame', icon: 'trophy' },
          { label: 'Graphiques', route: '/statistics/charts', icon: 'line chart' },
        ] },
        // { label: 'Contact', route: '/contact', icon: 'user' },
      ],
    },
    {
      layout: { mobile: 16, tablet: 16, computer: 13 },
      type: 'outlet',
    },
    {
      type: 'mobile-application-menu',
      layout: { mobile: 16, table: 16, computer: 0 },
      color,
      items: [
        { label: 'Joueurs', route: '/participants', icon: 'users' },
        { label: 'Scores', route: '/scores', icon: 'game' },
        { label: 'Total', route: '/statistics/hall-of-fame', icon: 'trophy' },
        { label: 'Stats', route: '/statistics/charts', icon: 'line chart' },
      ],
    },
  ],
};
