export const showStyles = (props) => {
  if(props.data!==null) {
    var value = Object.values(props.data);
    for (let k = 0; k < value.length; k++) {
      var element = document.getElementById(value[k].id+"-"+k);
      if (element!==undefined){
        if (k===0) {
          element.classList.add("Product__ItemSelected");
        }else{
          element.classList.add("Product__ItemNoSelected");
        }
      }
    }
  }
}
