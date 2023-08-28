import dynamic from 'next/dynamic';
import React from 'react';

import { HomeHero } from '@frontend-platform/frontend-engagement';

const SearchBar = dynamic(
  () => import('search/SearchBar'),
  // eslint-disable-next-line @typescript-eslint/ban-types
) as unknown as React.FunctionComponent;

const Home = (): JSX.Element => (
  <main className="flex min-h-screen flex-col items-center p-24">
    <h1>This is Frontend platform home page</h1>
    <HomeHero />
    <SearchBar />
  </main>
);

export default Home;
