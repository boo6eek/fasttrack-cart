import axios from 'axios';

export default () => (url, opts) => axios(url, opts).then(({data}) => data)
