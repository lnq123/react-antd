import React, { Component } from "react";
import { Modal, Button, Icon, Input, Checkbox, Row, Col } from 'antd';

class ModalLogin extends Component {


    state = {
        login: false
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    render() {
        const { modalLoginOpen, onCloseLoginModal } = this.props
        const { login } = this.state
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Modal
                    title="登录/注册"
                    visible={false}
                    // visible={modalLoginOpen}
                    footer={null}
                    // onOk={this.handleOk}
                    onCancel={onCloseLoginModal}
                >
                    {
                        login &&
                        <Row>
                            <Col className="margin">
                                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
                            </Col>
                            <Col className="margin">
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            </Col>
                            <Col className="margin" span={18}>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                            <Col className="margin" span={6}>
                                <a className="login-form-forgot">Forgot password</a>
                            </Col>
                            <Col className="margin" span={24}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                            </Button>
                            </Col>
                            <Col className="margin">
                                Or <a onClick={() => { this.setState({ login: false }) }}>register now!</a>
                            </Col>
                        </Row>
                    }
                    {
                        !login &&
                        <Row>
                            <Col className="margin">
                                <Input required prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
                            </Col>
                            <Col className="margin">
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            </Col>
                            <Col className="margin">
                                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                            </Col>
                            <Col className="margin" span={24}>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Register
                                </Button>
                            </Col>
                            <Col className="margin">
                                Or <a onClick={() => { this.setState({ login: true }) }}>Log in!</a>
                            </Col>
                        </Row>
                    }
                </Modal>
            </div>
        );
    }
}

export default ModalLogin;