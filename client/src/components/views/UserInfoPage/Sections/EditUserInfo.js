import React, { useEffect, useState } from 'react';
import {Button, Form, Input} from 'antd';


function EditUserInfo(props) {

    const [UserInfo, setUserInfo] = useState({})

    useEffect(() => {
        setUserInfo(props.userInfo)
    }, [props.userInfo])

    const editCompletedHandler = () => {

    }

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    return (
        <Form>
            <Form.Item required label="Name">
                {console.log(UserInfo)}
                <Input
                    id="name"
                    placeholder={UserInfo.name}
                    type="text"
                />
            </Form.Item>

            <Form.Item required label="Old Password">
                <Input
                    id="password"
                    placeholder="Your Password"
                    type="password"
                />
              </Form.Item>

              <Form.Item required label="New Password">
                <Input
                    id="password"
                    placeholder="New Password"
                    type="password"
                />
              </Form.Item>

              <Form.Item required label="Again New Password">
                <Input
                    id="password"
                    placeholder="Confirm New Password"
                    type="password"
                />
              </Form.Item>


            <br/> 
            <Form.Item>
                <Button style={{ width: '90%', padding: '2px'}} size="large" shape="round" type="primary" block
                        onClick={editCompletedHandler}> Edit Completed  </Button>
            </Form.Item>
        </Form>

    )
}

export default EditUserInfo;