import { Navigate } from 'react-router-dom';
import { useIsAuthorized, useAppSelectors } from '../hooks';
import { AppRoute } from '../const';

type PrivateRouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({children}: PrivateRouteProps): JSX.Element {
  const isAuthorized = useIsAuthorized();
  const {isCheckingAuth} = useAppSelectors();

  return (
    <div>
      { // eslint-disable-next-line no-nested-ternary
        !isCheckingAuth
          ? (isAuthorized ? children : <Navigate to={AppRoute.Auth}/>)
          : null
      }
    </div>
  );
}
