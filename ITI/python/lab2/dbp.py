from getpass import getpass
from mysql.connector import connect, Error
def execute(query):
    try:
        with connect(
                host="localhost",
                user=input("Enter username: "),
                password=getpass("Enter password: "),
                database="person"
        ) as connection:
            print(connection)
            execute_query = query
            with connection.cursor() as cursor:
                # cursor.execute(create_employees_table_query)
                print("insertion b")
                cursor.execute(execute_query)
                result = cursor.fetchall()
                for row in result:
                    print(row)
                print("insertion a")
                connection.commit()
                print("coomit")
                return connection
    except Error as e:
        print(e)
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("MySQL connection is closed")
def insert_an_employee(employee):
    full_name=employee["full_name"]
    email=employee["email"]
    insert_employee_query = """
    INSERT INTO employee (full_name,email)
    VALUES
        ("%s","%s")
    """ % (

        full_name,
        email
    )
    execute(insert_employee_query)
def get_employees():
    select_employees_query = """
                SELECT * FROM employee;
                """
    execute(select_employees_query)
def get_an_employee(empId):
    select_an_employee_query = """
                SELECT * FROM employee where id = "%d";
                """ % (
        empId,
    )
    execute(select_an_employee_query)
def fire_an_employee(empId):
    delete_an_employee_query = """
                DELETE  FROM employee where id = "%d"
                """ % (
        empId,
    )
    execute(delete_an_employee_query)





