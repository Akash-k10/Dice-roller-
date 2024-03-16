function roll(){
    const n = document.getElementById("n").value
    const dr = document.getElementById("diceresult")
    const di = document.getElementById("diceimages")
    const values = []
    const images =[]

    for(let i=0;i<n;i++){
        const value = Math.floor(Math.random()*6)+1;
        values.push(value)
        images.push(`<img src="./static/${value}.png">`);
    }
    dr.textContent = `dice: ${values.join(`,`)}`
    di.innerHTML=images.join("")
}