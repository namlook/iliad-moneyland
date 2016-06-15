
export default {
  path: ':id',
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
  ],
};
