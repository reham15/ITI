from getpass import getpass
from mysql.connector import connect, Error
import mysql.connector


######################################################################################################################################
try:
    with connect(
            host="localhost",
            user=input("Enter username: "),
            password=getpass("Enter password: "),
            database="person"
    ) as connection:
        print(connection)
        create_employee_table_query = """
        CREATE TABLE if not exists employee(id INT PRIMARY KEY AUTO_INCREMENT, full_name TEXT,money INT, sleep_mood INT , healthRate INT,email varchar(100),workmood INT ,salary INT ,is_manager varchar(100))
        """

        with connection.cursor() as cursor:
            # cursor.execute(create_employees_table_query)
            print("insertion b")
            cursor.execute(create_employee_table_query)
            print("insertion a")
            connection.commit()
            print("coomit")
except Error as e:
    print(e)


##############################################################################################################################################







try:
    with connect(
            host="localhost",
            user=input("Enter username: "),
            password=getpass("Enter password: "),
            database="person"
    ) as connection:
        print(connection)
        create_office_table_query = """
        CREATE TABLE if not exists office  (id INT PRIMARY KEY AUTO_INCREMENT, name TEXT, employee_id INTEGER, FOREIGN KEY(employee_id) REFERENCES employee(id))
        """

        with connection.cursor() as cursor:
            # cursor.execute(create_employees_table_query)
            print("insertion b")
            cursor.execute(create_office_table_query)
            print("insertion a")
            connection.commit()
            print("coomit")
except Error as e:
    print(e)

def insert_an_employee(employee):
    #id=employee["id"]
    full_name=employee["full_name"]
    email=employee["email"]
    print("reached here")
    try:
        with connect(
                host="localhost",
                user=input("Enter username: "),
                password=getpass("Enter password: "),
                database="person"
        ) as connection:
            print(connection)
            insert_employee_query = """
            INSERT INTO employee (full_name,email)
            VALUES
                ("%s","%s")
            """% (

                    full_name,
                    email
                )

            with connection.cursor() as cursor:
                # cursor.execute(create_employees_table_query)
                print("insertion b")
                cursor.execute(insert_employee_query)
                print("insertion a")
                connection.commit()
                print("coomit")
    except Error as e:
        print(e)


def get_employees():
    try:
        with connect(
                host="localhost",
                user="rowan",
                password="Password123#@",
                database="person"
        ) as connection:
            select_employees_query = """
            SELECT * FROM employee;
            """
            with connection.cursor() as cursor:
                cursor.execute(select_employees_query)
                result = cursor.fetchall()
                for row in result:
                    print(row)

    except Error as e:
        print(e)
def get_an_employee(empId):
    try:
        with connect(
                host="localhost",
                user="rowan",
                password="Password123#@",
                database="person"
        ) as connection:
            select_an_employee_query = """
            SELECT * FROM employee where id = "%d";
            """ % (
                    empId,
                )
            with connection.cursor() as cursor:
                cursor.execute(select_an_employee_query)
                result = cursor.fetchall()
                for row in result:
                    print(row)

    except Error as e:
        print(e)

def fire_an_employee(empId):
    try:
        with connect(
                host="localhost",
                user="rowan",
                password="Password123#@",
                database="person"
        ) as connection:
            delete_an_employee_query = """
            DELETE  FROM employee where id = "%d"
            """ % (
                    empId,
                )
            with connection.cursor() as cursor:
                cursor.execute(delete_an_employee_query)
                connection.commit()


    except Error as e:
        print(e)
