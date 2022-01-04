function secret(text) {
    let parent, children, childTag, classInfo, classNameInfo, childCount, classNameArr, classNameChar, classNameZeros, result;
	[parent, children] = text.split('>');
    [childTag, classInfo] = children.split('.');
    // console.log(children, classInfo);
    [classNameInfo, childCount] = classInfo.split('*');
    classNameArr = classNameInfo.split('$');
    classNameChar = classNameArr.shift();
    classNameZeros = classNameArr.length - 1; 
    result = window.document.createElement(parent);
    for (let i = 1; i <= childCount; i++) {
        let child = document.createElement(childTag), currentClassNameChar = classNameChar;
        for (let j = 0; j < classNameZeros; j++) {
            currentClassNameChar += "0";
        }
        child.classList.add(currentClassNameChar + i);
        result.appendChild(child);
    }
    return result;
}
secret("div>p.a$$*2");