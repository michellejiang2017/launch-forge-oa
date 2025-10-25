# Write a function that only accepts a number and returns an array that counts up to that number from 1; however, each multiple of 3 is 'yee' and every multiple of 4 is "haw" and every multiple of both is "yeehaw."


#the same idea as fizzbuzz but with an array and only multiples of 3 and 4 

def yeehaw(n): 
    result = [] 
    for i in range (1, n+1): 
        if i % 3 == 0 and i % 4 == 0: 
            result.append("yeehaw")
        elif i % 3 == 0: 
            result.append("yee")
        elif i % 4 == 0: 
            result.append("haw")
        else:
            result.append(i)
    return result
        

if __name__ == "__main__": 
    print(yeehaw(12))