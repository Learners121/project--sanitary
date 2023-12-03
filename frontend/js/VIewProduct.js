document.addEventListener("DOMContentLoaded", async function () {
  const addItemBtn = document.getElementsByClassName("add-item")[0];
  const tableBody = document.querySelector("table tbody");
  const API_URL = `http://localhost:8000`;

  if (!tableBody) {
    console.error("Table body not found. Exiting initialization.");
    return;
  }

  async function fetchDataFromBackend(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return data;
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }

  function createTableHeadings(headings) {
    const headingRow = document.createElement("tr");
    headingRow.classList.add("heading-section");

    headings.forEach((heading) => {
      const th = document.createElement("th");
      th.textContent = heading;
      headingRow.appendChild(th);
    });

    const actionCell = document.createElement("th");
    const editButtonIcon = document.createElement("i");
    editButtonIcon.classList.add("fa-solid", "fa-file-pen");
    actionCell.appendChild(editButtonIcon);
    headingRow.appendChild(actionCell);

    tableBody.appendChild(headingRow);
  }

  function createTableDataRows(data) {
    data.forEach((item) => {
      const eachRow = document.createElement("tr");
      Object.values(item)
        .slice(1)
        .forEach((cellData) => {
          const td = document.createElement("td");
          td.textContent = cellData;
          eachRow.appendChild(td);
        });

      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkboxCell.appendChild(checkbox);
      eachRow.appendChild(checkboxCell);

      const editButtonCell = document.createElement("td");
      const editButton = document.createElement("button");
      editButton.setAttribute("class", "edit-btn");
      editButton.textContent = "Edit";
      editButtonCell.appendChild(editButton);
      eachRow.appendChild(editButtonCell);

      tableBody.appendChild(eachRow);
      isChecked(eachRow, checkbox, item.Product_uuid);
    });
  }

  function isChecked(eachRow, checkBox, UUID) {
    checkBox.addEventListener("click", () => {
      if (!eachRow.hasAttribute("data-uuid")) {
        eachRow.setAttribute("data-uuid", UUID);
        addItemBtn.style.display = "block";
      } else {
        eachRow.removeAttribute("data-uuid");
        addItemBtn.style.display = "none";
      }
    });
  }

  try {
    const productData = await fetchDataFromBackend(`${API_URL}/view-product`);

    if (productData && productData.length > 0) {
      const headings = [
        "ID",
        "Category Name",
        "Class Type",
        "Product Name",
        "Product Code",
        "Product Size",
        "Product Rate",
        "Product qty",
        "Product Company Name",
        "Add Item",
      ];
      createTableHeadings(headings);
      createTableDataRows(productData);
    } else {
      console.warn("No data received from the backend.");
    }
  } catch (error) {
    console.error(error.message);
  }
});
