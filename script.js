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

const resetFixer = () => {
  setTimeout(() => {
    document.getElementById("inputText").value = "";
    document.getElementById("outputMessage").textContent = "";
  }, 7000);
};

const handlePaste = (event) => {
  event.preventDefault();

  let pastedText = (event.clipboardData || window.clipboardData).getData(
    "text"
  );

  let fixedText = addSpacesToLineBreaks(pastedText);

  document.getElementById("inputText").value = fixedText;

  copyToClipboard(fixedText);
  document.getElementById("outputMessage").textContent =
    "Success! The fixed result has been copied to your clipboard.";
  resetFixer();
};

document.getElementById("inputText").addEventListener("paste", handlePaste);

// const fixConnections = () => {
//   let input = document.getElementById("inputText").value.trim();
//   if (input === "") {
//     document.getElementById("outputMessage").textContent =
//       "Please provide a result to be fixed.";
//     return;
//   }
//   let output = addSpacesToLineBreaks(input);
//   copyToClipboard(output);
//   document.getElementById("outputMessage").textContent =
//     "Success! The fixed result has been copied to your clipboard.";
//   resetFixer();
// };
