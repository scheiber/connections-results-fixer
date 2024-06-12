# ResultsFixer <!-- omit from toc -->

![logo](https://github.com/scheiber/connections-results-fixer/assets/794551/ae7accda-a55c-4b3f-a812-6d48523cb4d5)

## Table of Contents <!-- omit from toc -->

- [About](#about)
- [Technical Details](#technical-details)
- [Disclaimers](#disclaimers)

## About

[ResultsFixer](https://connections.scheiber.dev/)
allows you to copy your results from  games such as [Connections](https://www.nytimes.com/games/connections) and [Strands](https://www.nytimes.com/games/strands) and have two spaces automatically added to the end of each line, making the lines appear "stacked" when sharing on platforms that use [Markdown](https://www.markdownguide.org/), such as [Reddit](https://www.reddit.com/) and [Lemmy](https://join-lemmy.org/).

To use this tool, copy your results as you normally would, paste them into the box, and click "Fix It!"

The fixed results will be automatically copied to your clipboard, ready to share.

## Technical Details

- This project was created using plain JavaScript, HTML, and CSS.
- [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) is used to dynamically switch between light and dark themes based on the user's operating system level setting.
- Although this tool was specifically designed for use with Connections, it is also compatible with other NYT and NYT-style games that share results, such as [Strands](https://www.nytimes.com/games/strands), [Wordle](https://www.nytimes.com/games/wordle), and [Circuits](https://circuitsgame.com/), due to the result format being similar.
- This tool is also compatible with results from third-party Connections sites, such as [Connections Plus](https://connectionsplus.io/) and [Swellgarfo](https://connections.swellgarfo.com/).

## Disclaimers

- The site has been released under the [MIT License](https://github.com/scheiber/connections-results-fixer/blob/main/LICENSE.TXT).
- This site is not affiliated in any way with The New York Times.
