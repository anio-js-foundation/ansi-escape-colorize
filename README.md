# @anio-js-foundation/ansi-escape-colorize

Colorize strings with ANSI escape color sequences.

This is just a wrapper package for [ansi-colors](https://github.com/doowb/ansi-colors).

```js
import colorize from "@anio-js-foundation/ansi-escape-colorize"

process.stderr.write(
	colorize.red(
		`This is a ${colorize.green.bold("bold green")} string inside a red string!\n`
	)
)
```
