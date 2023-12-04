document.addEventListener("DOMContentLoaded", async function () {
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
      console.log(item);
      console.log(item.Product_uuid);
      const dataRow = document.createElement("tr");
      dataRow.setAttribute("data-uuid",item.Product_uuid)
      Object.values(item).slice(1).forEach((cellData) => {
        const td = document.createElement("td");
        td.textContent = cellData;
        dataRow.appendChild(td);
    });
      const tdForEditButton = document.createElement("td")
      const editButton = document.createElement("button");
      editButton.setAttribute("class", "edit-btn");
      editButton.textContent = "Edit";
      tdForEditButton.appendChild(editButton)
      dataRow.appendChild(tdForEditButton);
      tableBody.appendChild(dataRow)


      const tdForDeleteButton = document.createElement("td")
      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "delete-btn");
      deleteButton.textContent = "Delete";
      tdForDeleteButton.appendChild(deleteButton)
      dataRow.appendChild(tdForDeleteButton);
      dataRow.appendChild(tdForEditButton);
      tableBody.appendChild(dataRow)
      ;
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
        "Delete Product"
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
