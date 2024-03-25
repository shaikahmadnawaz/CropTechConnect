import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import FaqAccordion from "./FaqAccordion";

const FaqPage = () => {
    const faqs = [
        {
          question: "What crops are suitable for Andhra Pradesh's climate?",
          answer:
            "Andhra Pradesh's climate is suitable for crops such as rice, cotton, sugarcane, mango, and chillies, among others.",
        },
        {
          question: "How can I protect my crops from pests?",
          answer:
            "There are various methods to protect crops from pests including integrated pest management, using natural predators, and organic pesticides.",
        },
        {
          question: "What are the government schemes available for farmers in Andhra Pradesh?",
          answer:
            "Andhra Pradesh government offers schemes like Rythu Bharosa, PM Kisan Samman Nidhi Yojana, and YSR Free Crop Insurance Scheme, among others, to support farmers.",
        },
        {
          question: "How do I improve soil fertility?",
          answer:
            "Soil fertility in Andhra Pradesh can be improved by practices like crop rotation, green manuring, composting, and using organic fertilizers.",
        },
        {
          question: "Where can I get information about market prices for crops?",
          answer:
            "You can get information about market prices for crops from local agricultural extension offices, online marketplaces, and mobile applications.",
        },
      ];
  
    return (
        <>
            <Header />
            <section className="">
              <div className="container bg-gray-100 p-10 grid place-items-center mt-14">
                <p className="text-2xl font-medium text-green-600 my-12">
                Frequently Asked Questions
                  <br />
                </p>
                <FaqAccordion faqs={faqs} />
                
              </div>
            </section>
            <Footer />
        </>
    );
};

export default FaqPage;
