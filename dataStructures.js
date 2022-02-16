// level {2}
// Q.1
arr.filter((item)=>item%2)
// Q.2
(function(){
const str = "Hola"
const vowels = ["a","e","i","o","u"]
const newStrArr = [...str.toLowerCase()]

const x = newStrArr.map((item)=>{
const match = vowels.find((e)=> {
if(e.includes(item)){
return true
}else{
return false
}
})
console.log(match)
if(match){
return item.toUpperCase()
}else{
item
};

})
return x.join('')
}())
