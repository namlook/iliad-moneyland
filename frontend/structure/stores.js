
export default [
  // {
  //   type: 'collection',
  //   name: 'expenses-store',
  //   recordSchema: {
  //     _id: '',
  //     _type: '',
  //     title: '',
  //     // paidBy: '',
  //     // for: '',
  //     amount: '',
  //     // categories: '',
  //   },
  //   remote: {
  //     endpoint: '//localhost:8888/api/1/expenses/i/stream',
  //     query: {
  //       fields: {
  //         title: 'title',
  //         paidBy: 'paidBy',
  //         amount: 'amount',
  //       },
  //       aggregate: {
  //         for: { $array: 'for' },
  //         categories: { $array: 'categories' },
  //       },
  //     },
  //     filter: {
  //       amount: { $gt: '&minAmount' },
  //     },
  //   },
  //   linkedStores: {
  //     filter: 'expenses-filter',
  //     message: 'flash-messages',
  //   },
  // },


  {
    type: 'record',
    name: 'expense-form-store',
    schema: {
      _id: '',
      _type: '',
      title: '',
      amount: '',
    },
    remote: {
      endpoint: '//localhost:8888/api/1/expenses/i/stream?filter[_id]=:id',
      // {:id}&filter[title]={&title}',
    },
    linkedStores: {
      message: 'flash-messages',
    },
  },
];
