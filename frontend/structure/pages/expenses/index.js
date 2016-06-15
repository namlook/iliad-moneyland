
import edit from './edit';

export default {
  outlet: {
    path: 'expenses',
    widgets: [
      {
        type: 'outlet',
      },
    ],
  },
  edit,
  index: {
    widgets: [
      {
        type: 'record-form',
        fields: [
          { label: 'title', name: 'title' },
          { label: 'amount', name: 'amount' },
        ],
        linkedStores: {
          own: 'expense-form-store',
        },
      },

      {
        type: 'header',
        title: 'expenses',
      },


      // {
      //   type: 'collection-query',
      //   store: {
      //     name: 'expenses-filter',
      //   },
      // },


      {
        type: 'collection-list',
        properties: ['_id', 'title', 'amount'],
        store: {
          name: 'expenses-store',
          recordSchema: {
            _id: '',
            _type: '',
            title: '',
            // paidBy: '',
            // for: '',
            amount: '',
            // categories: '',
          },
          remote: {
            endpoint: '//localhost:8888/api/1/expenses/i/stream',
            // query: {
            //   fields: {
            //     title: 'title',
            //     paidBy: 'paidBy',
            //     amount: 'amount',
            //   },
            //   aggregate: {
            //     for: { $array: 'for' },
            //     categories: { $array: 'categories' },
            //   },
            // },
            // filter: {
            //   amount: { $gt: '&{minAmount}' },
            // },
          },
          linkedStores: {
            filter: 'expenses-filter',
            message: 'flash-messages',
          },
        },
        // linkedStores: {
        //   own: 'expenses-store',
        // },
      },
    ],
  },
};
