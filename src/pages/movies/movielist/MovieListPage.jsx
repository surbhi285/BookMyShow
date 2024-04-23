import React, { useState } from "react";
import { Card } from 'antd';
import { Col, Row } from 'antd';
import Filters from "./FilterMovie";
import Movies from "./MovieList";

export default function MovieListPage({ onSelectMovie,
    showModal,
    payload,
    initFormData,
    updatedCount}) {
    const [searchObj, setSearchObj] = useState({});
    const [listUpdatedCount, setListUpdatedCount] = useState(null);
    const handleSelectMovie = (movieId) => {
        onSelectMovie(movieId);
    };
    return (
        <>
            <Card style={{ backgroundColor: "white" }} >
                <h1>Movies In Delhi-NCR</h1>
                <Row gutter={[16, 16]}>
                    <Col span={6}>
                        <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
                    </Col>
                    <Col span={18}>
                        <Movies 
                        payload={payload}
                        initFormData={initFormData}
                        updatedCount={updatedCount}
                        showModal = {showModal}
                        onSelectMovie={handleSelectMovie}
                         searchObj={searchObj} 
                         listUpdatedCount={listUpdatedCount} />
                    </Col>
                </Row>
            </Card>
        </>
    )
}






// import React, { useState } from "react";
// import { Card } from 'antd';

// import { Col, Row} from 'antd';
// import Filters from "./FilterMovie";
// import Movies from "./MovieList";

// export default function MovieListPage({ onSelectMovie }) {
//     const [searchObj, setSearchObj] = useState({});
//     const [listUpdatedCount, setListUpdatedCount] = useState(null);

//     const handleSelectMovie = (movieId) => {
//         console.log(movieId,"harsh")
//         onSelectMovie(movieId); 
//     };


//     console.log("MovieListPage");
//     return (
//         <>
//             <Card style={{ backgroundColor: "white" }} >
//                 <h1>Movies In Delhi-NCR</h1>
//                 <Row gutter={[16, 16]}>
//       <Col span={4}>
//                 <Filters searchObj={searchObj} setSearchObj={setSearchObj} />
                
//                 {/* // style={{ */}
//                 {/* //     backgroundColor: "lightPink", */}
//                 {/* //    width:'130%' */}
//                 {/* // }} */}
                     
//                   </Col>
//       <Col span={20}>    
//                 <Movies onSelectMovie={handleSelectMovie} searchObj={searchObj} listUpdatedCount={listUpdatedCount}  />
//                 </Col> 
//                 </Row> 
                
//             </Card>
//         </>
//     )
// }


