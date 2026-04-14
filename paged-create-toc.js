function createToc(config) {
    const content = config.content;
    const tocElement = config.tocElement;
    const titleElements = config.titleElements;
    
    const tocElementDiv = content.querySelector(tocElement);
    const tocUl = document.createElement("ul");
    tocUl.id = "list-toc-generated";
    tocElementDiv.appendChild(tocUl); 

    // add class to all title elements
    let tocElementNbr = 0;
    for (var i = 0; i < titleElements.length; i++) {
        const titleElement = content.querySelectorAll(titleElements[i]);  

        titleElement.forEach(function(element) {
            // add classes to the element
            element.classList.add("title-element");
            element.setAttribute("data-title-level", i + 1);

            // add id if doesn't exist
            tocElementNbr++;
            if (element.id == '')
                element.id = 'title-element-' + tocElementNbr;
        });
    }

    const tocElements = content.querySelectorAll(".title-element");
    tocElements.forEach(tocElement => {
        const tocNewA = document.createElement("a");
        tocNewA.href = "#" + tocElement.id;
        tocNewA.textContent = tocElement.textContent;

        const tocNewLi = document.createElement("li");
        tocNewLi.classList.add("toc-element");
        tocNewLi.classList.add("toc-element-level-" + tocElement.dataset.titleLevel);
        tocNewLi.appendChild(tocNewA);

        tocUl.appendChild(tocNewLi);  
    })
}
