import PreHeader from "../../components/preheader/preheader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/footer";
import React, { useState } from "react";

const Fertilizer = () => {
  const [load, setLoad] = useState(false);
  const [soilType, setSoilType] = useState("");
  const [cropType, setCropType] = useState("");
  const [city, setCity] = useState("");
  const [prediction, setPrediction] = useState("");
  const [information, setInformation] = useState("");
  const [application, setApplication] = useState("");
  const [specification, setSpecification] = useState("");

  const predictFertilizer = () => {
    let predictedFertilizer = "";

    switch (cropType) {
      case "Wheat":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Maize":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Sugarcane":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Cotton":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Ground Nuts":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Oil seeds":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Tobacco":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Millets":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Pulses":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Barley":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      case "Paddy":
        predictedFertilizer =
          soilType === "Clay"
            ? "NPK"
            : soilType === "Sandy"
            ? "DAP"
            : soilType === "Loamy"
            ? "Urea"
            : "Unknown";
        break;
      default:
        predictedFertilizer = "Unknown";
        break;
    }

    setPrediction(predictedFertilizer);

    setInformation("Fertilizer Information");
    setApplication("Fertilizer Application");
    setSpecification("Fertilizer Specifications");
  };

  function onSearchSubmit() {
    setLoad(true);

    setTimeout(() => {
      predictFertilizer();
      setLoad(false);
    }, 2000);
  }

  return (
    <>
      {/* <PreHeader /> */}
      <Header />
      <section className="">
        <div className="grid place-items-center my-14  ">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14  ">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the Fertilizer for your crop
              <br />
            </p>

            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Soil Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Clay">Clay</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Loamy">Loamy</option>
                  <option value="Black">Black</option>
                  <option value="Red">Red</option>
                </select>
              </div>
            </div>
            {/* dropdown for crop type */}
            <div className="flex flex-row my-2 w-3/5">
              <div>Select a Crop Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setCropType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="Wheat">Wheat</option>
                  <option value="Maize">Maize</option>
                  <option value="Sugarcane">Sugarcane</option>
                  <option value="Cotton">Cotton</option>
                  <option value="Ground Nuts">Groundnut</option>
                  <option value="Oil seeds">Oilseed</option>
                  <option value="Tobacco">Tobacco</option>
                  <option value="Millets">Millets</option>
                  <option value="Pulses">Pulses</option>
                  <option value="Barley">Barley</option>
                  <option value="Paddy">Paddy</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row my-2 w-3/5">
              <div>Select District</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setCity(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="">Select District</option>
                  <option value="Anantapur">Anantapur</option>
                  <option value="Kadapa">Kadapa</option>
                  <option value="Kurnool">Kurnool</option>
                  <option value="Chittoor">Chittoor</option>
                  <option value="Nellore">Nellore</option>
                  <option value="Prakasam">Prakasam</option>
                  <option value="Guntur">Guntur</option>
                  <option value="Krishna">Krishna</option>
                  <option value="WestGodavari">West Godavari</option>
                  <option value="EastGodavari">East Godavari</option>
                  <option value="Visakhapatnam">Visakhapatnam</option>
                  <option value="Vizianagaram">Vizianagaram</option>
                  <option value="Srikakulam">Srikakulam</option>
                  <option value="YSRKadapa">YSR Kadapa</option>
                  <option value="YSRAnantapur">YSR Anantapur</option>
                </select>
              </div>
            </div>

            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={onSearchSubmit}
                  type="button"
                  className="inline-block  px-6 py-2.5 bg-green-600 text-white font-medium text-xs 
                  leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg
                  focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800
                  active:shadow-lg transition duration-150 ease-in-out"
                >
                  Get Fertilizer Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {load ? (
            <div className="grid place-items-center my-14">loading </div>
          ) : (
            <div></div>
          )}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center ">
              <p className="font-bold my-3">Fertilizer Predicted: </p>
              {prediction}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Fertilizer;
