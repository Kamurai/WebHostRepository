
DECLARE @intUserIndex int = 0;


select CelebrityIndex, Name, Picture, Sex, avg(OrderRank) as Ranking from BangOverLists, Celebrities, Users 
where UserIndex = Users.Indext
and (
( sex = 'F' and Users.Women = 1 )
or ( sex = 'M' and Users.Men = 1 )
or ( sex = 'W' and Users.TransWomen = 1 )
or ( sex = 'T' and Users.TransMen = 1 )
)
and CelebrityIndex = Celebrities.Indext
group by CelebrityIndex, Name, Picture, Sex order by Ranking
;



