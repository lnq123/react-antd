import React, { Component } from 'react'
import { Row, Col, Button, Upload, Icon, message, Cascader, Input } from 'antd';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import { newsService } from '../../_services'
import draftToHtml from 'draftjs-to-html';
import './style.css'
// import htmlToDraft from 'html-to-draftjs';

const categories = [{
    value: '新闻',
    label: '新 闻',
}, {
    value: '政策',
    label: '政 策',
}, {
    value: '人物',
    label: '人 物',
}, {
    value: '行情',
    label: '行 情',
}, {
    value: '技术',
    label: '技 术',
}];


class NewArticle extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        loading: false,
        homeImg: null,
        tmpImg: null,
        cat: null,
        title: ''
    }

    handleChangeHomePicture = (info) => {
        const { tmpImg } = this.state
        this.setState({ loading: true });

        var reader = new FileReader();
        reader.readAsDataURL(tmpImg);
        let self = this
        reader.onloadend = function () {
            let base64data = reader.result;
            self.setState({
                loading: false,
                homeImg: base64data
            })
        }
    }

    beforeUpload = (file) => {
        let isGoodImg = false
        if (file.type === 'image/jpeg') {
            isGoodImg = true
        } else if (file.type === 'image/jpg') {
            isGoodImg = true
        } else if (file.type === 'image/png') {
            isGoodImg = true
        } else {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        if (!isGoodImg || !isLt2M) {
            return false;
        }

        this.setState({ tmpImg: file })
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    onSelectCat = (value) => {
        this.setState({ cat: value[0] })
    }

    onChangeTitle = (event) => {
        const { value } = event.target
        if (value.length > 30) {
            return message.error('Title too long!');
        }
        this.setState({ title: value })
    }

    onCreateArticle = async () => {
        const { editorState, title, cat, homeImg } = this.state;
        const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        if (!title) {
            message.error('Failed : Title empty!');
        }
        if (!cat) {
            message.error('Failed : Category not selected!');
        }
        if (!homeImg) {
            message.error('Failed : Image not uploaded!');
        }

        const tmp = {
            title: title,
            titleImg: homeImg,
            category: cat,
            content: content,
        }
        const ret = await newsService.create(tmp)
        if (ret) {
            message.success('The article is uploaded!');
            this.setState({
                editorState: EditorState.createEmpty(),
                homeImg: null,
                tmpImg: null,
                cat: null,
                title: ''
            })
        }
    }

    render() {
        const { editorState, homeImg, title } = this.state;
        const uploadButton = (
            <div>
                <Icon className="uploadImgButton" type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );

        return (
            <div className="mainHomepage adminCreateNews">
                <Row style={{ marginBottom: '50px' }}>
                    <Col>
                        <h2>文章投稿</h2>
                    </Col>
                </Row>
                <Row >
                    <Col span={23}>
                        标题 (30字内)
                    </Col>
                    <Col span={1}>
                        {title.length}/30
                    </Col>
                    <Col span={24} style={{ marginBottom: '20px', marginTop: '10px' }}>
                        <Input style={{ height: '45px' }} value={title} onChange={this.onChangeTitle} placeholder="Title" />
                    </Col>
                    <Col span={7}>
                        <div style={{ marginBottom: '10px' }}>
                            封面图片（png/jpg）
                        </div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatarUploader"
                            showUploadList={false}
                            beforeUpload={this.beforeUpload}
                            onChange={this.handleChangeHomePicture}
                        >
                            {homeImg ? <img src={homeImg} width={275} height={169} alt="avatar" /> : uploadButton}
                        </Upload>
                    </Col>
                    <Col span={4}>
                        <div style={{ marginBottom: '10px' }}>
                            文章分类
                        </div>
                        <Cascader options={categories} onChange={this.onSelectCat} placeholder="请选择文章分类" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={this.onEditorStateChange}
                            wrapperClassName="articleWrapper"
                            editorClassName="articleEditor"
                            toolbar={{
                                options: ['inline', 'blockType', 'fontSize', 'textAlign', 'image'],
                                inline: {
                                    options: ['bold', 'italic', 'underline']
                                },
                                link: {
                                    inDropdown: true
                                },
                                image: {
                                    alignmentEnabled: false,
                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png',
                                    alt: { present: false, mandatory: false },
                                },
                            }}
                        />
                    </Col>
                    {/* <textarea
                        disabled
                        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                    /> */}
                </Row>
                <Row style={{ marginBottom: '50px' }}>
                    <Col>
                        <Button onClick={this.onCreateArticle} type="primary" ghost>发 布</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NewArticle;