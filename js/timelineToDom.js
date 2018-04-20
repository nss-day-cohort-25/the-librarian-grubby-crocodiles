//app to print timeline of history to the DOM
const printTimeline = () => {
    //obtain ref to output element
    const output = document.querySelector("#output")
    const fragment = document.createDocumentFragment()
    timeline.forEach(interaction => {
        const section = document.createElement("section")
        const text = document.createElement("p")
        text.textContent = `${interaction.who} ${interaction.what} on ${interaction.when}`
        section.appendChild(text)
        fragment.appendChild(section)
    });
    output.appendChild(fragment)
}

printTimeline()