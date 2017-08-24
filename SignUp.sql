DECLARE @strUsername varchar(max) = 'TestBob';
DECLARE @strEmail varchar(max) = 'TestBob@htkb.com';
DECLARE @strPasscode varchar(max) = 'green20';
DECLARE @bitWomen bit = 1;
DECLARE @bitMen bit = 0;
DECLARE @bitTransWomen bit = 0;
DECLARE @bitTransMen bit = 0;



INSERT INTO Users (Username, Email, Passcode, Women, Men, TransWomen, TransMen, LoggedOn, Access) VALUES ( @strUsername, @strEmail, @strPasscode, @bitWomen, @bitMen, @bitTransWomen, @bitTransMen, 0, 0 );


select * from Users;

delete from Users where Indext = 6;












