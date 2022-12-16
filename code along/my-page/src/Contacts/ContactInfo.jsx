import { Grid, Input, Button } from '@nextui-org/react';

function ContactInfo() {
    return (
        <div className='p-5 mb-4'>
            <h4 className="fs-1">
                <strong>Contact Us ☎</strong>
            </h4>
            <p className='mb-4'>+639123456789</p>
            <p>Email Address</p>
            <Input clearable type="email" placeholder="user@example.com"></Input>
            <p className="mt-3">Message us</p>
            <Grid>
                <Input
                    clearable
                    placeholder="Type your message..."
                    contentRight={
                        <Button auto color="success" rounded flat><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                        </svg></Button>
                    }
                />
            </Grid>
        </div>
    );
}

export default ContactInfo;