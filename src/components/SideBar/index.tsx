import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';


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

      <StickyBox>
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
            title="Noticias"
            elements={[<News />, <News />, <News />
          ]} />

          <List 
            title="Talvez voce curta"
            elements={[<News />, <News />, <News />
          ]} />

          <List 
            title="Talvez voce curta"
            elements={[<News />, <News />, <News />
          ]} />

        </Body>
      </StickyBox>
      
    </Container>
  );
}

export default SideBar;