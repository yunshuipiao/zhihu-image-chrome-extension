//操作document
let div_str = '<div class="zhihu-image">\n' +
    '            <div class="zhihu-image-inner"></div>\n' +
    '        </div>'

let node = document.createElement("div")
let img = document.createElement("img")
img.src = chrome.extension.getURL("img/ic_launcher.png");
img.alt = "zhihu"
img.title = "zhihu"
img.classList = "zhihu"
img.addEventListener("click", () => {
    // 点击事件
    console.log("click")
    loadImg()
})
node.appendChild(img)
document.body.appendChild(node)


let node2 = document.createElement("div")
node2.innerHTML = div_str
node2.getElementsByClassName("zhihu-image")[0].hidden = true
document.body.appendChild(node2)


const loadImg = () => {
    let node = document.getElementsByClassName("zhihu-image-inner")[0]
    let nodeHidden = document.getElementsByClassName("zhihu-image")[0]
    console.log(node.hidden)
    if (nodeHidden.hidden === true) {
        nodeHidden.hidden = false
        console.log(node)
        images = document.querySelectorAll("span > figure > span > div")
        console.log(images)
        for(i = 0; i < images.length; i++) {
            // console.log(images[i].dataset.src)
            let img = document.createElement("img")
            img.src = images[i].dataset.src
            img.className = "image"
            node.appendChild(img)
        }
    } else {
        nodeHidden.hidden = true

    }

}