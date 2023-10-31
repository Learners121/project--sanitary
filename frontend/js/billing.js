import billingData from "../dumyData/dumyBillHistory.js";

const billingMain = document.getElementById("billing-main");

function randerProductList(productList) {
  const productHtml = productList.map((item) => {
    return `<tr id='${item.id}'>
    <td>${item.name}</td>
    <td>${item.productName}</td>
    <td>${item.address}</td>
    <td>${item.number}</td>
    <td><input type="button" value="Edit" id="edit" class="edit-btn" /></td>
    <td>
      <input
        type="button"
        value="Delete &times;"
        id="delete"
        class="delete-btn"
      />
    </td>
  </tr>`;
  });

  billingMain.insertAdjacentHTML("beforeend", productHtml);
}

document.addEventListener("DOMContentLoaded", () => {
  randerProductList(billingData);
});
