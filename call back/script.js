const changeText=(newtext,delay,nextcall)=>{
    setTimeout(()=>{
    document.getElementById('p1').innerHTML=newtext;
    nextcall();
    },delay)
}
changeText("10",1000,()=>{
    changeText("9",1000,()=>{
        changeText("8",1000,()=>{
            changeText("7",1000,()=>{
                changeText("6",1000,()=>{
                    changeText("5",1000,()=>{
                        changeText("4",1000,()=>{
                            changeText("3",1000,()=>{
                                changeText("2",1000,()=>{
                                    changeText("1",1000,()=>{
                                        changeText("Happy Independence Day",1000,()=>{

                                        });
                                    });
                                });
                            });
                        });
                    });
                }) ; 
            });

    });

    });
});