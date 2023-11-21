const menuBar = document.querySelector('.fa-bars');
const menuBarContainer = document.querySelector('.menu-bar')
const containerOfNav = document.querySelector('.container1')
menuBar.addEventListener('click', clickMenu);

function clickMenu() {
    containerOfNav.classList.toggle('active');
    menuBar.classList.toggle('active');
    const createCloseBtn = document.createElement('i')
    createCloseBtn.className = 'fa-solid fa-close'
    containerOfNav.appendChild(createCloseBtn)
    createCloseBtn.addEventListener('click', () => {
        containerOfNav.classList.toggle('active');
        menuBar.classList.toggle('active');
    })
}

const tBody = document.querySelector("table");

function generateHeadings(headings) {
  const tr = document.createElement("tr");
  tr.setAttribute("class","heading-section")
  headings.forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
   
  });
  const editButton = document.createElement("tr");
  const actionCell = document.createElement("th");
  const dataOfButton = document.createElement("i")
  dataOfButton.setAttribute("class","fa-solid fa-file-pen")
  actionCell.appendChild(dataOfButton)
  actionCell.appendChild(editButton);
  tr.appendChild(actionCell);
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
      const data = await fetchData("../dumyDataViewProduct/View-product-DumyData.json");
      data.forEach((item) => {
        const tr = document.createElement("tr");
        tr.setAttribute("class","data-section")
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
        
        keys.forEach((key,index) => {
          const td = document.createElement("td");
          td.textContent = `${item[key]}`;
          if (index === 0) {
            td.classList.add("sr-no");
          }
          tr.appendChild(td);
        });
        const editButton = document.createElement("button");
        editButton.textContent = "Edit ";
        editButton.setAttribute("class","edit-btn")
        const actionCell = document.createElement("td");
        actionCell.appendChild(editButton);
        tr.appendChild(actionCell);
        tBody.appendChild(tr);
      });
    }catch (error) {
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
  