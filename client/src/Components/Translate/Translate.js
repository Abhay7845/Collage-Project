import React, { useEffect, useState } from "react";
import Footer from "../HomePage/Footer";
import { toast } from "react-toastify";
const axios = require("axios");

const Translate = () => {
  const [option, setOption] = useState([]);
  const [to, setTo] = useState("en");
  const [from, setFrom] = useState("en");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://libretranslate.com/languages", {
        headers: {
          accept: "application/json",
        },
      })
      .then(async (res) => {
        let result = await res.data;
        setOption(result);
      });
  }, [option]);

  const translateLanguage = async () => {
    const params = new URLSearchParams();
    params.append("q", input);
    params.append("source", from);
    params.append("target", to);
    params.append("api_key", "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx");
    if (input) {
      setLoading(true);
      axios
        .post("https://libretranslate.de/translate", params, {
          headers: {
            accept: "application/json, text/plain, */*",
            "Content-Type": "application/x-www-form-urlencoded",
          },
        })
        .then((res) => res)
        .then((response) => {
          setOutput(response.data.translatedText);
          setLoading(false);
        })
        .catch((error) => {
          toast.warn("Server is not running", {
            theme: "colored",
            autoClose: 2000,
          });
          setLoading(false);
        });
    } else {
      toast.error("Please enter your text", {
        theme: "colored",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <div className="container">
        <div className="translateStyle">
          <h4 className="my-2">Translate Your Language </h4>
          <b>From :- {from}</b>
          <select
            className="mx-3 my-3 GTranslate"
            onChange={(e) => setFrom(e.target.value)}
          >
            {option.map((item, i) => {
              return (
                <option key={i} value={item.code}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <b> To :-{to}</b>
          <select
            className="mx-3 GTranslate"
            onChange={(e) => setTo(e.target.value)}
          >
            {option.map((item, i) => {
              return (
                <option key={i} value={item.code}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
        <textarea
          className="GTextArea"
          placeholder="Enter text here"
          rows={4}
          onChange={(e) => setInput(e.target.value)}
        />
        <textarea
          className="GTextArea"
          placeholder="Your output"
          rows={4}
          defaultValue={output}
        />
        <div className="d-flex justify-content-end my-4">
          <button
            onClick={(e) => translateLanguage()}
            className="CButton text-white"
          >
            {loading ? (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              />
            ) : (
              <span className="sr-only">NEXT</span>
            )}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Translate;
