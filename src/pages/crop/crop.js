import Footer from "../../components/Footer/footer";
import Header from "../../components/Header/Header";
import React, { useState } from "react";

const Crop = () => {
  const [load, setLoad] = useState(false);
  const [season, setSeason] = useState("");
  const [district, setDistrict] = useState("");
  const [soilType, setSoilType] = useState("");
  const [prediction, setPrediction] = useState("");
  const [lang, setLang] = useState("en");

  const mockPrediction = {
    Summer: {
      Anantapur: {
        Sandy: "Maize",
        Clay: "Sorghum",
        Loamy: "Groundnut"
      },
      Kadapa: {
        Sandy: "Rice",
        Clay: "Cotton",
        Loamy: "Red gram"
      },
      Kurnool: {
        Sandy: "Pearl millet",
        Clay: "Green gram",
        Loamy: "Soybean"
      },
      Chittoor: {
        Sandy: "Finger millet",
        Clay: "Pigeon pea",
        Loamy: "Sunflower"
      },
      Nellore: {
        Sandy: "Maize",
        Clay: "Cotton",
        Loamy: "Peanut"
      },
      Prakasam: {
        Sandy: "Rice",
        Clay: "Sorghum",
        Loamy: "Red gram"
      },
      Guntur: {
        Sandy: "Groundnut",
        Clay: "Chickpea",
        Loamy: "Soybean"
      },
      Krishna: {
        Sandy: "Maize",
        Clay: "Cotton",
        Loamy: "Pigeon pea"
      },
      WestGodavari: {
        Sandy: "Pearl millet",
        Clay: "Green gram",
        Loamy: "Sunflower"
      },
      EastGodavari: {
        Sandy: "Finger millet",
        Clay: "Pigeon pea",
        Loamy: "Soybean"
      },
      Visakhapatnam: {
        Sandy: "Maize",
        Clay: "Sorghum",
        Loamy: "Groundnut"
      },
      Vizianagaram: {
        Sandy: "Rice",
        Clay: "Cotton",
        Loamy: "Red gram"
      },
      Srikakulam: {
        Sandy: "Groundnut",
        Clay: "Chickpea",
        Loamy: "Soybean"
      },
      YSRKadapa: {
        Sandy: "Maize",
        Clay: "Cotton",
        Loamy: "Peanut"
      },
      YSRAnantapur: {
        Sandy: "Rice",
        Clay: "Sorghum",
        Loamy: "Red gram"
      }
    },
    Monsoon: {
      Anantapur: {
        Sandy: "Green gram",
        Clay: "Pearl millet",
        Loamy: "Black gram"
      },
      Kadapa: {
        Sandy: "Cowpea",
        Clay: "Finger millet",
        Loamy: "Horse gram"
      },
      Kurnool: {
        Sandy: "Mung bean",
        Clay: "Sesame",
        Loamy: "Peanut"
      },
      Chittoor: {
        Sandy: "Chickpea",
        Clay: "Lentil",
        Loamy: "Castor bean"
      },
      Nellore: {
        Sandy: "Green gram",
        Clay: "Pearl millet",
        Loamy: "Black gram"
      },
      Prakasam: {
        Sandy: "Cowpea",
        Clay: "Finger millet",
        Loamy: "Horse gram"
      },
      Guntur: {
        Sandy: "Mung bean",
        Clay: "Sesame",
        Loamy: "Peanut"
      },
      Krishna: {
        Sandy: "Chickpea",
        Clay: "Lentil",
        Loamy: "Castor bean"
      },
      WestGodavari: {
        Sandy: "Green gram",
        Clay: "Pearl millet",
        Loamy: "Black gram"
      },
      EastGodavari: {
        Sandy: "Cowpea",
        Clay: "Finger millet",
        Loamy: "Horse gram"
      },
      Visakhapatnam: {
        Sandy: "Mung bean",
        Clay: "Sesame",
        Loamy: "Peanut"
      },
      Vizianagaram: {
        Sandy: "Chickpea",
        Clay: "Lentil",
        Loamy: "Castor bean"
      },
      Srikakulam: {
        Sandy: "Green gram",
        Clay: "Pearl millet",
        Loamy: "Black gram"
      },
      YSRKadapa: {
        Sandy: "Cowpea",
        Clay: "Finger millet",
        Loamy: "Horse gram"
      },
      YSRAnantapur: {
        Sandy: "Mung bean",
        Clay: "Sesame",
        Loamy: "Peanut"
      }
    },
    Winter: {
      Anantapur: {
        Sandy: "Wheat",
        Clay: "Barley",
        Loamy: "Chickpea"
      },
      Kadapa: {
        Sandy: "Mustard",
        Clay: "Linseed",
        Loamy: "Lentil"
      },
      Kurnool: {
        Sandy: "Faba bean",
        Clay: "Field pea",
        Loamy: "Safflower"
      },
      Chittoor: {
        Sandy: "Oat",
        Clay: "Rapeseed",
        Loamy: "Flaxseed"
      },
      Nellore: {
        Sandy: "Wheat",
        Clay: "Barley",
        Loamy: "Chickpea"
      },
      Prakasam: {
        Sandy: "Mustard",
        Clay: "Linseed",
        Loamy: "Lentil"
      },
      Guntur: {
        Sandy: "Faba bean",
        Clay: "Field pea",
        Loamy: "Safflower"
      },
      Krishna: {
        Sandy: "Oat",
        Clay: "Rapeseed",
        Loamy: "Flaxseed"
      },
      WestGodavari: {
        Sandy: "Wheat",
        Clay: "Barley",
        Loamy: "Chickpea"
      },
      EastGodavari: {
        Sandy: "Mustard",
        Clay: "Linseed",
        Loamy: "Lentil"
      },
      Visakhapatnam: {
        Sandy: "Faba bean",
        Clay: "Field pea",
        Loamy: "Safflower"
      },
      Vizianagaram: {
        Sandy: "Oat",
        Clay: "Rapeseed",
        Loamy: "Flaxseed"
      },
      Srikakulam: {
        Sandy: "Wheat",
        Clay: "Barley",
        Loamy: "Chickpea"
      },
      YSRKadapa: {
        Sandy: "Mustard",
        Clay: "Linseed",
        Loamy: "Lentil"
      },
      YSRAnantapur: {
        Sandy: "Faba bean",
        Clay: "Field pea",
        Loamy: "Safflower"
      }
    }
  };

  function onSearchSubmit() {
    setLoad(true);

    setTimeout(() => {
      const crop = mockPrediction[season]?.[district]?.[soilType] || "Unknown";
      setPrediction(crop);
      setLoad(false);
    }, 2000);
  }

  return (
    <>
      <Header />
      <section className="">
        <div className="grid place-items-center my-14">
          <div className="container bg-gray-100 p-10 grid place-items-center mt-14">
            <p className="text-2xl font-medium text-green-600 my-12">
              Predict the best crop to plant
              <br />
            </p>

            <div className="flex flex-row my-2 w-3/5">
              <div>Select Season</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSeason(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="">Select Season</option>
                  <option value="Summer">Summer</option>
                  <option value="Monsoon">Monsoon</option>
                  <option value="Winter">Winter</option>
                </select>
              </div>
            </div>

            <div className="flex flex-row my-2 w-3/5">
              <div>Select District</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setDistrict(e.target.value)}
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

            <div className="flex flex-row my-2 w-3/5">
              <div>Select Soil Type</div>
              <div className="ml-16 ">
                <select
                  onChange={(e) => setSoilType(e.target.value)}
                  className="border-2 border-green-600 p-2 rounded-sm w-64"
                >
                  <option value="">Select Soil Type</option>
                  <option value="Sandy">Sandy</option>
                  <option value="Clay">Clay</option>
                  <option value="Loamy">Loamy</option>
                </select>
              </div>
            </div>

            <div className="grid place-items-center mt-14 ">
              <div className="mt-2">
                <button
                  onClick={() => {
                    onSearchSubmit();
                  }}
                  type="button"
                  className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Get Crop Recommendation
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          {load ? (
            <div className="grid place-items-center my-14">loading </div>
          ) : null}
          {prediction !== "" ? (
            <div className="grid place-items-center my-14 text-center">
              <p className="font-bold my-3">Crop Predicted: </p>
              {prediction}
            </div>
          ) : null}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Crop;
