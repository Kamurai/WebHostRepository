#!"C:\xampp\perl\bin\perl.exe"
use strict;
use warnings;
##  Writes the content of the webpage

my $Page = $ARGV[0];

print "<p align='left'>";
    if($Page <= 0)
    {
        print "This section is dedicated to HTKB designed armies based on the Warhammer 40K universe.";
    }
    elsif($Page == 1)
    {
        print "Ad Infinitum is a collective of A.I. constructs.  Little is known about these constructs ";
        print "as they are not known to negotiate.  While some technology has been recovered, it is rare ";
        print "to find anything viable after battles.";
    }
    elsif($Page == 2)
    {
        print "The Avia are a humanoid xenos that are naturally equipped with wings.  They can are the very least ";
        print "glide for short times without technological assistance.";
    }
    elsif($Page == 3)
    {
        print "De Luna is a designation for squads of walker vehicles that tend to ambush their targets.  ";
        print "While De Luna are automated vehicles, wreckage has determine that there are seats for ";
        print "pilots.  Theories range from A.I. control to remote communication.";
    }
    elsif($Page == 4)
    {
        print "The Eve are a race of terrifying beast creatures. ";
        print "These Xenos somewhat resemble large cats.";
    }
    elsif($Page == 5)
    {
        print "Geo Marines are a specialized Chapter concentrating equipment speciality.";
    }
    elsif($Page == 6)
    {
        print "This lost Chapter spent far too long stranded outside the reach of civilisation.  ";
        print "The Twin Fists specialize in close combat battles.";
    }
    elsif($Page == 7)
    {
        print "Vouboulids are a plant-like group of entities.  Using a hive structure, ";
        print "these Xenos seem to concentrate on populating one area at a time, causing a slow expansion.";
    }
    elsif($Page == 8)
    {
        print "These Xenos are unidentifiable as anything other than an advanced form of Fungus.  ";
        print "Their appearances range incredible wide, but tend to even resemble familiar forms of fungus.";
    }
    elsif($Page == 9)
    {
        print "These almost intangible Xenos appear to made of energy itself.  They use technology that appears unstable in nature.";
    }
    elsif($Page == 10)
    {
        print "The Dark are a Hive centered Xenos resembling a disturbing cross between snake, bird and insect.";
    }
    elsif($Page == 11)
    {
        print "Vivus mortem is a category for humans that are encountered and exhibit certain traits.  These possibly once humans ";
        print "have extreme abilities to endure the harshest environment, avoid lighted scenarios whenever possible, and attempt to ";
        print "take human prisoner whenever possible.  Escapees had stated that the Vivus Mortem would feed on them, and upon death ";
        print "and exposed bodies lose their excessive durability and seem to disintegrate rapidly enough to appear to 'turn to ash'.";
    }
print "</p>";