import { createContext, useContext, useState } from 'react';

export const FavoritesContext = createContext();
FavoritesContext.displayName = 'MyFavorites';

export default function FavoritesProvider({ children }) {
  const [favorite, SetFavorite] = useState([]);

  return (
    <FavoritesContext.Provider value={{ favorite, SetFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavoriteContext() {
  const { favorite, SetFavorite } = useContext(FavoritesContext);

  function addFavorite(newFavorite) {
    const repeatedFavorite = favorite.some((item) => item.id === newFavorite.id);

    let newList = [...favorite];

    if (!repeatedFavorite) {
      newList.push(newFavorite);
      return SetFavorite(newList);
    }

    newList = favorite.filter((fav) => fav.id !== newFavorite.id);
    return SetFavorite(newList);
  }

  return {
    favorite,
    addFavorite,
  };
}
