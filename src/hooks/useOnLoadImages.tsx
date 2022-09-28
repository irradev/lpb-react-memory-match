import { useState, useEffect, RefObject } from 'react';

export const useOnLoadImages = () => {
   const [status, setStatus] = useState(false);

   const checkImages = (ref: RefObject<HTMLElement>) => {
      const updateStatus = (images: HTMLImageElement[]) => {
         setStatus(
            images.map((image) => image.complete).every((item) => item === true)
         );
      };

      if (!ref.current) return;

      const imagesLoaded = Array.from(ref.current.querySelectorAll('img'));
      if (imagesLoaded.length === 0) {
         setStatus(true);
         return;
      } else {
         updateStatus(imagesLoaded);
      }

      imagesLoaded.forEach((image) => {
         image.addEventListener('load', () => updateStatus(imagesLoaded), {
            once: true,
         });
         image.addEventListener('error', () => updateStatus(imagesLoaded), {
            once: true,
         });
      });
   };

   return { isLoaded: status, checkImages };
};
