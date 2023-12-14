document.addEventListener("DOMContentLoaded", async function () {
  const AddButton = document.getElementsByClassName("innerContainer3");
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
    editButtonIcon.classList.add("fa-solid", "fa-trash");
    actionCell.appendChild(editButtonIcon);
    headingRow.appendChild(actionCell);
    tableBody.appendChild(headingRow);

    const actionCellForDelete = document.createElement("th");
    const deleteButtonIcon = document.createElement("i");
    deleteButtonIcon.classList.add("fa-solid", "fa-file-pen");
    actionCellForDelete.appendChild(deleteButtonIcon);
    headingRow.appendChild(actionCellForDelete);
    tableBody.appendChild(headingRow);
  }

  function createTableDataRows(data) {
    data.forEach((item) => {
      console.log(item);
      console.log(item.Product_uuid);
      const eachRow = document.createElement("tr");
      
      Object.values(item)
        .slice(1)
        .forEach((cellData) => {
          const td = document.createElement("td");
          td.textContent = cellData;
          td.setAttribute('class','tableData')
          eachRow.appendChild(td);
        });

      const checkboxCell = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.setAttribute("class", "Check-box");
      checkboxCell.appendChild(checkbox);
      eachRow.appendChild(checkboxCell);

      const deleteButtonCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("class", "edit-btn");
      deleteButton.textContent = "Delete";
      deleteButtonCell.appendChild(deleteButton);
      eachRow.appendChild(deleteButtonCell);

      const editButtonCell = document.createElement("td");
      const editButton = document.createElement("button");
      // editButton.classList.add('editButton');
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
        const anyCheckboxChecked = Array.from(
          document.querySelectorAll(".Check-box")
        ).some((checkbox) => checkbox.checked);

        if (
          !document.querySelector(".innerContainer4 button") &&
          anyCheckboxChecked
        ) {
          const addToCartButton = document.createElement("button");
          addToCartButton.textContent = "Add To Cart";
          const innerContainer3 = document.querySelector(".innerContainer4");
          innerContainer3.appendChild(addToCartButton);
        }
      } else {
        eachRow.removeAttribute("data-uuid");
        const anyCheckboxChecked = Array.from(
          document.querySelectorAll(".Check-box")
        ).some((checkbox) => checkbox.checked);

        if (!anyCheckboxChecked) {
          const existingButton = document.querySelector(
            ".innerContainer4 button"
          );
          if (existingButton) {
            existingButton.remove();
          }
        }
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

