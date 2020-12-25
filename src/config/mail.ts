interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ehereal',

  defaults: {
    from: {
      email: 'email_example@domain.com',
      name: 'GoBarber',
    },
  },
} as IMailConfig;
