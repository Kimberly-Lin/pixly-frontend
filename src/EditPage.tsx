import { Redirect } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

import PixlyApi from './PixlyAPI';

const EDIT_TYPES = [['rotate', 'Rotate'], ['bw', 'Black & White'], ['resize', 'Resize'],
['side_flip', 'Horizontal Flip'], ['top_flip', 'Vertical Flip'],
['color_split', 'Color Split'], ['contrast', 'Contrast'], ['border', 'Border'], ['blur', 'Blur']];

/** Renders editting function for image
 * 
 * Props: id
 * State: isEditing, image
 * 
 * ImagePage -> {EditForm}
 * 
 * Location: /image/:id
 * 
 */

function EditForm({ id, handleEdit, fileLocation, }) {
  const [title, setTitle] = useState<string>("");
  const [result, setResult] = useState(null);

  console.log({result})

  async function saveEdits() {
      const result = await PixlyApi.saveEdits(id, fileLocation, title);
      setResult(result);
  }

  async function handleClick(evt) {
      evt.preventDefault();
      
      const resp = await PixlyApi.edit(id, fileLocation, evt.target.id) //"successful"
      console.log(resp, 'in EditForm');
      handleEdit(resp)
  }

  if (result){
    return <Redirect push to={`/image/${result[0].id}`} />
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
          <br/>
          <label className="col-sm-3 col-form-label" htmlFor="title">Title:</label>
              <input
                  className="form-control"
                  id="title"
                  type="textarea"
                  value={title}
                  style={{"marginBottom":"5px"}}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              />
          <button className="btn btn-primary" onClick={saveEdits}>Save Edits!</button>
      </div >
  )
}

export default EditForm;