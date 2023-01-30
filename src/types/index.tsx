import { ReactNode } from "react";

export interface CharacterProps<T extends string> {
  char: {
    _id: T;
    name: T;
    school: T;
    birthday: T;
    photoUrl: T;
    image: T;
    imageSchool: T;
    damageType: T;
  };
}

export interface StudentsListProps<T extends string> {
  _id: T;
  name: T;
  names: {
    firstName: T;
    lastName: T;
    japanName: T;
    _id: T;
  };
  age: T;
  school: T;
  birthday: T;
  background: T;
  height: T;
  photoUrl: T;
  image: T;
  imageSpecial: T;
  imageSchool: T;
  hobbies: Array<T>;
  voice: T;
  voices: T;
  role: Array<T>;
  damageType: T;
  armorType: T;
  affinity: [
    { urban: T; urbanEmotion: T },
    { outdoors: T; outdoorsEmotion: T },
    { indoors: T; indoorsEmotion: T }
  ];
  weapon: T;
  weaponUnique: T;
  weaponImage: T;
  releaseDate: T;
}

export type ChildrenProps = {
  children: ReactNode;
};
