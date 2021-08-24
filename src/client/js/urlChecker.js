function checkUrl(inputText) {
    console.log("::: Running checkUrl :::", inputText);
    // Regular expression to check if the user entered a valid URL
    // RegEx built with https://regexr.com/
    const check = new RegExp(/(^(http|https):\/\/[^*@;"]+$)/);
    return check.test(inputText);
}

export { checkUrl }
