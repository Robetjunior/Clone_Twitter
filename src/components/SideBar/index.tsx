import React from 'react';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

import { 
  Container, 
  SearchWrapper, 
  SearchInput, 
  SearchIcon, 
  Body 
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Tweeter"/>
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <List 
          title="Talvez voce curta"
          elements={[
            <FollowSuggestion 
              name="Camila Magalhaes"
              nickname="@acamilaamgl"
            />,
            <FollowSuggestion 
              name="Luke Morales"
              nickname="@lukemorales"
            />,
            <FollowSuggestion 
              name="Luiz Batanero"
              nickname="@luizbatanero"
            />
          ]}
        />
        
        <List 
          title="Talvez voce curta"
          elements={[
            <h1>Test</h1>,
            <h1>Test</h1>,
            <h1>Test</h1>
          ]}
        />
      </Body>
    </Container>
  );
}

export default SideBar;