from collections import Counter
import sys
# #problem1
# import math
# x1=5
# x2=2
# y1=3
# y2=3
# d=math.sqrt((x2-x1)**2+(y2-y1)**2)
# print(d)
#-----------------------------------------------------------------------------------------------------------------------------------------------------------
# #PROBLEM2
# def filter(my_list):
#     filtered_list=set()
#     for ele in my_list:
#         if ele not in filtered_list:
#             filtered_list.add(ele)

#     return list(filtered_list)      

# result=filter([1,1,1,5,3,5,6])
# print (result)
#---------------------------------------------------------------------
# #problem3
# def split_string(str):
#     if len( str)%2==0:
#        front=str[0:int(len(str)/2)]
#        back=str[int(len(str)/2):]
#     else:
#         front=str[0:int(round(len(str)/2))]
#         back=str[int(round(len(str)/2)):]
   
         
#     return front,back   
 
# def strung_concat(str1,str2):
#    str1= split_string(str1)
#    str2= split_string(str2)
#    return str1[0]+str2[0]+" "+str1[1]+str2[1]

# str1,str2=input("enter to strings: ").split()
# x=strung_concat(str1,str2)
# print(x)
#----------------------------------------------------------------------------------------------------------------
#problem4
def find_most_common():
    f = open(sys.argv[1], "r")
    words=Counter(f.read().split()).most_common(20)
    print(words)
    f.close()
    f2 = open("popular_words.txt", "w")
    for word in words:
         f2.write("%s\t" %word[0])

   
    f2.close()
find_most_common()

# #problem5
# def remove_vowels():
#   str=input("enter your string:  ")
#   str=str.replace("a","").replace("e","").replace("o","").replace("u","").replace("i","")
#   print(str)
# remove_vowels()
#---------------------------------------------------------------------------------------------------------------------------
#problem6
# def search_charactar(str,ch):
#     founds=[]
#     for i,x in enumerate(str):
        
    
#         if x==ch:
#             founds.append(i)
#     return founds        
    
# str,ch=input("enter string,and char :  ").split()
# indecies=search_charactar(str,ch)
# print(indecies)