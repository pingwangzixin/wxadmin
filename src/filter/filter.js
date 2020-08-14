function filterZimu(n){
	if(n==0){
		n='A'
	}else if(n==1){
		n="B"
	}else if(n==2){
		n="C"
	}else if(n==3){
		n="D"
	}else if(n==4){
		n="E"
	}else if(n==5){
		n="F"
	}else if(n==6){
		n="G"
	}else if(n==7){
		n="H"
	}else if(n==8){
		n="I"
	}else if(n==9){
		n="J"
	}else if(n==10){
		n="K"
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