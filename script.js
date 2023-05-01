function localstorage() {
    return {
        setItem: (key, value) => {
            if (typeof value === 'object') {
                localStorage.setItem(key, JSON.stringify(value));
            } else {
                localStorage.setItem(key, value);
            }
        },
        getItem: (key) => {
            if (typeof key === 'object') {
                return JSON.parse(localStorage.getItem(key)) || [];    
            } else {
                const value = localStorage.getItem(key);
                try {
                    return JSON.parse(value);
                } catch (error) {
                    return value;
                }
            }
        }
    }
}

const {setItem, getItem} = localstorage();

const myArr = {
    data: "String",
    age: 10
}
const myArrData = [
    {
        data: "String",
        age: 10
    }
]
setItem('newArr', myArrData);
setItem('array', myArr);
setItem('data', 'hello world');
var storedValue = getItem('array');
console.log(storedValue)