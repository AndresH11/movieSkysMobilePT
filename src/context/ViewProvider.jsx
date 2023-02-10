import { createContext, useContext, useState } from "react";

export const ViewContext = createContext();

const ViewProvider = ({ children }) => {
  const [ viewDetails, setViewDetails ] = useState(false);
  return(
    <ViewContext.Provider
      value={{
        viewDetails,
        setViewDetails
        }} >
      { children }
    </ViewContext.Provider>
  );
};

export default ViewProvider;

export const useViewDetails = ()=> {
  const context = useContext(ViewContext);
  return context;
}