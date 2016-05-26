
export default {
  Expense: {
    properties: {
      title: 'string',
      date: 'date',
      amount: 'number',
      for: {
        type: 'array',
        items: 'User',
      },
      paidBy: 'User',
      categories: {
        type: 'array',
        items: 'Category',
      },
    },
  },

  User: {
    properties: {
      name: 'string',
    },
  },

  Category: {
    properties: {
      title: 'string',
    },
  },
};
