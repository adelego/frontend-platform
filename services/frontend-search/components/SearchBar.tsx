import * as React from 'react';

export interface SearchBarProps {
  lang?: 'en' | 'fr';
}

export type SearchBarType = React.FC<SearchBarProps>;

export const SearchBar: SearchBarType = ({ lang }) => {
  const text = lang === 'fr' ? 'Barre de Recherche' : 'Search Bar';

  return <div>🔎 {text}</div>;
};
