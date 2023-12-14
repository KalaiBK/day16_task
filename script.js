let callBack = document.getElementById("hell");
let timer = () => {
    setTimeout(() => {
        callBack.innerHTML = "10";
        setTimeout(() => {
            callBack.innerHTML = "9";
            setTimeout(() => {
                callBack.innerHTML = "8";
                setTimeout(() => {
                    callBack.innerHTML = "7";
                    setTimeout(() => {
                        callBack.innerHTML = "6";
                        setTimeout(() => {
                            callBack.innerHTML = "5";
                            setTimeout(() => {
                                callBack.innerHTML = "4";
                                setTimeout(() => {
                                    callBack.innerHTML = "3"
                                    setTimeout(() => {
                                        callBack.innerHTML = "2";
                                        setTimeout(() =>{
                                            callBack.innerHTML = "1";
                                            setTimeout(() => {
                                                callBack.innerHTML = "Happy Independence Day";
                                            },1000)
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            }, 1000);
        }, 1000);
    }, 1000);
}
timer();