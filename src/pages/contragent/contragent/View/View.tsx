import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Layout } from '../../../../components';

import './View.scss';

const ContragentView: FC<IClassNameProps> = () => {

  return (
    <Layout>
		  <div className="ContragentView">
				<h1>Просмотр контрагента #</h1>
		  </div>
    </Layout>
  );
};

export default ContragentView;
