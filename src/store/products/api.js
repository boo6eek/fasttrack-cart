import createApi from '../../utils/api';

export const api = createApi({
  prefix: 'partners/chats/:chatUuid',
  endpoints: {
    get: {
      url: '/variables/',
      transformer: data => data ? data.my_cart : {}
    },
    post: {
      url: '/variables/',
      options: {
        method: 'POST'
      }
    },
    push: {
      url: '/push/',
      options: {
        method: 'POST'
      }
    }
  }
});

export default api;
