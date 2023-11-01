export default {
  routes: [
    {
     method: 'POST',
     path: '/email',
     handler: 'email.sendEmail',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
