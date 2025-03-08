const phoneInputs = document.querySelectorAll(".input_phone");
const getInputNumberValue = function (input) {
    return input.value.replace(/\D+/g, "");
};

const onPhoneInput = function (e) {
    const input = e.target;
    let inputValue = getInputNumberValue(input);
    let formattedInputValue = "";

    if (!inputValue) {
        return (input.value = "");
    }

    if (["7", "8", "9"].indexOf(inputValue[0]) > -1) {
        if (inputValue[0] == "9") {
            inputValue = `7${inputValue}`;
        }
        const firstSymbols = inputValue[0] == "8" || inputValue[0] == "+" ? "+7" : "+7";
        formattedInputValue = firstSymbols;
        if (inputValue.length > 1) {
            formattedInputValue += ` (${inputValue.substring(1, 4)}`;
        }
        if (inputValue.length >= 5) {
            formattedInputValue += `) ${inputValue.substring(4, 7)}`;
        }
        if (inputValue.length >= 8) {
            formattedInputValue += `-${inputValue.substring(7, 9)}`;
        }
        if (inputValue.length >= 10) {
            formattedInputValue += `-${inputValue.substring(9, 11)}`;
        }
    } else {
        formattedInputValue = `+${inputValue.substring(0, 16)}`;
    }
    input.value = formattedInputValue;
};

phoneInputs?.forEach((input) => {
    input.addEventListener("input", onPhoneInput);
});
