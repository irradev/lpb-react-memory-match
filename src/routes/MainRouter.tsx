import { Routes, Route } from 'react-router-dom';
import { AppTemplate } from '../components/templates';

import { HomePage, PlayersPage, ScorePage, SettingsPage } from '../pages';

export const MainRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<AppTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="players" element={<PlayersPage />} />
            <Route path="score" element={<ScorePage />} />
            <Route path="settings" element={<SettingsPage />} />
         </Route>
      </Routes>
   );
};
