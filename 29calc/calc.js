/*function add(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value
                var out = Number(a)+Number(b)
                document.getElementById('out').innerText = out
            }
            function sub(){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value
                var out = a-b
                document.getElementById('out').innerText = out
            }*/

            function calc(opt){
                var a = document.getElementById('first').value;
                var b = document.getElementById('second').value
                var out = 0;
                if(opt == "Add"){
                    out = Number(a)+Number(b)
                }else{
                    out = Number(a)-Number(b)
                }
                document.getElementById('out').innerText = out
            }