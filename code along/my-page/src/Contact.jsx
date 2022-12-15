import { Grid, Input, Button } from '@nextui-org/react';

function Contact() {
    return (
        <div className='container'>
            <div className="p-5 mt-5">
                <div className="row border shadow rounded">
                    <div className="col-lg-4 border">
                        <div className="p-4 mt-4 mb-5">
                            <h3 className="mb-4 fs-1">
                                <strong>Contact Us</strong>
                            </h3>
                            <p>Email Address</p>
                            <Input clearable contentRightStyling={false} placeholder="user@example.com" type="email" className="form-control"></Input>
                            <p className="mt-3">Message us</p>
                            <Grid>
                                <Input
                                    clearable
                                    contentRightStyling={false}
                                    placeholder="Type your message..."
                                    contentRight={
                                        <Button auto color="primary" rounded flat><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                        </svg></Button>
                                    }
                                />
                            </Grid>
                        </div>
                    </div>
                    <div className="col-lg-7 text-center">
                        <div className="row p-5 align-middle">
                            <div className="col-6">
                                <h3 className="fs-1 mb-5">
                                    <strong>OPEN</strong>
                                </h3>
                                <div>
                                    <strong>Monday - Friday</strong>
                                    <p>7AM - 12AM</p>
                                    <br />
                                    <strong>Saturday</strong>
                                    <p>7AM - 10PM</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className='img-fluid d-block w-100' style={{height: "50vh"}} src="https://findicons.com/files/icons/880/icon_shop/256/coffee_shop.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact;