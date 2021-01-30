1. Log the length of prices, because var i is incremented while looping through the prices array, and can be accessed outside of for loop, since it is a var not a let.
2. Log the discounted price of the last item in the prices array. Because discountedPrice is overwritten for each item in the prices array to be the discounted price of that item during for loop. So, after iteration of for loop, the discounted price of the last item stayed in var discountedPrice. Since it is a var, it can be accessed outside forloop
3. Log the final price of the last item in the prices array,which is its discounted price rounded to the 100th place. Because finalPrice is overwritten for each item in the prices array to be the final price of that item during for loop. So, after iteration of for loop, the final price of the last item stayed in var finalPrice. Since it is a var, it can be accessed outside forloop
4. [50, 100, 50] Because the function return discounted, which is the array of the final prices, containing discounted prices (multiply 0.5) of [100, 200, 300] rounded to the 100th place.
5. Error. Because let i is defined within the for loop block and not accessible outside of the block
6. Error. (Suppose we comment out line 11, Since line 11 has error, line 12 would have not been executed). Because let discountedPrice is defined within the for loop block and not accessible outside of the block.
7. The final price of the last item in the price array, which is its discounted price rounded to 100th place. Because let finalPrice is declared in the same block as line 13, so can be accessed by line 13 (Suppose we comment out line 11 and 12, Since line 11 and 12 has error, line 13 would have not been executed)
8. [ 50, 100, 150 ]. Since each final prices is pushed in the let discounted declared outside of forloop inside the function, which is the same scope as the return statement. So, when the function return discounted, it returns the array of the final prices, containing discounted prices (multiply 0.5) of [100, 200, 300] rounded to the 100th place. 
9. The program will not execute line 11 because line 7 tried to reassign constant finalPrice in the first iteration of for loop and a error will be thrown. **Suppose line 6, 7 and 8 were executed successfully, line 11 will cause error. Because let i is defined within the for loop block and not accessible outside of the block**
10. Error, first, const discountedPrice is declared within the for loop block, so is not accessible in line 12, which is outside of the block. Second, if the price array has more than one element, then suppose line 7 and 8 execute sucessfully, the for loop will go in another iteration, and then, line 6 will try to reassign constant discountedPrice and cause an error
11. Error. Line 17 will reassign constant finalPrice and cause an error.
12. Suppose all the previous lines executed successfully and the constants are modified, then [ 50, 100, 150 ] Since the function returns the array of the final prices, containing discounted prices (multiply 0.5) of [100, 200, 300] rounded to the 100th place. Suppose the constant were not modified, then [ 0,0,0 ] since we push the constant finalPrice to the array and its value is 0.
13. 
    A. student.name </br>
    B. student['Grad Year']</br>
    C. student.greeting()</br>
    D. student['Favorite Teacher'].name</br>
    E. student.courseLoad[0]
14. A. '32': since '3' is a string, the operator "+" automatically converted 2 into a string to perform string concatenation</br>
    B.1: Since operator "-" only makes sense if its operands are numbers, it automatically converted '3' into a number and computed 3-2</br>
    C.3: Since the first operand is a number, "+" should perform addition. So, the null is converted automatically to a number and becomes 0</br>
    D.'3null': Since the first operand is a string, "+" should perform concatenation. So, the null is converted automatically to a string and becomes 'null'</br>
    E.4: Boolean true is converted to number 1 and added with number 3</br>
    F.0: Both Boolean false and null are converted to number 0 and added together</br>
    G.'3undefined': undefined is converted to string 'undefined' and concatenated after string "3"</br>
    H."3" - undefined: undefined is not a valid number, so it becomes NaN. "3" should have been converted successfully to number 3, but number - NaN is NaN
15. A.true: When comparing values of different types, JavaScript converts the values to numbers.
'2' is converted to number 2 and is indeed greater than 1, so evaluates to true.</br>
    B.false: Both operands are strings, so doing string comperison, which is done character by character. First characters 2 is greater than 1, so false '2' is greater than '12'</br>
    C.true: When comparing values of different types, JavaScript converts the values to numbers. Number 2 equals number 2.</br>
    D.false: === checks the equality without type conversion and first checks if types are the same, 2 and '2' has different types.</br>
    E.false: When comparing values of different types, JavaScript converts the values to numbers. So true becomes 1 and does not equal 2</br>
    F.true: Boolean(2) becomes true, and true equals true</br>
16. == have type conversions but === does not, if the types are not the same, === return false immediately
17. "2 == true" is false as explained before, so does not enter the "if(2 == true){...}" block;
    "else if(2)" converts 2 to boolean true, so enter the block
18. 