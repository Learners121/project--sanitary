import viewProductData from "../dummyView/dummyView.js";
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

document.addEventListener('DOMContentLoaded', () => {
    const headingSection = document.querySelector('.heading-section');
    const tableContainer = document.querySelector('#table-container');
    function createRow(){
        const createTableRow = document.createElement('tr');
        return createTableRow;
    }
    function createHeading() {
        const createTableHeading = document.createElement('th');
        return createTableHeading;
    };
    function createData() {
        const createTableData = document.createElement('td');
        return createTableData 
    };
    function loadHeading() {
        const Idtd = createHeading();
        Idtd.innerText = "id";

        const productNametd = createHeading();
        productNametd.innerText = "productName";

        const productCodetd = createHeading();
        productCodetd.innerText = "productCode";

        const productSizetd = createHeading();
        productSizetd.innerText = "productSize";

        const productQuantitytd = createHeading();
        productQuantitytd.innerText = "productQuantity";

        const ratetd = createHeading();
        ratetd.innerText = "productRate";

        const productCompanyNametd = createHeading();
        productCompanyNametd.innerText = "productCompanyName";

        const pricetd = createHeading();
        pricetd.innerText = "price";

        const addItemtd = createHeading();
        addItemtd.innerText = "addItem";

        const editBtntd = createHeading();
        editBtntd.innerHTML = `<i class="fa-solid fa-file-pen"></i>`;

        const deleteBtntd = createHeading();
        deleteBtntd.innerHTML = `<i class="fa-solid fa-trash"></i>`;

        headingSection.append(Idtd, productNametd, productCodetd, productSizetd, productQuantitytd, ratetd, productCompanyNametd, pricetd, addItemtd, editBtntd, deleteBtntd)
    }

    function appendTableData() {
        viewProductData.forEach((eachData) => {
            const tr = createRow();
            const Idtd = createData();
            Idtd.classList.add('sr-no')
            Idtd.innerText = eachData.id;

            const productNametd = createData();
            productNametd.innerText = eachData.productName;

            const productCodetd = createData();
            productCodetd.innerText = eachData.productCode;

            const productSizetd = createData();
            productSizetd.innerText = eachData.productSize;

            const productQuantitytd = createData();
            productQuantitytd.innerText = eachData.productQuantity;

            const ratetd = createData();
            ratetd.innerText = eachData.productRate;

            const productCompanyNametd = createData();
            productCompanyNametd.innerText = eachData.productCompanyName;

            const pricetd = createData();
            pricetd.innerText = eachData.price;

            const addItemtd = createData();
            addItemtd.innerHTML = eachData.addItem;

            const editBtntd = createData();
            editBtntd.innerHTML = eachData.editBtn;

            const deleteBtntd = createData();
            deleteBtntd.innerHTML = eachData.deleteBtn;

            tr.append(Idtd, productNametd, productCodetd, productSizetd, productQuantitytd, ratetd, productCompanyNametd, pricetd, addItemtd, editBtntd, deleteBtntd);
            tableContainer.append(tr)
        });
    }
    loadHeading();
    appendTableData();
});
// fragement