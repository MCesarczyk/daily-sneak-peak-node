import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import { AVATAR_UPLOAD_URL } from '../../assets/links';
import { ButtonsWrapper, UploaderWrapper } from './styled';

class AvatarUploader extends React.Component {
  state = {
    image: ''
  };

  onImageSave = async () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const convertedFile = await canvasScaled.toDataURL();

      const response = await fetch(`${AVATAR_UPLOAD_URL}/${this.props.id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'image': convertedFile
        })
      })
      if (response?.statusText === "OK") console.log("uploaded");
    }
  }

  setEditorRef = (editor) => (this.editor = editor)

  render() {
    return (
      <UploaderWrapper>
        <div>
          <AvatarEditor
            ref={this.setEditorRef}
            image={this.state.image}
            width={200}
            height={200}
            border={40}
            scale={1.8}
            rotate={0}
          />
          <ButtonsWrapper>
            <input
              name="file"
              type="file"
              onChange={(e) => this.setState({ image: e.target.files[0] })}
            />
            <button onClick={this.onImageSave}>SAVE</button>
          </ButtonsWrapper>
        </div>
      </UploaderWrapper>
    )
  }
}

export default AvatarUploader;