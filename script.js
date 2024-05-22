document
  .getElementById("inputText")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fixConnections();
    }
  });

const fixConnections = () => {
  let input = document.getElementById("inputText").value.trim();
  if (input === "") {
    document.getElementById("outputMessage").textContent =
      "Please provide a result to be fixed.";
    return;
  }
  let output = addSpacesToLineBreaks(input);
  copyToClipboard(output);
  document.getElementById("outputMessage").textContent =
    "Success! The fixed result has been copied to your clipboard.";
  resetFixer();
};

const resetFixer = () => {
  document.getElementById("inputText").value = "";
  setTimeout(() => {
    document.getElementById("outputMessage").textContent = "";
  }, 5000);
};

const addSpacesToLineBreaks = (input) => {
  let lines = input.split("\n");
  lines = lines.filter((line) => line.trim() !== "");
  for (let i = 0; i < lines.length; i++) {
    if (i === 0 && lines[i].endsWith(" ")) {
      lines[i] += " ";
    } else {
      lines[i] += "  ";
    }
  }
  return lines.join("\n") + `\n\n`;
};

const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy: ", err);
  });
};
