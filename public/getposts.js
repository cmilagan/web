const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../src/components/posts")
let postlist = []

const getPosts = () => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }

                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                } 

                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                
                // split file into individual strings split by a new line
                const lines = contents.split("\n")
            
                // get indicies of '---' lines
                const metadataIndices = lines.reduce(getMetadataIndices, [])

                // parse lines to get metadata
                const metadata = parseMetadata({lines, metadataIndices})

                // parse content of blog post 
                const content = parseContent({lines, metadataIndices})

                // fill in post variable
                post = {
                    id: i + 1,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content
                }
                postlist.push(post)
                if (i === files.length - 1) {
                    let data = JSON.stringify(postlist)
                    fs.writeFileSync("src/posts.json", data)
                }
            })
        })
    })
    postlist.reverse();
    return 
}

getPosts()