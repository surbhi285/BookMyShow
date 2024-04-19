import { Button, Card, Watermark, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { Typography } from 'antd';

import { getArtist } from "../../services/artist/artist";
import { useParams } from "react-router-dom";
const { Text } = Typography;


const ArtistDetailPage = ({back,artistId}) => {
    // const params=useParams()
    // let artistId=params.artistId
    const [artistDetails, setArtistDetails] = useState(null);
    
    useEffect(() => {
        getArtist()
            .then((data) => {
                // console.log("promise data", data)
                setArtistDetails(data); 
            })
    }, [])
    
    
    

    let selectedArtist=null
    if (artistDetails) {
        selectedArtist = artistDetails.find(artist => artist.artistId == artistId);
     }

    return (
        <>
            {selectedArtist ? (
                <>
               
                <Button style={{
            fontSize: '20px',
            color:"black",
            backgroundColor:"red",
            width:'60px',
            height:'40px',
            alignItems:'center'

        }}onClick={back}>back</Button>
              
                <>
                      <Card
                // style={{ backgroundColor: "white" }},
                
                style={{
                    
                backgroundColor:"black",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height:500
                 }}
            >
                <Row>
                    <Col span={8}

                        hoverable
                        style={{
                            width: "100%",
                            height: 500,
                        }}
                    >
                        {<img style={{ width: 350, height: 350 ,borderRadius:"50%",marginLeft:"100px",marginTop:"50px"}}
                            src={selectedArtist.image}
                            alt={selectedArtist.name} />}
                        
                    </Col>
                    <Col span={16}
                        style={{
                            width: "100%",
                            height: 600,
                            textAlign: "left",
                            padding: "50px",
                        }}>
                        <Watermark style={{
                            width: "100%",
                            height: 500,

                        }} content={selectedArtist.name}>
                            <h1 style={{color:"white",fontSize:"50px"}}>{selectedArtist.name}</h1>
                            
                          <Text style={{color:"white",fontSize:"20px"}}> {"Role:  "}     {selectedArtist.role+" "}{"   "}</Text>
                            <br></br>
                            <Text style={{color:"white",fontSize:"20px"}}>
                            {"Born:  "}   {selectedArtist.born}{" "}
                                
                                <br></br>
                                {"Birthplace:  "} {selectedArtist.birthplace}{" "}    
                                <br></br>
                                {"KnownAs:  "}    {selectedArtist.knownAs + " "}
                            </Text>
                        </Watermark>
                    </Col>
                </Row>
            </Card>
           <div style={{marginLeft:"150px",marginRight:"150px",marginBottom:"50px"}}>
            <h1> About</h1>
          <Text style={{fontSize:"20px"}}> {selectedArtist.about}</Text> 
          </div>
            </>
            </>   
            ) : (
                <Card>
                    Loading...
                </Card>
            )}
        </>
    );
}

export default ArtistDetailPage;










