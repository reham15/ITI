from getpass import getpass
from mysql.connector import connect, Error
import mysql.connector


if __name__ == "__main__":
    #################################################
    try:
        with connect(
                host="localhost",
                user=input("Enter username: "),
                password=getpass("Enter password: "),
                database="person"
        ) as connection:
            print(connection)
            create_person_table_query = """
            CREATE TABLE person(id INT PRIMARY KEY AUTO_INCREMENT, full_name TEXT, employee_id INTEGER, FOREIGN KEY(employee_id) REFERENCES employees(id))
            """

            with connection.cursor() as cursor:
                # cursor.execute(create_employees_table_query)
                print("insertion b")
                cursor.execute(create_person_table_query)
                print("insertion a")
                connection.commit()
                print("coomit")
    except Error as e:
        print(e)

    ###############################################
    try:
        with connect(
                host="localhost",
                user=input("Enter username: "),
                password=getpass("Enter password: "),
                database="person"
        ) as connection:
            print(connection)
            create_employees_table_query = """
            CREATE TABLE employees(
                id INT AUTO_INCREMENT PRIMARY KEY,
                email VARCHAR(100),
                workmood INT,
                salary INT,
                is_manager VARCHAR(100)
            )
            """
            insert_employees_query = """
            INSERT INTO employees (id,email, workmood, salary, is_manager)
            VALUES
                (1,"Forrest@gmail.com", 19, 10000, "true"),
                (2,"3kk@gmail.com", 20, 12000, "false"),
                (3,"Eternal@gmail.com", 20, 5000, "false"),
                (4,"Good@gmail.com", 17, 2000, "false"),
                (5,"Skyfall@gmail.com", 22, 13000, "false"),
                (6,"Gladiator@gmail.com", 20, 5000, "false"),
                (7,"Black@gmail.com", 25, 1000, "false"),
                (8,"Titanic@gmail.com", 17, 25000, "false")


            """
            with connection.cursor() as cursor:
                #cursor.execute(create_employees_table_query)
                print("insertion b")
                cursor.execute(insert_employees_query)
                print("insertion a")
                connection.commit()
                print("coomit")
    except Error as e:
        print(e)

    def get_employees():
        try:
            with connect(
                    host="localhost",
                    user=input("Enter username: "),
                    password=getpass("Enter password: "),
                    database="person"
            ) as connection:
                select_employees_query = """
                SELECT * FROM employees
                """
                with connection.cursor() as cursor:
                    cursor.execute(select_employees_query)
                    connection.commit()

        except Error as e:
            print(e)
