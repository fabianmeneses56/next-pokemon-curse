// esto fue generado por una herramienta de auto-generación de interfaces
// quicktype.io
export interface PokemonListResponse {
  count: number
  next?: string
  previous?: string
  results: SmallPokemon[]
}

export interface SmallPokemon {
  name: string
  url: string
  id: number
  img: string
}
