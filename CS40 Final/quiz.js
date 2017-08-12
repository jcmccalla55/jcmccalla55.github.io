
var list=["Should white women be allowed to dress up as mexican men on halloween?", "Should controversial speakers, such as Heather MacDonald, who are deemed as racist, be allowed to speak at colleges?", "Whilst traversing social media you see another black man has been killed by law enforcement. What is your first thought?","Do you agree with the fact that all white people are inherently racist?","You overhear a group of white people saying the N word because its part of the song they are listening to, do you say anything to them?","You're in a classroom and a white teacher seems to frequently speak over the one person of color in the class relative to the other white children. Do you think this has to do with race?","Should Idris Elba(a black man) be allowed to play James Bond?","Does George Bush Hate Black People? (Hint: Yeezus has the answer)"]
var index=0; 
var list2=["3/10","4/10","5/10","6/10","7/10","8/10","9/10","10/10"]
var counter=0 //counts score



function onNext(numb,form1){
	document.getElementById("foot").innerHTML=""
	var x=list[index]
	var y=list2[index]
	if (index > 7)//displays result
		{for (var i=0; i < form1.length + 1; i++)
			 {if (form1[i].checked)
			 		{counter += parseInt(form1[i].value);
			 			break}
			 else if (i==4 && !form1[i].checked)
			 	{alert("Pick a number!")}}; //validates form
		{if(counter <= 19)
			{document.getElementById("genquest").innerHTML = "<b style='font-size:150%';> Not Racist! </b> <br> <br> You are what some might say, woke! If you're white, you know how to navigate privilege! If you're a PoC, well you're just not ignorant to your own oppression! <br> <br> #EndSystemicRacism<br>"
			+ "Your Score Was: " + counter+"/60" +"<br> <a href ='quiz.html' class='myButton1'> Try Again </a>";
			document.getElementById("resimg").src="notracist.png"};
		if(counter > 19 && counter <= 26)
			{document.getElementById("genquest").innerHTML= "<b style='font-size:150%';> Kind of racist! </b> <br> <br> You're probably a white liberal who truly means well but probably slips up sometimes saying things like, 'Im no racist but...' <br> It's all good! No one is perfect!<br><br>"
		+ "Your Score Was: "+ counter+"/60"+"<br> <a href ='quiz.html' class='myButton1'> Try Again </a>";
			document.getElementById("resimg").src="kindaracist.jpeg";}
		if (counter >26 && counter <=32)
			{document.getElementById("genquest").innerHTML= "<b style='font-size:150%';> Decently Racist </b> <br> <br> You're probably going to call Reverse Racism when you hear this but you're a racist. All lives matter, am I right? You didn't neccessarily vote for Trump or adore Republican values but I'm guessing you don't have many friends of color who aren't tokens. You've lived in privilege for a lot of your life and you struggle to see the struggles of colored folk. But why should you care, it's not like they affect your life anyway right?<br><br>" 
		+ "Your Score Was: "+ counter+"/60"+"<br> <a href ='quiz.html' class='myButton1'> Try Again </a>";
			document.getElementById("resimg").src="racist.jpeg";}
		if (counter >32 && counter <=39)
			{document.getElementById("genquest").innerHTML= "<b style='font-size:150%';> Solidified Racist </b>  <br> <br> Damn. You took this quiz knowing well you were going to get this result. Lmao. You're racist, but I probably don't need to tell you that. You hate Obama, and probably LGBTQ people for that matter. If you are a person of color, you really have some self-evaluating to do because you probably relate to Ben Carson.<br> <br>"
		+ "Your Score Was: "+ counter+"/60"+"<br> <a href ='quiz.html' class='myButton1'> Try Again </a>";
			document.getElementById("resimg").src="oderacist.jpg";}
		if (counter >39 && counter <=60)
			{document.getElementById("genquest").innerHTML= "<b style='font-size:150%';> Super Mega Ultra KKK Nazi Racist </b> <br> <br> Wow, I would be scared of you. You probably have a confederate flag somewhere in your house. I don't even know how you came up to be the way you are but you really only jack the Aryan race and that's pretty terrifying. If you didn't vote for Trump, then I would be ridiculously surprised.<br> <br>" 
		+ "Your Score Was: "+ counter+"/60"+"<br> <a href ='quiz.html' class='myButton1'> Try Again </a>";
		document.getElementById("resimg").src="scaryracist.jpeg";}}}
	else{for (var i=0; i < form1.length + 1; i++)
			 {if (form1[i].checked)
			 		{var val = parseInt(form1[i].value);
			 			break}
			 else if (i==4 && !form1[i].checked)
			 	{alert("Pick a number!")}};
		document.getElementById("foot").innerHTML= y; //updates question
		document.getElementById("genques").innerHTML= x;
		if(index==0)
			{document.getElementById("leftans").innerHTML="No! Cultural <br> Appropriation<br> is Wrong!";
			document.getElementById("rightans").innerHTML="It's Just a Costume!";
			val+=numb;};
		if(index==1)
			{document.getElementById("leftans").innerHTML="Of Course Not! <br> Why Validate <br>their hate speech?";
			document.getElementById("rightans").innerHTML="Yes! We need Free Speech!";};

		if(index==2)
			{document.getElementById("leftans").innerHTML="How Terrible!";
			document.getElementById("rightans").innerHTML="What Did He Do?"};
	    if(index==3)
			{document.getElementById("leftans").innerHTML="Without a Doubt!";
			document.getElementById("rightans").innerHTML="No!"};
			if(index==4)
			{document.getElementById("leftans").innerHTML="Without a Doubt!";
			document.getElementById("rightans").innerHTML="It's just a song!"};
		 if(index==5)
			{document.getElementById("leftans").innerHTML="Without a Doubt!";
			document.getElementById("rightans").innerHTML="Why Does Everything <br>Have to be About Race?"};
		 if(index==6)
			{document.getElementById("leftans").innerHTML="Of Course! Wtf!";
			document.getElementById("rightans").innerHTML="Isn't James Bond<br> Supposed to be White?"};
		 if(index==7)
			{document.getElementById("leftans").innerHTML="You Don't Have <br> the Answers <br>Sway! (yes)";
			document.getElementById("rightans").innerHTML="Huh?"};}
	index++;
	counter += val;
	return false;

	}

function change(){ //changes link to 1st question based on demographic
	if(document.page1.race.value=="black")
		{document.getElementById("button").href="ques21.html"}; //links to specific set of questions
	if(document.page1.race.value=="black" && document.page12.college.value=="no")
		{document.getElementById("button").href="ques22.html"}; //links to specific set of questions
	if(document.page1.race.value=="white")
		{document.getElementById("button").href="ques23.html"};
	if(document.page1.race.value=="white" && document.page12.college.value=="no")
		{document.getElementById("button").href="ques24.html"};
	if(document.page1.race.value=="mutt")
		{document.getElementById("button").href="ques25.html"};
	if(document.page1.race.value=="mutt" && document.page12.college.value=="no")
		{document.getElementById("button").href="ques26.html"};
	if(document.page11.foreign.value=="no")
		{document.getElementById("button").href="ques27.html"};
	if((document.page1.race.value=="asian" || document.page1.race.value=="mixed" || document.page1.race.value=="latinx") && document.page12.college.value=="no")
		{document.getElementById("button").href="ques28.html"};
	if(document.page12.college.value=="no" && document.page11.foreign.value=="no")
		{document.getElementById("button").href="ques29.html"};

}
function instruct(){//offers instructions
	alert("Instructions: For each question, pick a number 1 through 5 depending on which side you lean more towards. Answer Honestly and Have Fun!"  )
}




