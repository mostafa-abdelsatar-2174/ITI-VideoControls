var RangeContainer = document.querySelector(".range-home");
var RedRange = document.getElementById("RedValue");
var GreenRange = document.getElementById("GreenValue");
var BlueRange = document.getElementById("BlueValue");
var MainText = document.getElementById("text-color");
console.log(MainText);
console.log(RedRange,GreenRange,BlueRange);
var RedValue = RedRange.value;
var GreenValue = GreenRange.value;
var BlueValue = BlueRange.value;
var RgbInfo = document.querySelector(".RGBcolor");
console.log(RgbInfo);
RgbInfo.innerHTML= `Text color: rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) `;
console.log(RangeContainer.innerHTML);
RedRange.addEventListener("change",()=>{
    RedValue=RedRange.value;
    console.log(RedValue);
    console.log(RedValue,GreenValue,BlueValue);
    MainText.style.color= `rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) ` ;
    RgbInfo.innerHTML= `Text color: rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) `;
})
GreenRange.addEventListener("change",()=>{
    GreenValue=GreenRange.value;
    console.log(GreenValue);
    console.log(RedValue,GreenValue,BlueValue);
    MainText.style.color= `rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) ` ;
    RgbInfo.innerHTML= `Text color: rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) `;
})
BlueRange.addEventListener("change",()=>{
    BlueValue=BlueRange.value;
    console.log(BlueValue);
    console.log(RedValue,GreenValue,BlueValue);
    MainText.style.color= `rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) ` ;
    RgbInfo.innerHTML= `Text color: rgb(${Number(RedValue)},${Number(GreenValue)},${Number(BlueValue)}) `;
})


