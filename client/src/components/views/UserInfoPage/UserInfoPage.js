import React, { useEffect, useState } from 'react'
import { Row, Col,Descriptions, Button } from 'antd';
import { useSelector,useDispatch } from "react-redux";
import EditUserInfo from "./Sections/EditUserInfo"

function UserInfoPage () {

    const user = useSelector(state => state.user);

    const [TotalPrice, setTotalPrice] = useState(0);
    const [TotalBuy, setTotalBuy] = useState(0)
    const [Role, setRole] = useState("일반회원 🐭");
    const [IsEdit, setIsEdit] = useState(false);
    
    useEffect(() => {
        getTotalPrice(user.userData);
        getTotalBuy(user.userData);
    }, [user])
    
    const editUserInfoHandler = () => {
        setIsEdit(true);
    }

    const deleteUserInfoHandler = () => {

    }

    const getTotalPrice = (data) => {
        let total = 0;

        data && data.history.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        });

        setTotalPrice(total)
    }

    const getTotalBuy = (data) => {
        let total = 0;

        data && data.history.map(item => {
            total += item.quantity
        });

        setTotalBuy(total)
    }

    const getRole = (data) => {

        if(data.role === '1') {
            setRole("정회원 🐹");
        } else if(data.role === '2') {
            setRole("관리자 🐻");
        }
    }

    
    return (
        <div className="userInfo" style={{ width: '100%', padding: '3rem 4rem' }}>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>회원정보</h1>
            </div>

            <br />

            <Row gutter={[16, 16]} >
                <Col lg={10} xs={30}>
                    <img style={{ width: '400px', maxHeight: '400px', padding: '1rem 1rem'}}
                            src={user.userData && user.userData.image} alt="productImage" />
                            <br/><br/>
                 <Button style={{ width: '77%', padding: '2px'}} size="large" shape="round" type="primary" block
                    onClick={editUserInfoHandler}> Edit Profile </Button>
                <br/><br/>
                <Button style={{ width: '77%', padding: '2px'}} size="large" shape="round" type="primary" block
                    onClick={deleteUserInfoHandler}> Delete UserID </Button>

                </Col>
                <Col lg={10} xs={30}>
                    { !IsEdit && 
                        <Descriptions title={user.userData && user.userData.name +'(' + Role + ')'}> 
                            <Descriptions.Item label="Email"> {user.userData && user.userData.email}</Descriptions.Item>
                            <Descriptions.Item label="TotalBuyNumber">{TotalBuy}</Descriptions.Item>
                            <Descriptions.Item label="TotalBuyPrice">{TotalPrice}</Descriptions.Item>
                        </Descriptions>
                    }


                    <br />
                    {IsEdit && <EditUserInfo userInfo={user.userData}/>}
                </Col>
            </Row>
        </div>
    )
}

export default UserInfoPage