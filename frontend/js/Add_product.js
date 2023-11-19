let form = document.getElementById("submit-form");
let API_URL = `http://localhost:8000`;

async function handleFormData() {
  try {
    let requestObj = {};
    let formData = new FormData(form);
    for (let [eachKey, eachValue] of formData) {
      requestObj[eachKey] = eachValue;
    }
    return requestObj;
  } catch (error) {
    console.log(`got empty data form FormData`, error);
  }
}
async function postRequest(url, formData) {
  try {
    let requestHeader = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(url, requestHeader);
    if (!response.ok) {
      throw new Error(`Can not post Empty data`);
    }
    console.log(formData);
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
async function postData(event,url) {
  event.preventDefault();
  try {
    let data = await handleFormData();
    let result = await postRequest(url, data);
    console.log("Data posted Successfully", result);
  } catch (error) {
    console.log(`Error at postData`, error);
  }
}

form.addEventListener("submit", (event) =>
  postData(event, `${API_URL}/add-product/add-item`)
);
