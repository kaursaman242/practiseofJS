let x = 0
async function test(){
    x =10 + await 2
    console.log(x)
}
test()
x = 0 + 20
console.log(x)