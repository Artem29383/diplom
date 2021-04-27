import { memo, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';

const GoogleAnalytics = () => {
  const history = useHistory();
  const [init, setInit] = useState(false);
  const [firstDetect, setFirstDetect] = useState(false);

  useEffect(() => {
    ReactGA.initialize('UA-179693968-1');
    setInit(true);
  }, []);

  useEffect(() => {
    if (init) {
      history.listen(location => {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
        // ReactGA.event({
        //   category: 'User',
        //   action: 'Redirect url',
        // });

      });
      if (!firstDetect) {
        console.info('detect')
        ReactGA.set({ page: history.location.pathname });
        ReactGA.pageview(history.location.pathname);
        setFirstDetect(true);
      }
    }
  }, [init, firstDetect]);

  return null
};

export default memo(GoogleAnalytics);
