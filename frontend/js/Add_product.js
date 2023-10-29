const form = document.getElementById("form");
const API_URL = `http://localhost:8000`;

async function handleFormData() {
  try {
    const requestObj = {};
    const formData = new FormData(form);
    for (const [eachKey, eachValue] of formData) {
      requestObj[eachKey] = eachValue;
    }
    return requestObj;
  } catch (error) {
    console.log(`got empty data form FormData`, error);
  }
}

async function postRequest(url, formData) {
  try {
    const requestHeader = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, requestHeader);
    if (!response.ok) {
      throw new Error(`Can not post Empty data`);
    }
    console.log(formData);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
async function postData(event,url) {
  event.preventDefault();
  try {
    const data = await handleFormData();
    const result = await postRequest(url, data);
    console.log("Data posted Successfully", result);
  } catch (error) {
    console.log(`Error at postData`, error);
  }
}

form.addEventListener("submit", (event) =>
  postData(event, `${API_URL}/add-product/add-item`)
);
