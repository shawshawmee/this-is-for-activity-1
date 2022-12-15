import React from 'react';
import { Card, Grid, Row, Text, Modal, } from "@nextui-org/react";
import './Home.css';

function Home() {
    const list = [
        {
            title: "Hufflepuff Citrus Frappe",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/GF_0003_H-Drink_720x.jpg?v=1670571549",
            price: "₱50",
        },
        {
            title: "Gryffindor Berry Frappe",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/GF_0000_G-Drink_720x.jpg?v=1670571009",
            price: "₱50",
        },
        {
            title: "Ravenclaw Latte",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/GF_0002_R-Drink.jpg?v=1670571255",
            price: "₱50",
        },
        {
            title: "Slytherin Matcha Frappe",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/GF_0001_S-Drink.jpg?v=1670571147",
            price: "₱50",
        },
        {
            title: "Carbonara",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/carbonara_720x.jpg?v=1587037042",
            price: "₱50",
        },
        {
            title: "Caramelized Spam",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/caramelizedspam_720x.jpg?v=1587041060",
            price: "₱50",
        },
        {
            title: "Beef Tapa",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/beeftapa_220x.jpg?v=1587042076",
            price: "₱50",
        },
        {
            title: "Mushroom Omelette",
            img: "https://cdn.shopify.com/s/files/1/0273/4535/4826/products/2_220x.jpg?v=1587037182",
            price: "₱50",
        },
    ];
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };
    return (
        <div>
            <div className='bg-img d-flex align-items-center'>
                <div className='mx-auto text-center text-light'>
                    <h1 className='fw-bolder display-1'>TARA KAPE!</h1>
                    <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <Grid.Container className='mt-5 mb-5' gap={2} justify="flex-start" onClick={handler}>
                {list.map((item, index) => (
                    <Grid style={{ height: "50vh" }} xs={6} sm={3} key={index}>
                        <Card isPressable isHoverable>
                            <Card.Body css={{ p: 0 }}>
                                <Card.Image style={{ height: "100%" }}
                                    src={item.img}
                                    objectFit="cover"
                                    alt={item.title}
                                />
                            </Card.Body>
                            <Card.Footer className='bg-danger' css={{ justifyItems: "flex-start" }}>
                                <Row wrap="wrap" justify="space-between" align="center">
                                    <Text className='text-light' b>{item.title}</Text>
                                    <Text css={{ color: "$accents5", fontWeight: "$semibold", fontSize: "$sm" }}>
                                        {item.price}
                                    </Text>
                                </Row>
                            </Card.Footer>
                        </Card>
                    </Grid>
                ))}
            </Grid.Container>
            <Modal
                closeButton
                blur
                aria-labelledby="modal-title"
                open={visible}
                onClose={closeHandler}
            >
                <Modal.Header>
                    <h1 className='fw-bolder'>Order</h1>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Home;