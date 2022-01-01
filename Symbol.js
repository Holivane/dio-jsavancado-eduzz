const uniqueId = Symbol ('Hello')

Symbol.interator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4]

const it = arr[Symbol.interator]()
console.log(it.next())