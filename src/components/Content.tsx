import '../styles/content.scss'

import { MovieCard } from './MovieCard';


export function Content({ onSelectedGenre, stateMovies }) {
  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {onSelectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {stateMovies.map(movie => (
              <MovieCard 
                key ={movie.imdbID} 
                title={movie.Title} 
                poster={movie.Poster} 
                runtime={movie.Runtime} 
                rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}