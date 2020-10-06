import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}

        <h1>Jose Roberto</h1>
        <h2>@joserob__</h2>

        <p>
          Developer at <a href="https://rocketseat.com.br">Rocketseat</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Sao Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 13 de fevereiro de 1997
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>2000</strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
