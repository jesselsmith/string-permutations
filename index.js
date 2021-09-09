function findAllPermutations(string) {
    if(string.length <= 1){
        return [string]
    }else if(string.length == 2){
        return [string, string[1] + string[0]]
    }else{
        let results = []

        string.split('').forEach((letter, index) => {
            let withoutLetter = string.substring(0, index) + string.substring(index + 1)
            results = findAllPermutations(withoutLetter).map(result => {
                return letter + result
            }).concat(results)
        })
        return results
    }
}