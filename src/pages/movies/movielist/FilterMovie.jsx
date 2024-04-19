import { Button, Collapse, Space } from "antd";
import React, { useState } from "react";
const genres = ["Action", "Sci-Fi", "Thriller", "Animation", "Comedy", "Adventure"];
const languages = ["Hindi", "English", "Tamil", "Telugu"];

export default function Filters({ searchObj, setSearchObj }) {
    const [activeGenres, setActiveGenres] = useState([]);
    const [activeLanguages, setActiveLanguages] = useState([]);
    return (
        <Collapse   >
        {/* accordion= to open one collapse at a time */}
            <Collapse.Panel header="Genres" key="genres" ghost>
                {genres.map((genre, index) => (
                    <Button
                        key={`genre-${index}`}
                        active={activeGenres.includes(genre)}
                        onClick={(e) => {
                            let genre = e.target.textContent;
                            // console.log("button object", genre);
                            if (searchObj.genre === genre) {
                                setSearchObj({ ...searchObj, genre: null })
                            }
                            else {
                                setSearchObj({ ...searchObj, genre })
                            }
                        }}
                        className={`${activeGenres.includes(genre) ? 'active-button' : ''} ${searchObj.genre === genre ? 'yellow-button' : 'green-button'}`}
                    >
                        {genre}
                    </Button>
                ))}
            </Collapse.Panel>
            <Collapse.Panel header="Languages" key="languages" ghost>
                {languages.map((language, index) => (
                    <Button
                        key={`language-${index}`}
                        active={activeLanguages.includes(language)}
                        onClick={(e) => {
                            let language = e.target.textContent;
                            // console.log("button object", language);
                            if (searchObj.language === language) {

                                setSearchObj({ ...searchObj, language: null })

                            }
                            else {
                                setSearchObj({ ...searchObj, language })
                            }
                        }}
                        className={`${activeLanguages.includes(language) ? 'active-button' : ''} ${searchObj.language === language ? 'yellow-button' : 'green-button'}`}
                    >
                        {language}
                    </Button>
                ))}

            </Collapse.Panel>
        </Collapse>
    );
}





