import re
import dbp


class Person(object):
    def __init__(self,full_name,money,sleepmood,healthRate):
        self.full_name=full_name
        self.money=money
        self.sleepmood=sleepmood
        self.healthRate=healthRate
    def sleep(self,hours):
        if(hours==7):
            print("happy")
        elif(hours<7):
            print("tired")
        else:
            print("lazy")
    def eat(self,meals_no):
        health_rate=0
        if(meals_no==3):
            print("healt rate is 100%")
        elif(meals_no==2):
            print("ur health rate is 75%")
        elif(meals_no==1):
            print("ur health rate is 50%")
        else:
            print("visit a dr to check on u")
    def buy(self,items):
        Money=100
        for i in range (items):
            Money=Money-(Money*0.1)





class Employee(Person):

    def __int__(self,full_name,money,sleepmood,healthRate,id,email,workmood,salary,is_manager):
        self.id=id
        self.email=email
        self.workmood=workmood
        self.salary=salary
        self.is_manager=is_manager
        Person.__init__(self, full_name, money,sleepmood,healthRate)
    def check_email(self,email):
        regex = '^[a-z0-9]+[\._]?[a-z0-9]+[@]\w+[.]\w{2,3}$'
        if (re.search(regex, email)):
            return email
        else:
            return ("invalid Email")
    def get_salary(self):
        if self.salary>1000:
            return self.salary
        else:
            return False
    def get_healthRate(self):
        if (self.healthRate>0 and self.healthRate<=100):
            return self.healthRate
        else:
            return False



    def send_email(self,to,subject,body_reciever_name):
        try:
            f = open("email.txt","a")
            f.write("to:"+to+"\nsubject"+subject+"\n"+body_reciever_name)
        except Exception:
            print("Something went wrong when writing to the file")
        finally:
            f.close()
    def work(self,hours):
        if(hours==8):
            print("happy")
        elif(hours>8):
            print("tired")
        else:
            print("lazy")


class office:
    def __int__(self,**employee):
        self.employee=employee
    @classmethod
    def get_all_employees(cls):
        employees=dbp.get_employees()
        print(employees)
        return employees

    @classmethod
    def get_employee(cls,empId):
        employee=dbp.get_an_employee(empId)
        print(employee)
    def fire(self,empId):
        delted_employee=dbp.fire_an_employee(empId)
        print(delted_employee)
    def hire(cls,emp):
        print(emp)
        add_employee=dbp.insert_an_employee(emp)
        print(add_employee)

if __name__ == "__main__":

    not_quit=True
    id=0
    while(not_quit):
        value=(input("1-to add employee press 1\n2-to fire an employee\nq-to quit\n"))
        if (value=='1'):
            mngr=int(input("if manager press 2 if normal employee press 3"))
            id += 1
            if(mngr==2):
                is_manager=True
                name=input("enter the name")
                email=input("enter the mail")
                a = Employee(name,0,0,0)
                a.email=email
                a.salary=0
                a.is_manager=is_manager
                a.workmood=0
                my_office=office()
                my_office.hire(vars(a))
            elif(mngr==3):
                is_manager=False
                name=input("enter the name")
                email=input("enter the mail")
                salary=int(input("enter the salary"))
                a = Employee(name, 0, 0, 0)
                a.email = email
                a.salary = salary
                a.is_manager = is_manager
                a.workmood = 0
                my_office = office()
                my_office.hire(vars(a))
            else:
                pass
        elif(value=='2'):
            fireId=int(input("enter the id"))
            my_office=office()
            my_office.fire(fireId)
        else:
            not_quit=False
            break





















