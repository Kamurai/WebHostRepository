--drop procedure SignUp;

create PROCEDURE SignUp
(
    @strUsername varchar(max),
	@strEmail varchar(max),
	@strPasscode varchar(max),
    @bitWomen bit,
	@bitMen bit,
	@bitTransWomen bit,
	@bitTransMen bit

)
AS
BEGIN
	INSERT INTO Users (Username, Email, Passcode, Women, Men, TransWomen, TransMen, LoggedOn, Access) VALUES ( @strUsername, @strEmail, @strPasscode, @bitWomen, @bitMen, @bitTransWomen, @bitTransMen, 0, 0 );
END