function filterZimu(n){
	if(n==1){
		n='A'
	}else if(n==2){
		n="B"
	}else if(n==3){
		n="C"
	}else if(n==4){
		n="D"
	}else if(n==5){
		n="E"
	}else if(n==6){
		n="F"
	}else if(n==7){
		n="G"
	}else if(n==8){
		n="H"
	}else if(n==9){
		n="I"
	}else if(n==10){
		n="J"
	}else if(n==11){
		n="K"
	}else if(n==26){
		n="Z"
	}
  return n;
}
function filterTwo(n){
  return n + 5;
}
export{
  filterZimu,
  filterTwo
}