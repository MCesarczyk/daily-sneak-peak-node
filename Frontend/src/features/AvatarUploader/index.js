import React from 'react';
import { Button } from '@mui/material';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import AvatarEditor from 'react-avatar-editor';
import Dropzone from 'react-dropzone'
import { AVATAR_UPLOAD_URL } from '../../assets/links';
import { ButtonsWrapper, FileInput, Slider, SliderWrapper, UploaderWrapper } from './styled';

class AvatarUploader extends React.Component {
  state = {
    image: '',
    fileName: '',
    position: { x: 0.5, y: 0.5 },
    uploaded: false,
    scale: 1.5,
    rotate: 0
  };

  avatarFileName = `avatars/${Date.now().toString()}-${Math.random().toString().substring(2)}`;

  onImageSelect = e => {
    this.setState({
      image: e.target.files[0],
      fileName: this.avatarFileName
    });
  };

  onImageDrop = dropped => {
    this.setState({
      image: dropped[0],
      fileName: this.avatarFileName
    })
  };

  onScaleChange = e => {
    this.setState({ scale: e.target.value, uploaded: false });
  };

  onRotationChange = e => {
    this.setState({ rotate: e.target.value, uploaded: false });
  };

  onPositionChange = position => {
    this.setState({ position, uploaded: false });
  };

  onImageSave = async () => {
    if (this.editor) {
      const canvasScaled = this.editor.getImageScaledToCanvas();
      const convertedFile = await canvasScaled.toDataURL();

      const response = await fetch(AVATAR_UPLOAD_URL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'image': convertedFile,
          'name': this.state.fileName
        })
      })

      if (response?.statusText === "OK") {
        this.props.onAvatarChange(this.state.fileName);
        this.setState({ uploaded: true });
      }
    }
  };

  setEditorRef = editor => this.editor = editor;
  setInputRef = input => this.input = input;

  render() {
    return (
      <UploaderWrapper>
        <div>
          <Dropzone
            onDrop={this.onImageDrop}
            noClick
            noKeyboard
            style={{ width: "350px", height: "350px" }}
          >
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <AvatarEditor
                  ref={this.setEditorRef}
                  image={this.state.image}
                  position={this.state.position}
                  scale={parseFloat(this.state.scale)}
                  rotate={parseFloat(this.state.rotate)}
                  onPositionChange={this.onPositionChange}
                  width={200}
                  height={200}
                  border={40}
                />
                <input {...getInputProps()} />
              </div>
            )}
          </Dropzone>
          <SliderWrapper>
            <div>
              <ZoomOutIcon />
              <Slider
                type="range"
                name="zoom"
                min={1.0}
                max={5.0}
                defaultValue={1.5}
                step={0.01}
                onChange={this.onScaleChange}
              />
              <ZoomInIcon />
            </div>
            <div>
              <RotateLeftIcon />
              <Slider
                type="range"
                name="rotate"
                min={-180}
                max={180}
                defaultValue={0}
                step={0.01}
                onChange={this.onRotationChange}
              />
              <RotateRightIcon />
            </div>
          </SliderWrapper>
          <ButtonsWrapper>
            <FileInput
              ref={this.setInputRef}
              name="file"
              type="file"
              onChange={this.onImageSelect}
            />
            <Button onClick={() => this.input.click()}>SELECT FILE</Button>
            <Button
              disabled={this.state.uploaded}
              onClick={this.onImageSave}
            >
              {this.state.uploaded ? 'UPLOADED' : 'UPLOAD'}
            </Button>
          </ButtonsWrapper>
        </div>
      </UploaderWrapper>
    )
  }
}

export default AvatarUploader;