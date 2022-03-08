/*
 * Given the tables above, find the following:
a. The names of all salespeople that have an order with Samsonic.
b. The names of all salespeople that do not have any order with Samsonic.
c. The names of salespeople that have 2 or more orders.
d. The names and ages of all salespersons must having a salary of 100,000 or greater.
e. What sales people have sold more than 1400 total units?
f. When was the earliest and latest order made to Samony?
 */

CREATE TABLE Salesperson (
    ID int,
    Name varchar(32),
    Age int,
    Salary int
);



INSERT INTO Salesperson (ID, Name, Age, Salary)
VALUES
(6, 'Chris', 34, 40000), 
(7, 'Dan', 41, 52000),
(8, 'Ken' 57, 115000),
(11, 'Joe', 38, 38000);


CREATE Table Customer (
	ID int,
	Name varchar(32),
	City varchar(32),
	IndustryType varchar(1)
);
	
Insert into Customer (ID, Name, City, IndustryType)
Values
(4, 'Samsonic', 'pleasant', 'J'),
(6, 'Panasung', 'oaktown', 'J'),
(7, 'Samony', 'jackson', 'B'),
(9, 'Orange', 'Jackson', 'B');

Create Table Orders (
	Number int,
	order_date Date,
	cust_id int,
	salesperson_id int,
	Amount int
);

Insert into Orders2 (Number, order_date, cust_id, salesperson_id, Amount)
Values
(10, '8/2/96', 4, 2, 540),
(20, '1/30/99', 4, 8, 1800),
(30, '7/14/95', 9, 1, 460),
(40, '1/29/98', 7, 2,2400),
(50, '2/3/98', 6, 7, 600),
(60, '3/2/98', 6, 7, 720),
(70, '5/6/98', 9, 7, 150);
	


-- A) The names of all salespeople that have an order with Samsonic.
select DISTINCT s.Name
from Salesperson s
inner join Orders o
on s.ID = o.salesperson_id
inner join Customers c
on o.cust_id = c.ID
where c.Name = 'Samsonic';


-- b. The names of all salespeople that do not have any order with Samsonic.
 -- This one is still wrong
select DISTINCT s.Name
from Salesperson s
inner join Orders o
on s.ID = o.salesperson_id
inner join Customers c
on o.cust_id = c.ID
where c.Name != 'Samsonic' OR o.salesperson_id = NULL ;

-- c. The names of salespeople that have 2 or more orders.
select s.Name
from Salesperson s
inner join Orders o
on s.ID = o.salesperson_id
group by o.salesperson_id
having COUNT(o.order_date) >= 2;    


-- d. The names and ages of all salespersons must having a salary of 100,000 or greater.
select s.Name, s.Age
from Salesperson s
where s.salary >= 100000;

-- e. What sales people have sold more than 1400 total units?
select s.Name
from Orders2 o
inner join Salesperson s
on s.ID = o.salesperson_id
group by o.salesperson_id
having SUM(o.Amount) > 1400;


-- f. When was the earliest and latest order made to Samony?
select min(o.order_date), max(o.order_date)
from Orders o
inner join Customers c
on c.ID = o.cust_id
where c.Name = 'Samony';