var array=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var count = 1;
var value = 0;
var item;
for (var i=0; i<array.length; i++)
{
        for (var j=i; j<array.length; j++)
        {
                if (array[i] == array[j])
                 value++;
                if (count<value)
                {
                  count=value; 
                  item = array[i];
                }
        }
        value=0;
}
console.log(item+" "+ count +" times ")