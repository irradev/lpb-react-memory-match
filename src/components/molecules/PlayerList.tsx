import { cleanScoresByPlayerId, deletePlayerById } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import tw from 'tailwind-styled-components';
import { Button, SvgIcon } from '../atoms';
import { useLocation } from 'react-router-dom';

const ThHead = tw.th`
   py-4 px-3 border-b border-tertiary
`;

const WinNumber = tw.span`
   px-1
   text-green-400
`;
const LossNumber = tw.span`
   px-1
   text-red-400
`;

export const PlayerList = () => {
   const location = useLocation();
   const dispatch = useAppDispatch();

   const { players } = useAppSelector((state) => state.players);

   const handleCleanPlayerScores = (id: string, name: string) => {
      if (
         window.confirm(
            `Realmente deseas borrar los marcadores de victorias/perdidas del jugador ${name}`
         )
      ) {
         dispatch(cleanScoresByPlayerId(id));
      }
   };

   const handleDeletePlayer = (id: string, name: string) => {
      if (window.confirm(`Realmente deseas borrar al jugador ${name}`)) {
         dispatch(deletePlayerById(id));
      }
   };

   const tdClassName = 'py-6 px-3';
   return (
      <table
         className={`
            w-full
            max-w-full
            border-separate
            border-spacing-0
      `}
      >
         <thead className="py-4 px-3 border-b border-tertiary">
            <tr>
               <ThHead style={{ minWidth: '120px', textAlign: 'left' }}>
                  NAME
               </ThHead>
               <ThHead style={{ minWidth: '80px', textAlign: 'center' }}>
                  WINS
               </ThHead>
               <ThHead style={{ minWidth: '80px', textAlign: 'center' }}>
                  LOSSES
               </ThHead>
               {location.pathname === '/players' && (
                  <ThHead style={{ minWidth: '180px', textAlign: 'center' }}>
                     ACTIONS
                  </ThHead>
               )}
            </tr>
         </thead>
         <tbody className="pt-2">
            {/* <DummyList /> */}
            {players.map((player) => (
               <tr key={`player_${player.id}`}>
                  <td
                     className={tdClassName}
                     style={{ minWidth: '120px', textAlign: 'left' }}
                  >
                     {player.name}
                  </td>
                  <td
                     className={tdClassName}
                     style={{ minWidth: '80px', textAlign: 'center' }}
                  >
                     <WinNumber>{player.score.wins}</WinNumber>
                  </td>
                  <td
                     className={tdClassName}
                     style={{ minWidth: '80px', textAlign: 'center' }}
                  >
                     <LossNumber>{player.score.losses}</LossNumber>
                  </td>
                  {location.pathname === '/players' && (
                     <td style={{ minWidth: '180px', textAlign: 'center' }}>
                        <div
                           className={`
                              flex
                              justify-center
                              items-center
                              gap-1
                              w-full
                        `}
                        >
                           <Button
                              onClick={() =>
                                 handleCleanPlayerScores(player.id, player.name)
                              }
                              styleType="WARNING"
                           >
                              <SvgIcon name="erase" />
                           </Button>
                           <Button
                              onClick={() =>
                                 handleDeletePlayer(player.id, player.name)
                              }
                              styleType="DANGER"
                           >
                              <SvgIcon name="trash" color="WHITE" />
                           </Button>
                        </div>
                     </td>
                  )}
               </tr>
            ))}
         </tbody>
      </table>
   );
};

/*
const DummyList = () => {
   return (
      <>
         <tr>
            <Td style={{ minWidth: '120px', textAlign: 'left' }}>FIRST</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>name</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
         <tr>
            <Td style={{ minWidth: '150px', textAlign: 'left' }}>LAST</Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <WinNumber>20</WinNumber>
            </Td>
            <Td style={{ minWidth: '80px', textAlign: 'center' }}>
               <LossNumber>10</LossNumber>
            </Td>
            <td style={{ minWidth: '180px', textAlign: 'center' }}></td>
         </tr>
      </>
   );
};
*/
