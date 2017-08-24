
DECLARE @strUserIndex int = 0;
DECLARE @UserCount int = 0;
DECLARE @OrderCount int = 0;
DECLARE @TargetIndex int = 0;
DECLARE @SavedOrder int = 0;

--//request count of records related to user
SET @UserCount = (select count(UserIndex) from BangOverLists where userindex = @strUserIndex);
--//if count != 0 (user has records)
if @UserCount > 0
BEGIN
	--//request count of random non-locked celebrities from personal list
    SET @OrderCount = (select count(Indext) from BangOverLists where UserIndex = @strUserIndex and (UpLock = 0 or DownLock = 0));
    --//if count is not 0 (there are some unlocked records)
    if @OrderCount != 0
	BEGIN
		--//request random non-locked celebrity from personal list
        SET @TargetIndex = 0--(select top 1 Indext from BangOverLists where UserIndex = @strUserIndex and (UpLock = 0 or DownLock = 0) order by newid());
        --//find a record to compare to the one we have
			--//if order is 1 or equal to count
        if ( (select count(UserIndex) from BangOverLists 
		where (Indext = @TargetIndex and OrderRank = 0) or (Indext = @TargetIndex and OrderRank = @UserCount-1) ) > 0 )
		BEGIN    
			--//request @TargetIndex from personal list
			select Celebrities.Indext, Name, Sex, Picture from BangOverLists, Celebrities where BangOverLists.Indext = @TargetIndex and CelebrityIndex = Celebrities.Indext
			UNION
			--//request random from global list
				--//exclude from personal list
			select * from ( select Top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, Users
			where ((Sex = 'F' and Women = 1) or (Sex = 'M' and Men = 1) or (Sex = 'W' and TransWomen = 1) or (Sex = 'T' and TransMen = 1)) 
			and Users.Indext = @strUserIndex
			and Celebrities.Indext not in(
			select Celebrities.Indext from Celebrities, BangOverLists, Users
			where Users.Indext = @strUserIndex and UserIndex = Users.Indext and CelebrityIndex = Celebrities.Indext
			) order by newid() ) T1;
        END
		--//else we're looking for an adjacent celebrity from the personal list
        ELSE
        BEGIN
			SET @SavedOrder = (select OrderRank from BangOverLists where Indext = @TargetIndex);
			--//request @TargetIndex from personal list
			select Celebrities.Indext, Name, Sex, Picture from  Celebrities, BangOverLists where BangOverLists.Indext = @TargetIndex and CelebrityIndex = Celebrities.Indext
			UNION
            --//request adjacent non-locked celebrity from personal list
			select * from (
				select top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, BangOverLists where UserIndex = @strUserIndex and Celebrities.Indext = CelebrityIndex and ( (OrderRank = @SavedOrder-1 and DownLock = 0) or (OrderRank = @SavedOrder+1 and UpLock = 0) ) order by newid()
			) T2;
		END
    END                    
	--//else (there are no unlocked records)
    ELSE
    BEGIN
		--//request Order = 0 or Order = count from personal list
		select * from (
			select top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, BangOverLists where BangOverLists.Indext = @TargetIndex
		order by newid() ) T3
		UNION
		--//request random from global list
			--//exclude from personal list
	    select * from ( select Top 1 Celebrities.Indext, Name, Sex, Picture from Celebrities, Users
		where ((Sex = 'F' and Women = 1) or (Sex = 'M' and Men = 1) or (Sex = 'W' and TransWomen = 1) or (Sex = 'T' and TransMen = 1)) 
		and Users.Indext = @strUserIndex
		and Celebrities.Indext not in(
		select Celebrities.Indext from Celebrities, BangOverLists, Users
		where Users.Indext = @strUserIndex and UserIndex = Users.Indext and CelebrityIndex = Celebrities.Indext
		) order by newid() ) T4;
    END
END
--//else (if user has no records)
ELSE
BEGIN
	--//request 2 random celebrities from global list
    select top 2 * from Celebrities, Users where ((Sex = 'F' and Women = 1) or (Sex = 'M' and Men = 1) or (Sex = 'W' and TransWomen = 1) or (Sex = 'T' and TransMen = 1)) order by newid();
END










