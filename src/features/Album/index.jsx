import React from 'react';
import AlbumList from './components/AlbumList'
import PropTypes from 'prop-types';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'Sleep Away',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/1/9/c/c/19ccdfed9387bbf331a743775e04b7c9.jpg',
        },
        {
            id: 2,
            name: 'Rap Viet Nghe La Nghien',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/b/d/cbbdfde4559acd3951a894648f543cd0.jpg',
        },
        {
            id: 3,
            name: '#ZINGCHART',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/7/c/9/97c960ac271e94fa47c87a12aa7d3be5.jpg',
        },
        {
            id: 4,
            name: 'Nhạc Việt Được Nghe Nhiều',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/8/8/a/1/88a128c0862363b40d395dff2a62921e.jpg',
        },
        {
            id: 5,
            name: 'Chỉ có thể là Rhymastic',
            thumbnaiUrl:'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/d/7/a/0d7a004000e10b0a6010649c97846c59.jpg',
        },
    ]
    return (
        <div>
            <h3>ALBUMLIST</h3>
            <AlbumList albumList={albumList}/>
        </div>
    );
}

export default AlbumFeature;