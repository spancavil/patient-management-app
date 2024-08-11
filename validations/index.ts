//Validation will return true when tests pass

export const nonBlankNonEmptyValidation = (string: string) => {
    return string.length === 0 || string.charAt(0) === ' ' ? false : true
}

export const minLengthValidation = (min: number, string: string) => {
    return string.length < min ? false : true
}

export const maxLengthValidation = (max: number, string: string) => {
    return string.length > max ? false : true
}

export const webSiteFormatValidation = (website: string) => {
    const regexWebFormat =
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?\/?$/
    const test = regexWebFormat.test(website)
    return test
}
