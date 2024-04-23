import React, { useEffect, useState } from "react";
import { getArtist } from "../../services/artist/artist";
import { useNavigate } from "react-router-dom";
import { Card, Space } from "antd";
import Meta from "antd/es/card/Meta";

const ArtistList = () => {
    const [artistDetails, setArtistDetails] = useState(null);
    
    useEffect(() => {
        getArtist()
            .then((data) => {
                setArtistDetails(data); 
            })
    }, [])

    return (
        <>
             {artistDetails && artistDetails.map((artist, index) => (
                <Space size="large">
                 <Artist index={artist.artistId}  artist={artist} />
                </Space>
                    ))}    
            
        </>
    )
};
export default ArtistList


const Artist = ({ artist, index}) => {
    return (
        <>
        <Card
        key={artist.artistId}
            hoverable
            style={{ width: 350 ,height:450,marginTop:"70px",marginLeft:"100px"}}
            cover={<img style={{ height: 350 }} src={artist.image} alt="Movie Poster" />}
            
        >
            <Meta title={artist.name} description={artist.role?.join(", ")} />
           
        </Card>
        
       
        </>
    )
}



































