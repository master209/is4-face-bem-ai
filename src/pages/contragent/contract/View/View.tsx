import React, { FC } from 'react';
import { IClassNameProps } from '@bem-react/core';

import { Layout } from '../../../../components';

import './View.scss';

const ContractView: FC<IClassNameProps> = () => {

  return (
    <Layout>
		  <div className="ContractView">
				<h1>Просмотр договора #</h1>
		  </div>
    </Layout>
  );
};

export default ContractView;
