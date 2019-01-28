import React, { Component } from "react";
import { Modal, Button, Icon, Input, Checkbox, Row, Col, message } from 'antd';
import { connect } from 'react-redux'
import { userService } from '../../_services'
import { userActions } from '../../_actions'

class ModalLogin extends Component {

    state = {
        login: true,
    }

    handleChange = e => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    onLogin = () => {
        const { loginPhone, loginPassword } = this.state
        this.props.login(loginPhone, loginPassword)
    }

    onRegister = async () => {
        const { registerPhone, registerPassword, registerConfirmPassword } = this.state
        if (registerPassword !== registerConfirmPassword) {
            message.error('Oups... Password is not the same!');
            return
        }
        let ret = await userService.create({ phone: registerPhone, password: registerPassword })
        if (ret) {
            message.success('Account created!');
            this.setState({
                login: true
            })
        } else {
            message.error('Account creation failed!');
        }
    }


    render() {
        const { modalLoginOpen, onCloseLoginModal } = this.props
        const { login } = this.state
        // const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Modal
                    title="登录/注册"
                    // visible={false}
                    visible={modalLoginOpen}
                    footer={null}
                    onCancel={onCloseLoginModal}
                >
                    {
                        login &&
                        <Row>
                            <Col className="margin">
                                <Input onChange={this.handleChange} name="loginPhone" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone number" />
                            </Col>
                            <Col className="margin">
                                <Input onChange={this.handleChange} name="loginPassword" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            </Col>
                            <Col className="margin" span={18}>
                                <Checkbox>Remember me</Checkbox>
                            </Col>
                            <Col className="margin" span={6}>
                                <a className="login-form-forgot">Forgot password</a>
                            </Col>
                            <Col className="margin" span={24}>
                                <Button onClick={this.onLogin} type="primary" htmlType="submit" className="login-form-button">
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
                                <Input name="registerPhone" onChange={this.handleChange} required prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Phone number" />
                            </Col>
                            <Col className="margin">
                                <Input name="registerPassword" onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                            </Col>
                            <Col className="margin">
                                <Input name="registerConfirmPassword" onChange={this.handleChange} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Confirm Password" />
                            </Col>
                            <Col className="margin" span={24}>
                                <Button onClick={this.onRegister} type="primary" htmlType="submit" className="login-form-button">
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

// const mapStateToProps = state => {
//     console.log('STATE', state)

//     const { userData } = state
//     return {
//         userData,
//     }
// }

const mapDispatchToProps = dispatch => ({
    login: (phone, password) => dispatch(userActions.login({phone, password})),
})

export default connect(
    null,
    mapDispatchToProps
)(ModalLogin)