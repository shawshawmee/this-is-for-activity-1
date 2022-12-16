import Map from "./Contacts/Map";
import ContactInfo from "./Contacts/ContactInfo";

function Contact() {
    return (
        <div className='container'>
            <div className="p-5 mt-5 mb-5">
                <div className="row border shadow rounded">
                    <div className="col-lg-5 border">
                        <ContactInfo />
                    </div>
                    <div className="col-lg-7">
                        <Map />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact;