
export const getTypeColor = (types) => {
    const typeColors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      grass: '#78C850',
      electric: '#F8D030',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dark: '#705848',
      dragon: '#7038F8',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
    };
  
    
    // Check if types is defined and not empty
    if (types && types.length > 0) {
      const typeColor = types.find((type) => typeColors[type.type.name]);
      return typeColor ? typeColors[typeColor.type.name] : '#B0B0B0'; // Default gray color if type is not found
    } else {
      return '#B0B0B0'; // Default gray color if types is undefined or empty
    }
  };
  