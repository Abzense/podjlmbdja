// Javascript Document
//-zw

console.log("Available Commands:");
console.log("zwEncode(Input, ROT, ExtraSalt, StartingSalt) will encode messages.");
console.log("zwDecode(Input, ROT, ExtraSalt, StartingSalt) will decode messages.");
console.log("zwSalt(n) will create n amount of salt.");
console.log("zwROT(Input, n, isEncode) will ROT text by n.");


function zwSalt(howMuch){
        var output = "";
        var chrt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.&#;?!_,:-/()1234567890";
        for(let z = 0; z < howMuch; z += 1){
                output = output + chrt.substr(Math.floor(Math.random() * (chrt.length - 1)), 1);
        }
        return output;
}

function zwROT(input, ROT, encode){
        var chrt = "abcdefghijklmnopqrstuvwxyz()#,.:@!-_abcdefghijklmnopqrstuvwxyz()#,.:@!-_ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var cr = "";
        var output = "";
        var ra = "";
        for(let m = 0; m < input.length; m += 1){
                cr = input.substr(m, 1);
                if(chrt.includes(cr)){
                        if(encode){
                                output = output + chrt.substr(chrt.indexOf(cr) + ROT, 1);
                        } else{
                                ra = chrt.indexOf(cr, chrt.indexOf(cr) + 1);
                                output = output + chrt.substr(ra - ROT, 1);
                        }
                } else{
                        output = output + cr;
                }
        }
        return output;
}

function zwEncode(input, ROT, salt, bgSalt){
        var output = zwSalt(bgSalt);
        var newInput = zwROT(input, ROT % 26, true);
        var how = 0;
	var Chart = "m,e.)(4cC:3012wqrliof89";
        for (var z = 0; z < newInput.length; z += 1){
                output = output + newInput.substr(z, 1);
                how = Math.floor(Math.random() * 4) + 5;
                output = output + Chart.substr(how, 1) + zwSalt(how);
                output = output + zwSalt(salt);
        }
        return output;
}

function zwDecode(input, ROT, salt, bgSalt){
        var blank = parseInt(bgSalt);
        var output = "";
	var Chart = "m,e.)(4cC:3012wqrliof89";
        for(var a = 0; a < input.length; a += 1){
                if(blank > 0){
                        blank -= 1;
                } else{
                        output = output + input.substr(a, 1);
                        blank = Chart.indexOf(input.substr(a + 1, 1)) + 1 + parseInt(salt);
		    }
        }
        output = zwROT(output, ROT % 26, false);
        return output;
}
