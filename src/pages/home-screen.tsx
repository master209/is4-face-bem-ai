import React from 'react';
import { Helmet } from 'react-helmet-async';

import { TITLE_FREFIX } from "../const";
import { Layout } from '../components';

export const HomeScreen = () => (
  <Layout>
    <Helmet>
      <title>{TITLE_FREFIX}Главная</title>
    </Helmet>
    <h1>Главная</h1>
  </Layout>
);
