function greet(name) {
    if (name == null) {
        return `Hello, my friend.`;
    } else if (Array.isArray(name)) {
        if (name.length > 2) {
            var flag = false;
            var strUpper = "";
            var strNormal = [];
            var count = 0;
            for (i = 0; i < name.length; i++) {
                if (name[i].toUpperCase() == name[i]) {
                    strUpper += `AND HELLO ${name[i]}!`
                    flag = true;
                } else {
                    strNormal[count] = `${name[i]}`
                    count++;
                }
            }
            if (flag == true) {
                var setstrNormal = strNormal.slice(0, strNormal.length);
                var printstrNormal = setstrNormal.join(" and ");
                return `Hello, ${printstrNormal}. ${strUpper}`
            } else {
                var str = `Hello, ${name.slice(0, name.length - 1).join(", ")}`;
                return str + `, and ${name.slice(name.length - 1, name.length)}.`;
            }
        } else {
            var converse = name.toString();
            var setConverse = [];
            var setConveresDouble = [];
            setConverse = converse.split(",");
            setConveresDouble = converse.split("\"");
            if (setConverse.length > 2 && setConveresDouble.length  == 1) {
                var str = `Hello, ${setConverse.slice(0, setConverse.length - 1).join(", ")}`;
                return str + `, and${setConverse.slice(setConverse.length - 1, setConverse.length)}.`;
            } else {
                var value = [];
                var count = 0;
                for (i = 0; i < setConveresDouble.length; i++) {
                    if(setConveresDouble[i] != ''){
                        value[count]= setConveresDouble[i];
                        count++;
                    }
                }
                
                if (setConveresDouble.length > 1) {
                    var print = value.toString();
                    return `Hello, ${print.substring(0,3)} and ${value.slice(value.length-1,value.length)}.`;
                } else {
                    return `Hello, ${setConverse.join(" and ")}.`;
                }
            }

        }

    } else if (name == name.toUpperCase()) {
        return `HELLO ${name}!`;
    }
    return `Hello, ${name}.`;
}



module.exports = greet;