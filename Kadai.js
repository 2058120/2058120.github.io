function roulette(){
    let random = Math.random();
    var element = [null,null,null,null,null], result=[];
    let i = 0, n = 0;

    element[0] = document.getElementById("Ad1").value;
    console.log(element[0]);
    element[1] = document.getElementById("Ad2").value;
    console.log(element[1]);
    element[2] = document.getElementById("Ad3").value;
    console.log(element[2]);
    element[3] = document.getElementById("Ad4").value;
    console.log(element[3]);
    element[4] = document.getElementById("Ad5").value;
    console.log(element[4]);

    for(i=0;i<5;i++){
        if(element[i] == ""){
        }
        else{
            result[n] = element[i];
            n++;
        }
    }

    
    let result_num = Math.floor(random * n);
    i = 0;
    for(i=0;i<n;i++){
        if(result_num == i){
            alert("結果:" + result[i]);
        }
        console.log(n)
    }
}