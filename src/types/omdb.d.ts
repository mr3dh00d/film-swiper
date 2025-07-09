export type OMDBDiscoverResponse = {
  Search: Array<MovieData>
  totalResults: string
  Response: 'True' | 'False'
}

type MovieData = {
  Title: string
  Year: string
  imdbID: string
  Type: 'movie'
  Poster: string
}
