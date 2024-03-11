import colorize from "./src/index.mjs"

process.stderr.write(
	colorize.red(
		`This is a ${colorize.green.bold("bold green")} string inside a red string!\n`
	)
)
