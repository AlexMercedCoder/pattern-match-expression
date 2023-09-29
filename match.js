import IF from "./if.js"

class MATCH{
    patterns = []

    // find the first match and return its value
    match(value){
        for (let [pattern, action] of patterns){
            // check if pattern is matched
            if(pattern(value)){
                return action(value)
            }
        }
    }

    // match against all patterns and return array of values returned by actions
    matchAll(value){
        const values = []
        for (let [pattern, action] of patterns){
            // check if pattern is matched
            if(pattern(value)){
                values.push(action(value))
            }
        }
        return values
    }

    // register a pattern to match
    when(pattern, action){
        if (!(pattern instanceof Function) && !(patten instanceof IF)){
            throw "first arg must be function or IF object"
        }
        if (!(action instanceof Function)){
            throw "arg2 must be a Function"
        }
        if(pattern instanceof IF){
            this.patterns.push([pattern.check, action])
            return this
        }
        this.patterns.push([pattern, action])
        return this
    }
}