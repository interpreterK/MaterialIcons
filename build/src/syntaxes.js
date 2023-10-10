/*
bun run tsc ../vscode-material-icon-theme/src/icons/fileIcons.ts --outDir ./bin/
*/

const fs=require("node:fs")
const fileIcons=require("./bin/icons/fileIcons").fileIcons
const Icons=fileIcons.icons

const Create={
	tmPreference: (type, extension) => {
		return `<?xml version="1.0" encoding="UTF-8"?>
<plist version="1.0">
	<dict>
		<key>scope</key>
		<string>${type}.${extension_type}</string>
		<key>settings</key>
		<dict>
			<key>icon</key>
			<string>file_type_${extension_type}</string>
		</dict>
	</dict>
</plist>`
	},

	sublimesyntax: () => {
		return `%YAML 1.2
---
# http://www.sublimetext.com/docs/3/syntax.html
name: Archive
file_extensions:
	- zip
	- 7z
	- rar
	- 7zip
	- tgz
	- gz
	- pzip
	- tar
	- wim
scope: text.plain.archive
hidden: true
contexts:
	main:
		- include: scope:text.plain#prototype
		- include: scope:text.plain`
	}
}

const CreateFile = (type, name, contents) => {
	if (type=="sublime-syntax") {
		fs.appendFile(`./${name}.sublime-syntax`, contents, (err)=>{
			console.warn(err)
		})
	} else if (type=="tmPreferences") {
		
	}
}

// for (let i=0; i<Icons.length; i++) {
// 	console.log(Icons[i].name)
// }

CreateFile("sublime-syntax", "test", "written")