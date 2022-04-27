import React, { Dispatch, SetStateAction } from "react";

interface AppContextInterface {
  radius: number;
  setRadius: Dispatch<SetStateAction<number>>;
}

const DataContext = React.createContext<AppContextInterface | null>(null);

export default DataContext;
