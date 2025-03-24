function makeid(l) {
  // write your code here
	let code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
	let ans=''
	for(let i=0;i<l;i++){
		let substr=code[Math.floor(Math.random()*62)]
		ans+=(substr)
	}
	return ans
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
