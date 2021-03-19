import React, { useEffect } from 'react';
import './../../styles/normalize.css';
import AppRouter from '../AppRouter/AppRouter';
import routes from '../../routes';
import * as axios from "axios";
import useAction from "../../hooks/useAction";
import { actions } from '../../models/users/slice';

let instance = axios.create();
const token = 'IGQVJYTUtHc2V4QnZAaWUY2VWYwWmowVHc0WFJGSjhKVmplcXJ5RXRCQnRjTkZAObFJxRW1uVThpSGc4UnNZAVVFoaTY5UmNROEFoMGlTdnZAVZADIyTFRQLThuVVZArSk00c25sRVB4b1dwVTdiUk9Dd2VaagZDZD';

delete instance.defaults.headers.common['X-CSRF-TOKEN'];

const App = () => {
  const setPhotos = useAction(actions.setPhotos);

  useEffect(() => {
    instance.get(`https://graph.instagram.com/me/media?fields=id,media_url,permalink,username,caption&access_token=${token}`)
      .then(response => setPhotos(response.data.data))
  }, []);


  return <AppRouter routes={routes} />;
};

export default App;
