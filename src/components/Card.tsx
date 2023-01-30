import { Link } from "react-router-dom";
import { CharacterProps } from "../types";

const Card = ({ char }: CharacterProps<string>) => {
  return (
    <div className="card bg-base-100 overflow-hidden w-96 card-compact">
      <figure>
        <img
          className="hover:scale-105 w-96 h-80 cursor-pointer transition-all ease-in-out"
          src={char.photoUrl}
          loading="lazy"
          alt="Gambar"
        />
      </figure>
      <div className="py-2 px-4 card-body text-white">
        <h2 className="card-title">{char.name}</h2>
        <p>{char.school}</p>
        <p>{char.birthday}</p>
        <p>{char.damageType}</p>
        <Link to={`/characters/detail/${char.name.toLowerCase()}`}>
          <button
            className="btn btn-primary"
            type="button"
            aria-label="See the detail"
          >
            See the detail
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
