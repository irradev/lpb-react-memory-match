import { useTitlePage } from '../hooks';
import styled from 'styled-components';

const Container = styled.div``;

export const SettingsPage = () => {
   useTitlePage('Settings');

   return (
      <Container>
         <h1>Settings Page</h1>
      </Container>
   );
};
