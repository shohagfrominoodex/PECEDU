import Heading from "@/components/heading";
import ContactForm from "@/sections/contact/contactForm";
const address = {
    HeadQuarter:
        "1st Floor (North), House No -B/185, Lane -21, Mohakhali, DOHS Dhaka, Bangladesh 1206",
    London: "5th Floor, 167-169 Great Portland Street, London, England, W1W 5P",
    contact: {
        phone1: "+8801234567890",
        phone2: "+8801234567890",
        email: "info@pecedu.com",
    },
};

const Contact = () => {
    return (
        <div className="bg-gray-100">
            <div className="md:py-20 py-10 md:pt-40 pt-30 max-w-7xl mx-auto">
                <Heading
                    title="Get started with a free consultation with"
                    highlight="PecEdu Global."
                    color={false}
                    subtitle="- Contact US"
                    paragraph="As a partner of corporates, Eduvisors has multiple offices of all sizes and all potential of session."
                />
                <div className="bg-white p-5 rounded-4xl flex gap-5 shadow justify-between max-w-4xl mx-auto">
                    <div className="md:w-6/12 w-full">
                        <h2 className="text-3xl font-semibold mb-5 text-brand-primary">
                            Address
                        </h2>
                        <div className="bg-gray-100 p-5 rounded-3xl h-60">
                            <h3 className="text-xl text-brand-accent font-medium">
                                Bangladesh
                            </h3>
                            <p className="text-gray-600 font-light mt-1">
                                {address.HeadQuarter}
                            </p>
                            <h3 className="text-xl text-brand-accent font-medium mt-3">
                                London
                            </h3>
                            <p className="text-gray-600 font-light mt-1">
                                {address.London}
                            </p>
                        </div>
                    </div>
                    <div className="md:w-6/12 w-full">
                        <h2 className="text-3xl mb-5 font-semibold text-brand-primary">
                            Phone & Email
                        </h2>
                        <div className="bg-gray-100 p-5 rounded-3xl h-60">
                            <h3 className="text-xl text-brand-accent font-medium">
                                Phone
                            </h3>
                            <p className="text-gray-600 font-light mt-1">
                                {address.contact.phone1}
                            </p>
                            <p className="text-gray-600 font-light mt-1">
                                {address.contact.phone2}
                            </p>
                            <h3 className="text-xl text-brand-accent font-medium mt-3">
                                E-mail
                            </h3>
                            <p className="text-gray-600 font-light mt-1">
                                {address.contact.email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <ContactForm /> */}
            </div>
        </div>
    );
};

export default Contact;
