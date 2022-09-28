import { Routes, Route } from 'react-router-dom';
import { AppTemplate } from '../components/templates';

import { HomePage, SettingsPage } from '../pages';

export const MainRouter = () => {
   return (
      <Routes>
         <Route path="/" element={<AppTemplate />}>
            <Route path="/" element={<HomePage />} />
            <Route path="settings" element={<SettingsPage />} />
         </Route>
      </Routes>
   );
};
