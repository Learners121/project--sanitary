let form = document.getElementById("submit-form");
let API_URL = `http://localhost:8000`;

function handleFormData() {
  let requestObj = {};
  let formData = new FormData(form);
  for (let [eachKey, eachValue] of formData) {
    requestObj[eachKey] = eachValue;
  }
  return requestObj;
}

async function postRequest(url, formData) {
  try {
    console.log(formData);
    let requestHeader = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let response = await fetch(url, requestHeader);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
}

async function postData(event, url) {
  event.preventDefault();
  try {
    let data = handleFormData();
    let result = await postRequest(url, data);
    console.log(result.message);
  } catch (error) {
    console.log(error.message);
  }
}

form.addEventListener("submit", (event) =>
  postData(event, `${API_URL}/add-product/add-item`)
);
