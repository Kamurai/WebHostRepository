<?php
    include './Universal.php';
	
    function Title($Page)
    {
        $Result = '<title>';
        $Default = 'Private Projects';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==2)
        {
            $Result = $Result.'Assault CCG';
        }
        else if($Page==3)
        {
            $Result = $Result.'Mars Projects';
        }
        else if($Page==7)
        {
            $Result = $Result.'Truth';
        }
        else if($Page==8)
        {
            $Result = $Result.'Kingdoms';
        }
        else if($Page==9)
        {
            $Result = $Result.'Terminal World';
        }
        else if($Page==10)
        {
            $Result = $Result.'Monster Office Workplace';
        }
        else if($Page==11)
        {
            $Result = $Result.'Battle Princesses';
        }
        else if($Page==12)
        {
            $Result = $Result.'Sacred Offerings';
        }
        else if($Page==13)
        {
            $Result = $Result.'The Way';
        }
        else if($Page==14)
        {
            $Result = $Result.'Conspiratorium';
        }
        else if($Page==15)
        {
            $Result = $Result.'Conversion';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        $Result = $Result.'</title>';
        
        return $Result;
    }

    function Navigation($Level)
    {
        $Result = '
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section1/index.php\'>Gynowars</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project2.php\'>Assault</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project3.php\'>Mars</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section4/index.php\'>Renley</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section5/index.php\'>Antarrea</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Section6/index.php\'>Editations</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project7.php\'>Truth</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project8.php\'>Kingdoms</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project9.php\'>Terminal World</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project10.php\'>Monster Office Workplace</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project11.php\'>Battle Princesses</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project12.php\'>Sacred Offerings</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project13.php\'>The Way</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project14.php\'>Conspiratorium</a></br></br>
            <a class=\'navlinkA\' href=\''.Path($Level).'Section2/Project15.php\'>Conversion</a></br></br>
        ';
        return $Result;
    }
    
    function ContentHeader($Page)
    {
        $Result = '';
        $Default = 'Private Projects';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==2)
        {
            $Result = $Result.'Assault CCG';
        }
        else if($Page==3)
        {
            $Result = $Result.'Mars Projects';
        }
        else if($Page==7)
        {
            $Result = $Result.'Truth';
        }
        else if($Page==8)
        {
            $Result = $Result.'Kingdoms';
        }
        else if($Page==9)
        {
            $Result = $Result.'Terminal World';
        }
        else if($Page==10)
        {
            $Result = $Result.'Monster Office Workplace';
        }
        else if($Page==11)
        {
            $Result = $Result.'Battle Princesses';
        }
        else if($Page==12)
        {
            $Result = $Result.'Sacred Offerings';
        }
        else if($Page==13)
        {
            $Result = $Result.'The Way';
        }
        else if($Page==14)
        {
            $Result = $Result.'Conspiratorium';
        }
        else if($Page==15)
        {
            $Result = $Result.'Conversion';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }
    
    function Content($Page)
    {
        $Result = '';
        $Default = '
            This section is dedicated to HTKB projects.
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==2)
        {
            $Result = $Result.'
                This section is dedicated CCG project Assault.
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                This section is dedicated to the Mars centered project Opposition.
            ';
        }
        else if($Page==7)
        {
            $Result = $Result.'
                This section is dedicated to the MMO RTS project Truth.  Explore the galaxy, smuggle goods, steal from your friends and battle your adversaries.
            ';
        }
        else if($Page==8)
        {
            $Result = $Result.'
                This section is dedicated to the digital board game project Kingdoms.  Explore the world\'s Kingdoms, get rich, get strong and conquer.
            ';
        }
        else if($Page==9)
        {
            $Result = $Result.'
                This section is dedicated to the simulation MMO centered project Terminal World.  This is a virtual environment where a zombie outbreak is about to happen.  Can you beat
						the zombies?  Can you survive?
            ';
        }
        else if($Page==10)
        {
            $Result = $Result.'
                This section is dedicated to the card and board game project \'Monster Office Workplace\'.  These monsters mean serious business.<br/>
                        Can you earn the most credit and smooze your way into a promotion?<br/>
                    </br>
                    </br>
                        You can download the Tabletop Simulator mod here:<br/>
                        <a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=691344800\'>Steam Workshop</a><br/>
                    </br>
                    </br>
                        Monster Office Ruleset v0.1<br/>
                        <br/>
                        1) Player resources:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) Resource deck: Work (Resource) Cards<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) Project Deck: Cards representing project tiles.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;3) Player tokens<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;4) Credit tokens<br/>
                        2) Setup:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) Each player gets 3 resource cards, and 1 project card.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) Before the game, each player plays their project card.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;3) Going first:<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Each player plays 1 card face down and everyone reveals at once(do not discard).<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) The highest non-common card (ties are eliminated), goes first.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) In the case that everyone ties, perform rounds until someone wins.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4) If all cards are played, then 1 card is dealt to each player face up until a winner occurs.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5) Each player keeps the cards he/she is dealt.<br/>
                        3) Grid map to which project tiles are played.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1)  Player must place to a valid space, if available.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2)  If no space is available, then the player chooses how projects shift.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1)  The player must shift the least amount of projects.<br/>
                        4) Projects require different resources by type and number/quantity.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) When meeting project requirements, place a player token on the card stack<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) Points of credit are earned upon project completion by project rewards (Listed on the project tile.).<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;3) There are 6 \'colors\' of resources with the following quantities:<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) 1 card with quantity of 5.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) 2 cards with quantity of 4.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3) 3 cards with quantity of 3.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4) 4 cards with quantity of 2.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5) 5 cards with quantity of 1.<br/>
                        5) Actions:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) Draw Project: only 1.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) Play Project: only 1.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;3) Draw Resources: 3 resources.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;4) Play Resources: As many as available.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Place a number of tokens equal to the number on the resource card on the project tile.<br/>
                        6) Restrictions<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) Hand Limit: each player has a hand limit of 6 cards.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) Workhorse: the player with the lowest score has no hand limit.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1) Any player with a score of zero counts as a Workhorse.<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2) People tied for Workhorse are all Workhorses.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;3) Workhorse is evaluated at each person\'s discard phase, i.e. a player only discards if they are NOT a workhorse
                                at THEIR discard phase.<br/>
                        7) Scoring:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) A player who completes the project collects the project.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) A player gets 1 point of credit for completing a project\'s color set (exactly) once the project has been completed.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;3) A player gets 1 point of credit for each player token on the project that has been completed.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;4) A player gets a number of points of credit equal to the number of color sets on the project tile,
                                for being the one to complete a project.<br/>
                        8) End Conditions:<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;1) Game ends when 10 projects have been completed.<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;2) Player with the most \'credit\' wins.<br/>	
            ';
        }
        else if($Page==11)
        {
            $Result = $Result.'
                This section is dedicated to the card game project \'Battle Princesses\'.  Ever wanted to see your favorite princess battle for the kingdom?
                These princess aren\'t your helpless maidens, but valiant warriors themselves.
            ';
        }
        else if($Page==12)
        {
            $Result = $Result.'
                	This section is dedicated to the board game project \'Sacred Offerings\'.<br/>
							Being a god is hard, you have to eat, but
							don\'t want to fall out favor with the people more than the other deities.
							Draw people to worship you, but be discerning about who is sacrificed.
						</br>
						</br>
							You can download the Tabletop Simulator mod here:
							<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=652957007\'>Steam Workshop</a>
						</br>
						</br>
								Sacred Offerings Ruleset v0.1<br/>
						<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Select a board for the number of players (from 2 to 6):<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The two player board is a square with two alters.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The three player board is a triangle with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The four player board is a square with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The five player board is a pentagon with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								The six player board is a hexagon with an alter at its center.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Set tokens on the board in the following manner for each player corner:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									2 players: <br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										1 4-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										3 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										5 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										7 1-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									3 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										8 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										6 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										4 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										2 4-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									4 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										7 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										5 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										3 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										1 4-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									5 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										8 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										6 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										4 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										2 4-point tokens<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									6 players:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										8 1-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										6 2-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										4 3-point tokens<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										2 4-point tokens<br/>
							<br/>	
							Determine First player:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Decide amongst yourself through any method of yelling, rolling dice, pulling straws (not hair), etc.<br/>
							<br/>
							Player turn:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Each turn a player must move a character on the board.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Tokens move in one of two ways:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									One space in any direction. (Like a King in chess)<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Able to jump multiple pieces. (Like a King in checkers)<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								That character must end closer to the alter than they began.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								If a player CAN sacrifice a character, they must.<br/>
							<br/>
							Scoring:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								A player get +1 points equal to the value of the character sacrificed.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								A player gets -1 point on a turn they did not sacrifice a character.<br/>
							<br/>
							End condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								No characters are left on the board.<br/>
							<br/>
							Victory condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The player with the lower points wins!<br/>
            ';
        }
        else if($Page==13)
        {
            $Result = $Result.'
                	This section is dedicated to the card game project \'The Way\'.<br/>
							You seek to find enlightment by contemplating the elements.
							Escape the binds of the world and the board to reach enlightment and win.
						</br>
						</br>
							You can download the Tabletop Simulator mod here:
							<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=652925835\'>Steam Workshop</a>
						</br>
						</br>
							
								The Way Ruleset v0.1<br/>
							
							<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Board:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Place the board on the table.  Place one player piece for each player in the center of the board.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Deck:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Shuffle the card deck and deal 4 cards to each player.<br/>									
							<br/>
							Symbols:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								There are 4 basic symbols that represent directions on the board.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Air moves a player piece towards the yellow gate.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Earth moves a player piece towards the brown gate.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Fire moves a player piece towards the red gate.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Water moves a player piece towards the blue gate.<br/>
							<br/>
							Play:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								On each player\'s turn, they may do one of the following things:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									1)	Draw a card.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									2)	Play a card.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										a)	This can affect your piece.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										b)	This can affect pieces belonging to other players.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										c)	This cannot result in a player exiting the board through another player\'s side of the board.<br/>
										<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards work by targeting 1, 2, or all player pieces.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										This is represented by the number of borders on the card, 1 set of borders, 2 sets of borders, or 4 sets of borders.<br/>
										<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards with 1 set of borders will have 1 or 2 symbols, representing how far in the direction<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										of the symbol to move the player piece.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards with 2 sets of borders will have 1 symbol in each set of borders, representing<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										that the player may make two independent moves.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										This can be one target twice, or two targets once.<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Cards with 4 sets of borders will have 1 symbol, representing 1 movement for<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										ALL player pieces in the direction of the symbol.<br/>
										<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									3)	Discard a card to draw two cards.<br/>
							<br/>	
							End Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								A player is moved off of the board.<br/>								
							<br/>	
							Win Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The player moved off the board is the winner.<br/>
            ';
        }
        else if($Page==14)
        {
            $Result = $Result.'
                	This section is dedicated to the board game project \'Conspiratorium\'.<br/>
							A game of assassins and CIA, you must remember who is friend and who is not.
						</br>
						</br>
							You can download the Tabletop Simulator mod here:
							<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=656617895\'>Steam Workshop</a>
						</br>
						</br>
								Consipatorium Ruleset v0.1<br/>
						<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Board<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Token Set: 100 tokens per player<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Divide tokens equally amongst players<br/>
						<br/>	
							Round:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Each player takes a turn performing one action.<br/>
						<br/>	
							Turn:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								On its turn, a player may do one of the following actions:<br/>
									<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Recon:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Look at a token affiliation.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Turn:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Change the affiliation of a token.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Move Asset:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Move a token to an adajecent space on the board.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Assasinate:
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Have a token on the board remove another adjacent token on the board.<br/>
							<br/>		
							End Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								One token is left on the board.<br/>
							<br/>	
							Win Condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The player matching the affiliation of the last remaining token on the board wins.<br/>
            ';
        }
        else if($Page==15)
        {
            $Result = $Result.'
                	This section is dedicated to the board game project \'Conversion\'.<br/>
							Compete on the elemental market by processing elements and becoming the elemental kingpin.
						</br>
						</br>
							You can download the Tabletop Simulator mod here:
							<a href=\'http://steamcommunity.com/sharedfiles/filedetails/?id=658966981\'>Steam Workshop</a>
						</br>
						</br>
							
								Conversion Ruleset v0.1<br/>
							
							<br/>
							Setup:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Place board on table.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Place element tokens on the board, these are piece limited.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Place currency tokens to the side of the board.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Deal two objective cards to each player.<br/>
							<br/>
							Round:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The round leader is the first player to go in a round.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								The round leader rotates clockwise each round.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Each player takes one action on their turn.<br/>
							<br/>
							Turn:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Go to Work:<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Generate an element.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Place elements in worker spots to do different conversions:<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Double an element<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Fire to Air<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Air to Water<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Water to Earth<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Earth to Fire<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Fire to Earth<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Earth to Water<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Water to Air<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Air to Fire<br/>
										&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
										Fair trade:<br/>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											Put one element out for someone to trade with you.<br/>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											Trade with a presented element.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Turn in an objective.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Return the designated elements to their respective pools.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									Collect currency in the amount the highest element required, minus 1, times two. (n-1)*2<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Draw a new objective.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Buy elements, this can be from \'the bank\' or other players.<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									When buying from other players, those players may set their own prices or refuse to sell.<br/>
							<br/>
							End condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Buy Out:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								A player is out of objective cards, with at least 10 currency.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Retire:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								A player is out of objective cards, has completed 5 objectives and is out of elements.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Shortage:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								No elements can be collected.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Monopoly:
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								A player has all of one element.<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								Market Crash:
								&nbsp;&nbsp;
								No currency is available.<br/>
							<br/>
							Win condition:<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;
								In the event of a tie, then the player that triggered the event wins.<br/>
            ';
        }
        else
        {
            $Result = $Result.$Default;
        }
        
        return $Result;
    }
    
    function Versions($Page)
    {
        $Result = '';
        $Default = '
            <a href=\'http://htkb.dyndns.org/Section2/index.html\'>HTML</a><br>
            <a href=\'http://htkb.dyndns.org/Javascript/Section2/index.html\'>HTML Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASP/Section2/index.asp\'>ASP Javascript</a><br>
            <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/index.aspx\'>ASP.NET Javascript</a><br>
            <a href=\'http://htkb.dyndns.org/Section2/index.shtml\'>Perl</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/index.jsp\'>JSP</a><br>
            <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/index.xhtml\'>JSF</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/index.cshtml\'>ASP.NET Web App</a><br>
            <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/index.aspx\'>ASP.NET Webform</a><br>
            <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/index\'>ASP.NET MVC App</a><br>
            <a href=\'http://htkb.dyndns.org/SSI/Section2/index.html\'>Apache SSI</a><br>
        ';
        
        if($Page==0)
        {
            $Result = $Result.$Default;
        }
        else if($Page==2)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project2.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project2.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project2.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project2.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project2.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project2.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project2.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project2.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project2.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project2\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project2.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==3)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project3.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project3.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project3.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project3.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project3.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project3.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project3.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project3.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project3.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project3\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project3.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==7)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project7.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project7.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project7.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project7.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project7.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project7.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project7.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project7.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project7.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project7\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project7.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==8)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project8.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project8.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project8.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project8.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project8.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project8.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project8.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project8.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project8.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project8\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project8.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==9)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project9.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project9.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project9.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project9.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project9.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project9.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project9.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project9.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project9.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project9\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project9.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==10)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project10.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project10.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project10.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project10.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project10.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project10.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project10.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project10.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project10.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project10\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project10.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==11)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project11.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project11.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project11.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project11.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project11.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project11.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project11.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project11.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project11.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project11\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project11.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==12)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project12.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project12.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project12.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project12.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project12.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project12.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project12.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project12.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project12.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project12\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project12.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==13)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project13.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project13.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project13.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project13.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project13.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project13.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project13.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project13.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project13.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project13\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project13.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==14)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project14.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project14.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project14.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project14.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project14.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project14.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project14.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project14.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project14.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project14\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project14.html\'>Apache SSI</a><br>
            ';
        }
        else if($Page==15)
        {
            $Result = $Result.'
                <a href=\'http://htkb.dyndns.org/Section2/Project15.html\'>HTML</a><br>
                <a href=\'http://htkb.dyndns.org/Javascript/Section2/Project15.html\'>HTML Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASP/Section2/Project15.asp\'>ASP Javascript</a><br>
                <a href=\'http://htkb.dyndns.org:81/ASPNET/Section2/Project15.aspx\'>ASP.NET Javascript</a><br>
                <a href=\'http://htkb.dyndns.org/Section2/Project15.shtml\'>Perl</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSPApplication/Section2/Project15.jsp\'>JSP</a><br>
                <a href=\'http://htkb.dyndns.org:8080/JSFApplication/Section2/Project15.xhtml\'>JSF</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebApplication/Section2/Project15.cshtml\'>ASP.NET Web App</a><br>
                <a href=\'http://htkb.dyndns.org:81/WebForm/Section2/Project15.aspx\'>ASP.NET Webform</a><br>
                <a href=\'http://htkb.dyndns.org:81/MVC/Main/Section2/Project15\'>ASP.NET MVC App</a><br>
                <a href=\'http://htkb.dyndns.org/SSI/Section2/Project15.html\'>Apache SSI</a><br>
            ';
        }
        else
        {
            $Result = $Default;
        }
        
        return $Result;
    }


?>