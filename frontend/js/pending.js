const tBody = document.querySelector("table > tbody");

function generateHeadings(headings) {
  const tr = document.createElement("tr");
  headings.forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });
  tBody.appendChild(tr);
}

async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`URL is not valid`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error:`, error);
  }
}

async function generateHeadingsData() {
  try {
    const data = await fetchData("../domee data /pendig-bills-domee-data.json");
    data.forEach((item) => {
      const tr = document.createElement("tr");
      const keys = [
        "id",
        "customer_name",
        "mobile_number",
        "address",
        "total_amount",
        "deposit",
        "pending_amount",
        "purchased_product",
        "purchased_time",
      ];
      keys.forEach((key) => {
        const td = document.createElement("td");
        td.textContent = `${item[key]}`;
        tr.appendChild(td);
      });
      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      const actionCell = document.createElement("td");
      actionCell.appendChild(editButton);
      tr.appendChild(actionCell);
      tBody.appendChild(tr);
    });
  } catch (error) {
    console.log("Error:", error);
  }
}

generateHeadings([
  "ID",
  "Customer Name",
  "Mobile Number",
  "Address",
  "Total Amount",
  "Deposit",
  "Pending Amount",
  "Purchased Product",
  "Purchase Time",
]);

generateHeadingsData();
