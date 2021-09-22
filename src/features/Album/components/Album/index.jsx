import React from 'react';
import '../Album/style.css'
import PropTypes from 'prop-types';

Album.propTypes = {
    album: PropTypes.array.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album_thumbnaiUrl">
                <img src={album.thumbnaiUrl} alt={album.name} />
            </div>
            <p className="album_name">{album.name}</p>
        </div>
    );
}

export default Album;