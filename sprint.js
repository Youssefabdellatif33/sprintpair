function iterateAndLogWithFor(n) {
   
    for (var i =n;i>=0;i--)
    if (i%2===0){
        console.log(i,'is even')
    }
    else{
        console.log(i,'is odd')
    }
}

function iterateAndLogWithWhile(n) {
    var i =0
    while(i<=n)
        if(i%2===0){
        console.log(i,'is even')
    i++}
    else {console.log(i,'is odd')
i++}
}


function reverseIterateAndLogWithFor(n) {
    if(n===0){
        return 0
    }
    if (n%2===0){
        console.log(n,'is even')
        
    }
    else {
        console.log(n,'is odd')
        
    }
return reverseIterateAndLogWithFor(n-1)
}




function weirdDivisionWithFor(n) {
    for(var i =0;i<=n;i++){
        if ((n%3===0)&&(n%5===0))
     console.log('juliaJames')
        else if (n%3===0)
        console.log('Julia')
    else if (n%5===0)
    console.log('James')

    else 
    console.log(n)
    }}


    function weirdDivisionWithWhile(n) {
        var i =0
        while (i<=n){
            if ((n%3===0)&&(n%5===0)){
            
     console.log('juliaJames')
     i++}
        else if (n%3===0){

        console.log('Julia')
        i++}
    else if (n%5===0){
    console.log('James')
     i++
    }
    else{ 
    console.log(n) 
i++
    }
}
    }

    function inverseWeirdDivisionRecursively(n) {
        if (n===0)
        return 0
            if ((n%3===0)&&(n%5===0))
         console.log('juliaJames')
            else if (n%3===0)
            console.log('Julia')
        else if (n%5===0)
        console.log('James')
    
        else {
        console.log(n)
        }
return inverseWeirdDivisionRecursively(n-1)

    }





    function laughWithFor(number) {
        var sum = ''
        for (var i =0;i<number;i++){
        sum=sum+'ha '}
        return sum}


        function laughWithWhile(number) {
            var sum=''
            var i = 0
            while(i<number){
            sum=sum+'ha '
        i++}
        return sum}



        function laughRecursively(number) {
            var sum = ''
            sum=sum+'ha '
            if (number===0){
            return ''}
            return sum+laughRecursively(number-1)}



            function sumWithWhile(number) {
                var x = 0
                var i = 0
                while (i<=number){
                x=x+i
            i++}
return x}



function sumWithFor(number) {
    var x = 0
    for (i=0;i<=number;i++){
    x=x+i}
    return x }


    function factorialRecursively(number) {
        var x = 1
        if (number===0){
            return 1
        }
        else
        
        return number*factorialRecursively(number-1)}



        function rangeFor(min, max) {
            var array = []
            for(var i =min;i<max;i++){
                array.push(i)
            }
            return array}


            function rangeWhile(min, max) {
                var array=[]
                var i =min
                while (i<max){
                    array.push(i)
                    i++
            }
            return array
        }




        function reverseWithFor(str) {
            var array=''
            for(i=str.length-1;i>=0;i--){
                array=array+str.charAt(i)
            }
            return array}




            function reverseWithWhile(str) {


            }
              
            
            
            
            function reverseRecursively(str) {
               var strrevrsed= ''
               var i = str.length-1
               if (str.length-1===0){
               return ''}
               strrevrsed=strrevrsed+str.charAt(i)
               return  reverseRecursively(str)

               }




               function addDigits(num) {
                var result = 0
                var x = num.tostring()
                for (var i = 0;i<x.length;i++){
                    result=result+x[i]
                }
return result}




function fibRecursive(number) {
    if (number===0){
    return 0}
    if (number <= 1) {
        return number
    }
    if (number === 2) {
        return 1
    }
    return number-1+number-2+fibRecursive(number-1)
    }



    function fibfor(number) {
        var x = 0
        for (i=number;i>=0;i--){
            if (number <= 1) {
                return number
            }
            if (number === 2) {
                return 2
            }
            x =(number-1)+(number-2)
        }
return x}
        




function firstDigit(str) {
    for (i=0;i<=str.length-1;i++){
        if ((str.charAt(i))-(str.charAt(i)===0))
        return str.charAt(i)
    }
    return str
}





function remove(array, element) {
    for(var i = 1;i<=array.length;i++)
    if (array[i]===element){
        array.splice(i,i)
    }
    return array

}

function average(arrOfNumbers) {
    var sum = 0
    var avg = 0
    for (var i = 0;i<arrOfNumbers.length;i++){
        sum=sum+arrOfNumbers[i]
    }
    avg = sum/2
    return avg}


    function findMax(str) {
    }






    function evenDigitsOnly(input) {
        for (var i =0;i<input.length;i++){
            if (input[i]%2===0){
                
                return true
            }
            else {
                return false
            }
        }
    }



    function palindrome(str) {
        var strv = ''
        for (var i =str.length-1;i>=0;i--){
            strv=strv+str[i]
        }
        if (str===strv){
            return true
        }
        else {
            return false
        }
    }




    function firstDuplicate(array) {
        var x = 0
        for (var i =0;i<array.length-1;i++){
            if (array[i]===array[i]){
                return array[i]
            }
        }
        return 'false'
    }

