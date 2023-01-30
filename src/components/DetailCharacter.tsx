const DetailCharacter = ({ character }) => {
  return (
    <div>
      <img
        src={
          character.photoUrl.includes("static-new")
            ? character.photoUrl.replace("static-new", "static")
            : character.photoUrl
        }
        alt="gambar detail"
        loading="lazy"
      />
      <p>{character.name}</p>
      <p>{character.school}</p>
    </div>
  );
};

export default DetailCharacter;
