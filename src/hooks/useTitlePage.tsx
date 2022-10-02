import { useEffect } from 'react';
import { setPageTitle } from '../store';
import { useAppDispatch } from './useRedux';

export const useTitlePage = (name: string) => {
   const dispatch = useAppDispatch();

   useEffect(() => {
      dispatch(setPageTitle(name));
   }, []);
};
