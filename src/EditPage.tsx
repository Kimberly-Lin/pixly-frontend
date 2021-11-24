import { Redirect } from 'react-router-dom';

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

function EditPage({ id, handleEdit, fileLocation, }) {

    async function saveEdits() {
        //TODO: caption is hardcoded. Should implement form later
        const result = await PixlyApi.saveEdits(id, fileLocation, 'caption');
        //TODO: redirect does not work
        return <Redirect push to={`/image/${result.id}${result.file_extension}`} />;
    }

    async function handleClick(evt) {
        evt.preventDefault();
        const resp = await PixlyApi.edit(id, fileLocation, evt.target.id) //"successful"
        console.log(resp, 'in EditPage');
        handleEdit(resp)
    }

    return (
        <div> {
            EDIT_TYPES.map(editType => (
                <button className="btn btn-light"
                    onClick={handleClick}
                    id={editType[0]}
                    key={editType[0]}>
                    {editType[1]}
                </button>
            ))
        }
            <button className="btn btn-primary" onClick={saveEdits}>Save Edits!</button>
        </div >

    )

}

export default EditPage;