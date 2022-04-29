export type UpDateSeachTextACType = {
  type: "UPDATE_SERCH_TEXT";
  addText: string;
};

export type LoginACType = {
  type: "UPDATE_ISAUTH";
  isAuth: boolean;
};

export type AddNameACType = {
  type: "ADD_NEW_NAME";
  name: string;
};
// src/Blog/Blocks
export type MapType = {
  id: number;
  day: string;
  fileType: string;
  picture: string;
  title: string;
  text: string;
  view: string;
};

// src/Search.tsx

export type AllType = {
  allList: ListType[];
  videoList: ListType[];
  photoList: ListType[];
  textList: ListType[];
};

export type ListType = {
  id: number;
  name: string;
  route: string;
  newsType: string;
};
