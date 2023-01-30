import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const charactersAtom = atom<[]>([]);

export const useFetch = (link: string) => {
  const [characters, setCharacters] = useAtom(charactersAtom);

  const getData = async (link: string) => {
    const response = await fetch(link);
    const data = await response.json();

    setCharacters(data.data);
  };

  useEffect(() => {
    getData(link);
  }, []);

  return characters;
};
