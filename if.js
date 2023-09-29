class IF {
    // array holding tests
    checks = []

    // return true if all tests pass, false if not
    check(value){
        return this.checks.every(c => c(value))
    }

    // add a test whether value is of certain type
    type(t){  
        const func = (value) => typeof value === t
        this.checks.push(func)
        return this
    }

    // add a test whether the value equals a certain value
    equals(v){
        const func = (value) => value === v
        this.checks.push(func)
        return this 
    }

    // return check to test whether value is divisible by a number
    divisibleBy(v){
        const func = (value) => value % v === 0
        this.checks.push(func)
        return this
    }

    // add a test whether item is of a particular instance
    instanceOf(type){
        const func = (value) => value instanceof type
        this.checks.push(func)
        return this
    }

    // add a custom test
    custom(cb){
        this.checks.push(cb)
        return this
    }

    // whether an object same properties and values
    objMatch(shape){
        const shapeKeys = Object.keys(shape)

        function testObject(obj){
            const objKeys = Object.keys(obj)

            for (let key of shapeKeys){
                if (!(objKeys.includes(key))){
                    return false
                }
                if ((shape[key] !== obj[key]) && (shape[key] !== "!check")){
                    return false
                }
            }

            return true
        }

        this.checks.push(testObject)
        return this
    }

    // check if an array has same number of elements and values in the same indexes
    arrMatch(arr){

        function testArray(arr2){
            if (arr.length !== arr2.length){
                return false
            }
            if (!arr.every((v,i) => {
                return (v === arr2[i]) || (v === "!check")
            })){
                return false
            }
            return true
        }

        this.checks.push(testArray)
        return this
    }
}

export default IF