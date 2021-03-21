import '../styles/sidebar.scss'
import { Button } from './Button';

interface Props {
  onHandleClick: (number: number) => void;
  onSelectedGenreId: number;
  stateGenres: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }

}

interface PropsMap {
  id: number;
  title: string;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
}

export function SideBar({ onHandleClick, onSelectedGenreId, stateGenres }: Props) {
  return (
    <>
       <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {stateGenres.map(({ id, title, name }: PropsMap) => (
            <Button
              key={String(id)}
              title={title}
              iconName={name}
              onClick={() => onHandleClick(id)}
              selected={onSelectedGenreId === id}
            />
          ))}
        </div>

      </nav>
    </>
  )
}