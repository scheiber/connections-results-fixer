const inputTextElement = document.getElementById("inputText");
const outputMessageElement = document.getElementById("outputMessage");

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    fixResults();
  }
};

inputTextElement.addEventListener("keydown", handleKeyDown);

const fixResults = () => {
  let input = inputTextElement.value.trim();
  if (input === "") {
    outputMessageElement.textContent = "Please provide a result to be fixed.";
    return;
  }
  let output = addSpacesToLineBreaks(input);
  copyToClipboard(output);
  outputMessageElement.textContent =
    "Success!\r\n The fixed result has been copied to your clipboard.";
  resetFixer();
};

const resetFixer = () => {
  inputTextElement.value = "";
  setTimeout(() => {
    outputMessageElement.textContent = "";
  }, 5000);
};

const addSpacesToLineBreaks = (input) => {
  let lines = input.split("\n").filter((line) => line.trim() !== "");
  lines = lines.map((line, index) =>
    index === 0 && line.endsWith(" ") ? line + " " : line + "  "
  );
  return lines.join("\n") + `\n\n`;
};

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error("Failed to copy: ", err);
    outputMessageElement.textContent =
      "Failed to copy to clipboard. Please try again.";
  }
};
