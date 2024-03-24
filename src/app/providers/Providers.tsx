import Router from '@/app/router';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

const Providers = () => {
  return (
    <Suspense fallback={'Загрузка...'}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
};

export default Providers;
