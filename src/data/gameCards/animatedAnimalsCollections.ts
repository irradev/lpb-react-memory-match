import { v4 } from 'uuid';

import { CardsCollection } from '../../store/cards/cardsSlice';

export const oldPicturesCollection: CardsCollection = {
   id: v4(),
   name: 'Famosas Pinturas Antiguas',
   description: 'Descubre 5 de las famosas pinturas de todos los tiempos.',
   backgroundImage:
      'https://media.timeout.com/images/105798187/750/562/image.jpg',
   cards: [
      {
         id: v4(),
         name: 'La Gioconda (Mona Lisa) - Leonardo da Vinci',
         imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/158px-Mona_Lisa.jpg',
         info: 'Su nombre, La Gioconda (la Alegre, en castellano), deriva de la tesis más aceptada acerca de la identidad de la modelo: la esposa de Francesco Bartolomeo de Giocondo, que realmente se llamaba Lisa Gherardini, de donde viene su otro nombre: Monna (señora, en el italiano antiguo) Lisa.',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/La_Gioconda',
      },
      {
         id: v4(),
         name: 'Guernica (cuadro) - Pablo Picasso',
         imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mural_del_Gernika.jpg/320px-Mural_del_Gernika.jpg',
         info: 'Su interpretación en profundidad es objeto de controversia, ya que varias figuras son simbólicas y suscitan opiniones dispares; pero su valor artístico está fuera de discusión. No solo es considerado una de las obras más importantes del arte del siglo xx, sino que se ha convertido en un auténtico «icono del siglo xx», símbolo de los terribles sufrimientos que la guerra inflige a los seres humanos.',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/Guernica_(cuadro)',
      },
      {
         id: v4(),
         name: 'La noche estrellada - Vincent Van Gogh',
         imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/303px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
         info: 'A raíz de la crisis sufrida el 23 de diciembre de 1888 que resultó en la automutilación de su oreja izquierda,Van Gogh ingresó voluntariamente en el manicomio de Saint-Paul-de-Mausole el 8 de mayo de 1889. Ubicado en un antiguo monasterio, Saint-Paul-de-Mausole que atendía a los ricos y estaba a menos de la mitad de su capacidad cuando llegó Van Gogh, lo que le permitió ocupar no solo un dormitorio en el segundo piso, sino también una habitación en la planta baja para utilizar como estudio de pintura',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/La_noche_estrellada',
      },
      {
         id: v4(),
         name: 'La última cena - Leonardo da Vinci',
         imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/320px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg',
         info: 'La última cena (en italiano: Il cenacolo o L’ultima cena) es una pintura mural original de Leonardo da Vinci ejecutada entre 1495 y 1498. Muchos expertos e historiadores del arte consideran La última cena como una de las mejores obras pictóricas del mundo.',
         moreInfoUrl:
            'https://es.wikipedia.org/wiki/La_%C3%BAltima_cena_(Leonardo_da_Vinci)',
      },
      {
         id: v4(),
         name: 'La joven de la perla',
         imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/205px-Meisje_met_de_parel.jpg',
         info: 'La joven de la perla (en neerlandés Het meisje met de parel), también conocida como Muchacha con turbante, es una de las obras maestras del pintor neerlandés Johannes Vermeer realizada entre 1665 y 1667. Como el nombre indica, utiliza un pendiente de perla como punto focal. La pintura se encuentra actualmente en el museo Mauritshuis de La Haya.',
         moreInfoUrl: 'https://es.wikipedia.org/wiki/La_joven_de_la_perla',
      },
   ],
};
