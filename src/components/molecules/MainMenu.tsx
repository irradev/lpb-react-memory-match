import { useLocation, useNavigate } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { ButtonMenu } from '../atoms';

const Container = tw.div`
   flex
   flex-col
   gap-4
   w-full
   p-4
`;

export const MainMenu = () => {
   return (
      <Container>
         <ButtonMenu text="New Game" to="/" />
         <ButtonMenu text="Players" to="/players" />
         <ButtonMenu text="Score" to="/score" />
         {/* <ButtonMenu text="Settings" to="/settings" /> */}
         {/* <ButtonMenu text="About" /> */}
      </Container>
   );
};
