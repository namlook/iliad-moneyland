
export default {
  outlet: {
    path: 'expenses',
    widgets: [
      {
        type: 'outlet',
      },
    ],
  },
  index: {
    widgets: [
      {
        type: 'header',
        title: 'expenses',
      },


      {
        type: 'collection-query',
        store: {
          name: 'collection-query-store',
          linkedStores: {
            message: 'flash-messages',
            collection: 'expenses-store',
          },
          remote: {
            endpoint: '//localhost:8888/api/1/expenses/i/stream',
            query: {
              fields: {
                title: 'title',
                paidBy: 'paidBy',
                amount: 'amount',
              },
              aggregate: {
                for: { $array: 'for' },
                categories: { $array: 'categories' },
              },
            },
          },
        },
      },


      {
        type: 'collection-list',
        properties: ['title', 'amount'],
        linkedStores: {
          own: 'expenses-store',
        },
      },
    ],
  },
};
