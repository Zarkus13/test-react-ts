import axios from 'axios';

export const fetchActivityAPI = (): Promise<string> =>
  axios.get('https://www.boredapi.com/api/activity')
    .then((res) =>  {
      console.log(res);
      return res.data.activity
    });