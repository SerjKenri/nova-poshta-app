import axios from "axios";

export const API = axios.create({
  baseURL: "https://api.novaposhta.ua/v2.0/json/",
});

export const getParcelInfo = async (ttn) => {
  const options = {
    apiKey: "4258ea8f4fbc4a7205d24146294bc831",
    modelName: "TrackingDocument",
    calledMethod: "getStatusDocuments",
    methodProperties: {
      Documents: [
        {
          DocumentNumber: `${ttn}`,
        },
      ],
    },
  };

  try {
    const { data } = await API.post("", options);
    return data;
  } catch (error) {
    return error;
  }
};

export const getDepartmentInfo = async (city) => {
  const options = {
    apiKey: "4258ea8f4fbc4a7205d24146294bc831",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      Limit: "20",
      Page: "1",
      Language: "UA",
    },
  };
  try {
    const { data } = await API.post("", options);
    return data;
  } catch (error) {
    return error;
  }
};

export const getDepartmentList = async (city, num = 1) => {
  const options = {
    apiKey: "4258ea8f4fbc4a7205d24146294bc831",
    modelName: "Address",
    calledMethod: "getWarehouses",
    methodProperties: {
      CityName: `${city}`,
      Limit: "20",
      Page: `${num}`,
      Language: "UA",
    },
  };
  try {
    const { data } = await API.post("", options);
    return data;
  } catch (error) {
    return error;
  }
};
