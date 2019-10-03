function CountOfPositiveSumOfNegative(arr) 
{
    let count = 0 ;
    let Nsum = 0;
    let finalArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
        else
        {
            Nsum += arr[i];
        }
    }
    if (count && Nsum != null ) 
    {
        finalArr = [count , Nsum];
        console.log(finalArr);

    }
    else
    {
        finalArr = [" " , " "];
        console.log("its an empty array , r u kidding me!!");
        
    }
}
CountOfPositiveSumOfNegative([1, 2, 3, 4, 5, 6, 7, 8, -9, -10, -11, -12, -13, -14, -15]);
CountOfPositiveSumOfNegative([]);

