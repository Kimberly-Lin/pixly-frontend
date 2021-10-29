import react, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import PixlyApi from './PixlyAPI';

const EDIT_TYPES = [['rotate', 'Rotate'], ['bw', 'Black & White'], ['resize', 'Resize'],
['side_flip', 'Horizontal Flip'], ['top_flip', 'Vertical Flip'],
['color_split', 'Color Split'], ['contrast', 'Contrast'], ['border', 'Border'], ['blur', 'Blur']];

/** Renders editting function for image
 * 
 * Props: id
 * State: isEditing, image
 * 
 * ImagePage -> {Edit}
 * 
 * Location: /image/:id
 * 
 */

function EditPage({ id, handleEdit, fileLocation }) {

    async function saveEdits() {
        const result = await PixlyApi.saveEdits(id, fileLocation, 'caption');
        return <Redirect push to={`/image/${result.imgUrl}`} />;
    }

    async function handleClick(evt) {
        evt.preventDefault();
        const resp = await PixlyApi.edit(id, fileLocation, evt.target.id) //"successful"
        handleEdit(resp.file_location)
    }

    return (
        <div> {
            EDIT_TYPES.map(editType => (
                <button
                    onClick={handleClick}
                    id={editType[0]}
                    key={editType[0]}>
                    {editType[1]}
                </button>
            ))
        }
            <button onClick={saveEdits}>Save Edits!</button>
        </div >

    )

}

export default EditPage;