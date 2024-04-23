import React, { useState } from 'react';
import { ContentFile, SearchBar } from './ContentFile';
import WrapperMovies from '../movies/WrapperMovies';
import EventWrapper from '../events/EventWrapper';
import Carousels from './Carousels';
import { Divider } from 'antd';

const ParentComponent = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (value) => {
    setInputText(value);
  };
  console.log(inputText, "nivisha")
  return (
    <>
      <SearchBar setInputText={handleInputChange} />
      {inputText && <ContentFile inputText={inputText} />}
      {!inputText && <Carousels />}
      {!inputText && <WrapperMovies /> }
      {!inputText && <EventWrapper />}




    </>
  );
};

export default ParentComponent;
