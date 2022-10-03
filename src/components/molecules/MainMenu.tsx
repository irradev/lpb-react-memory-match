import { ButtonMenu } from '../atoms';

export const MainMenu = () => {
   return (
      <div
         className={`
            flex
            flex-col
            gap-4
            w-full
            p-4
      `}
      >
         <ButtonMenu text="New Game" to="/" />
         <ButtonMenu text="Players" to="/players" />
         <ButtonMenu text="Score" to="/score" />
         {/* <ButtonMenu text="Settings" to="/settings" /> */}
         {/* <ButtonMenu text="About" to="/about" /> */}
      </div>
   );
};
