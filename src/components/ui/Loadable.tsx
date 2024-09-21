import { ComponentType, Suspense } from 'react';

// project imports
import Loader from './Loader';

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable =
  <P extends object>(Component: ComponentType<P>) =>
  (props: P) => {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };

export default Loadable;
