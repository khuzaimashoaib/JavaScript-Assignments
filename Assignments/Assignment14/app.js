// Import helper to map currency to country flags
import { currencyToFlagCode } from "./currency-to-flag-code.js";

// Select elements from the DOM

const inputSrcCurrency = document.getElementById("inputSourceCurrency");

const currencySelectElements = document.querySelectorAll(
  ".currency_converter_select select"
);
const imageSrcCurrency = document.getElementById("ImgSourceCurrency");
const selectSrcCurrency = document.getElementById("selectSourceCurrency");

const imageTrgCurrency = document.getElementById("ImgTargetCurrency");
const selectTrgCurrency = document.getElementById("selectTargetCurrency");

const exchangeRateTxt = document.getElementById("exchangeRateTxt");
const convertBtn = document.getElementById("btnConvert");

const btnSwap = document.getElementById("btnSwap");

let conversionRate = 0;
let srcCurrencyValue = 0;
let trgCurrencyValue = 0;
let isFetching = false;

// Swap source and target currencies

btnSwap.addEventListener("click", () => {
  [selectSrcCurrency.value, selectTrgCurrency.value] = [
    selectTrgCurrency.value,
    selectSrcCurrency.value,
  ];

  [imageSrcCurrency.src, imageTrgCurrency.src] = [
    imageTrgCurrency.src,
    imageSrcCurrency.src,
  ];

  inputSrcCurrency.value = trgCurrencyValue;

  if (isFetching) {
    conversionRate = 1 / conversionRate;
  }
  updateExchangeRate();
});

// Update exchange rate upon input

inputSrcCurrency.addEventListener("input", () => {
  if (isFetching && inputSrcCurrency.value > 0) {
    updateExchangeRate();
  }
});

// Perform conversion when button is clicked

convertBtn.addEventListener("click", async () => {
  if (inputSrcCurrency.value <= 0) {
    showToast("Please enter a valid amount", "error");
    return;
  }

  exchangeRateTxt.textContent = "Loading, please wait...";

  const selectSrcCurrencyValue = selectSrcCurrency.value;
  const selectTrgCurrencyValue = selectTrgCurrency.value;
  const apiKey = "bb04a5d3ea1f7cfedfde2800";
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${selectSrcCurrencyValue}/${selectTrgCurrencyValue}`
    );

    const data = await response.json();

    conversionRate = data.conversion_rate;

    isFetching = true;
    updateExchangeRate();
  } catch (error) {
    exchangeRateTxt.textContent = "Error Fetching Exchange Rate!";
  }
});
// Update exchange rate displayed

function updateExchangeRate() {
  srcCurrencyValue = parseFloat(inputSrcCurrency.value).toFixed(2);
  trgCurrencyValue = (srcCurrencyValue * conversionRate).toFixed(2);

  exchangeRateTxt.textContent = `${formatCurrency(
    srcCurrencyValue,
    selectSrcCurrency.value
  )}
= ${formatCurrency(trgCurrencyValue, selectTrgCurrency.value)} `;
}



// Initialize select menus and flags
currencySelectElements.forEach((selectElement) => {
  // Fill option
  for (const [currency, flagCode] of Object.entries(currencyToFlagCode)) {
    const newOptionElement = document.createElement("option");
    newOptionElement.value = currency;
    newOptionElement.textContent = currency;
    selectElement.appendChild(newOptionElement);
  }

  //   Listen for changes
  selectElement.addEventListener("change", () => {
    inputSrcCurrency.value = 0;
    isFetching = false;
    updateExchangeRate();

    changeFlag(selectElement);
  });

  //   set default values

  if (selectElement.id === "selectTargetCurrency") {
    selectElement.value = "PKR";
  }
});

function changeFlag(selectElement) {
  const selectValue = selectElement.value;
  const selectId = selectElement.id;
  const flagCode = currencyToFlagCode[selectValue];

  if (selectId === "selectSourceCurrency") {
    imageSrcCurrency.src = `https://flagcdn.com/w640/${flagCode}.png`;
  } else {
    imageTrgCurrency.src = `https://flagcdn.com/w640/${flagCode}.png`;
  }
}
// Format currency

function formatCurrency(number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(number);
}

function showToast(message, type = "success") {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "top",
    position: "right",
    backgroundColor:
      type === "success"
        ? "linear-gradient(to right, #ff5f6d, #ffc371)"
        : "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
}
