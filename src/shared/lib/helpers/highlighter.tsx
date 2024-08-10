export function highlighter(str: string | undefined, pattern: string | undefined, cls: string) {
    if (!pattern) {
        return str
    }

    if (!str) {
        return ''
    }

    const regexp = new RegExp(pattern, 'ig')
    const matchValue = str.match(regexp)

    if (matchValue) {
        return str.split(regexp).map((el, i, arr) => {
            if (i < arr.length - 1) {
                const match = matchValue.shift()

                return (
                    <span key={i} className={cls}>
                        {match}
                    </span>
                )
            }

            return el
        })
    }

    return str
}
