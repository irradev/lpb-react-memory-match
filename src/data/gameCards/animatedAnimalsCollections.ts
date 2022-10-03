import { v4 } from 'uuid';

import { CardsCollection } from '../../store/cards/cardsSlice';

export const animatedAnimalsCollection: CardsCollection = {
   id: v4(),
   name: 'Gplyphy Animals',
   description: 'Descubre los animales en divertidas cartas animadas.',
   backgroundImage:
      'https://www.hogarmania.com/archivos/202109/animales-felices-portada-668x400x80xX-1.jpg',
   cards: [
      {
         id: v4(),
         name: 'Tigre de Bengala',
         imageUrl: 'https://media.giphy.com/media/LYtrkBQ29eMmptYSK1/giphy.gif',
         info: 'El tigre de Bengala, también conocido como tigre de Bengala real o tigre indio, es una subespecie de tigre que habita en la India, Nepal, Bangladés, Bután, Birmania y Tíbet.',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/Panthera_tigris_tigris',
      },
      {
         id: v4(),
         name: 'Ailuropoda melanoleuca (Panda)',
         imageUrl: 'https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif',
         info: 'El principal alimento del panda es el bambú (en torno al 99 % de su dieta), aunque también se alimenta de frutos, pequeños mamíferos, peces e insectos.5​ Es un buen trepador, aunque rara vez se le ve en los árboles. Se adapta a la cautividad y gracias a su pelaje soporta fácilmente las condiciones invernales de su hábitat.',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/Ailuropoda_melanoleuca',
      },
      {
         id: v4(),
         name: 'Tortuga',
         imageUrl: 'https://media.giphy.com/media/HsGvB8tdhVVC0/giphy.gif',
         info: 'También conocidos como quelonios, las tortugas son un tipo de reptiles caracterizados por el sólido caparazón que protege sus órganos vitales del que emergen la cabeza, las patas y la cola. A pesar de que carecen de dientes, cuentan con un fuerte pico que usan para alimentarse. Además de plantas, también comen insectos, caracoles y lombrices.',
         moreInfoUrl: 'https://www.nationalgeographic.com.es/animales/tortugas',
      },
      {
         id: v4(),
         name: 'Medusa',
         imageUrl: 'https://media.giphy.com/media/l3vQZjy1HKDu8m48M/giphy.gif',
         info: 'Las medusas (Medusozoa), también llamadas aguamalas, malaguas, aguavivas, aguacuajito, aguacuajada, o lágrimas de mar, son animales marinos. Para desplazarse por el agua se impulsan por contracciones rítmicas de todo su cuerpo; toman agua, que se introduce en su cavidad gastrovascular, y la expulsan usándola como "propulsor".',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/Medusozoa',
      },
      {
         id: v4(),
         name: 'Oryctolagus cuniculus (Conejo)',
         imageUrl: 'https://media.giphy.com/media/qQWufo6HvuGtO/giphy.gif',
         info: 'El conejo común o conejo europeo (Oryctolagus cuniculus) es una especie de mamífero lagomorfo de la familia Leporidae, y el único miembro actual del género Oryctolagus. Mide hasta 50 cm y su masa puede ser hasta 2.5 kg. Ha sido introducido en varios continentes y es la especie que se utiliza en la cocina y en la cunicultura. Está incluido en la lista 100 de las especies exóticas invasoras más dañinas del mundo de la Unión Internacional para la Conservación de la Naturaleza. Su introducción en Australia es uno de los capítulos más importantes del deterioro causado por especies exóticas invasoras.',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/Oryctolagus_cuniculus',
      },
   ],
};
