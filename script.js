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
};

const resetPage = () => {
  document.getElementById("inputText").value = ""; // Clear the textarea
  document.getElementById("outputMessage").textContent = ""; // Clear the output message
};

const addSpacesToLineBreaks = (input) => {
  let lines = input.split("\n");
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
