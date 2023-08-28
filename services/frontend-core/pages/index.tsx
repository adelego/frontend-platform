import dynamic from 'next/dynamic';
import React from 'react';

import { HomeHero } from '@frontend-platform/frontend-engagement';

const SearchBar = dynamic(() =>
  import('frontend-search/components').then(components => components.SearchBar),
);

const Home = (): JSX.Element => (
  <main className="flex min-h-screen flex-col items-center p-24">
    <h1>This is Frontend platform home page</h1>
    <HomeHero />
    <SearchBar lang="fr" />
  </main>
);

export default Home;
