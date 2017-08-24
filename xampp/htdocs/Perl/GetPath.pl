#!"C:\xampp\perl\bin\perl.exe"
##  Gets the base path based on the level of the webpage

my $Level = $ARGV[0];

my $Result = "";


if($Level <= 0)
{
    $Result = "./";
}
elsif($Level == 1)
{
    $Result = "../";
}
elsif($Level == 2)
{
    $Result = "../../";
}
elsif($Level == 3)
{
    $Result = "../../../";
}
elsif($Level == 4)
{
    $Result = "../../../../";
}
elsif($Level == 5)
{
    $Result = "../../../../../";
}
elsif($Level == 6)
{
    $Result = "../../../../../../";
}
elsif($Level == 7)
{
    $Result = "../../../../../../../";
}

return $Result;