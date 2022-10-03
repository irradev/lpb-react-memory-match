import { useEffect } from 'react';
import { setPageTitle, showMenu } from '../store';
import { useAppDispatch } from './useRedux';

export const useTitlePage = (name: string) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setPageTitle(name));
      dispatch(showMenu(false));
   }, []);
};
