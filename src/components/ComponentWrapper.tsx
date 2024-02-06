import React from "react";

import { P } from "../styledSystem/StyledSystemComponents";

interface IWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  errors: string;
  headerTitle: string;
}

const StasticsComponentWrapper: React.FC<IWrapperProps> = ({
  isLoading,
  errors,
  headerTitle,
  children,
}) => {
  return (
    <>
      <h3>{headerTitle}</h3>
      {isLoading ? <P>Loading...</P> : children}
      {errors !== "" && <P>{errors}</P>}
    </>
  );
};

export default StasticsComponentWrapper;
