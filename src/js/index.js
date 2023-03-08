import "../../node_modules/aos/src/js/aos.js";
var AOS = require('aos');
AOS.init();

const title = document.getElementById("aboutTitle")
const body = document.getElementById("aboutText")
const splashImg = document.getElementById("splashImage")
const imgOne = document.getElementById("aboutImageOne")
const container = document.getElementById("bodySection")
const bodySection = document.getElementById("bodyContainer")
const aboutMe = document.getElementsByClassName(`fade`)

let currentValue = 0;

function addValue() {
    currentValue += 1;
    console.log(currentValue);
}

function resetValue() {
    currentValue = 0;
}

function infoBox(title, text, linkValue, linkBtn, currentValue, imageLink, divLength){
    bodySection.insertAdjacentHTML("beforeend", `
        <div class="${divLength}aboutMe fade" id="bodySection${currentValue}">
        <div class="aboutLeftCol">
            <div class="aboutControls" id="windowControls">
                <i class="fa-solid fa-window-minimize resizeButton minimizeButton" id="minList${currentValue}" title="Minimize"></i>
                <i class="fa-solid fa-expand resizeButton maximizeButton" id="maxList${currentValue}" title="Maximize"></i>
            </div>
            <a href="${linkValue}" class="aboutTitleText" id="linkBtn${currentValue}">${title}</a>
            <img class="aboutImg" alt="Picture" id ="aboutImageOne${currentValue}" src="${imageLink}"></img>
            <p class="aboutText" id="aboutText${currentValue}">${text}</p>
        </div>
        </div>
    `);
    document.getElementById("minList"+(currentValue)).addEventListener("click", () => {
    document.getElementById("aboutImageOne"+(currentValue)).style.display = "flex";
    document.getElementById("bodySection"+(currentValue)).style.height = "auto";
    document.getElementById("bodySection"+(currentValue)).style.maxHeight = "40vh";
    document.getElementById("aboutText"+(currentValue)).style.visibility = "rgba(250, 235, 215, 0)";
    document.getElementById("aboutText"+(currentValue)).style.display = "none";
    });
    document.getElementById("maxList"+(currentValue)).addEventListener("click", () => {
    document.getElementById("aboutImageOne"+(currentValue)).style.display = "none";
    document.getElementById("bodySection"+(currentValue)).style.height = "auto"; 
    document.getElementById("bodySection"+(currentValue)).style.maxHeight = "25vh";
    document.getElementById("bodySection"+(currentValue)).style.color = "rgba(250, 235, 215, 1)";
    document.getElementById("aboutText"+(currentValue)).style.display = "flex";
    });
    if (linkBtn === false) {
    document.getElementById("linkBtn"+(currentValue)).style.textDecoration = "none";
    document.getElementById("linkBtn"+(currentValue)).style.pointerEvents = "none";
    console.log(`LINKED`)
    } else {
    console.log(`NO LINK`)
    }
    addValue();
};

function presBox(title, text, linkValue, linkBtn, currentValue, imageLink, divLength){
 bodySection.insertAdjacentHTML("beforeend", `
<div class="${divLength}aboutMe fade" id="bodySection${currentValue}">
        <div class="aboutLeftCol">
            <a href="${linkValue}" class="aboutTitleText" id="linkBtn${currentValue}">${title}</a>
            <img class="aboutImg" alt="Picture" id ="aboutImageOne${currentValue}" src="${imageLink}"></img>
            <p class="aboutText" id="aboutText${currentValue}">${text}</p>
        </div>
        </div>
    `);
    if (linkBtn === false) {
    document.getElementById("linkBtn"+(currentValue)).style.textDecoration = "none";
    document.getElementById("linkBtn"+(currentValue)).style.pointerEvents = "none";
    console.log(`LINKED`)
    } else {
    console.log(`NO LINK`)
    }
    addValue();
};

//(TITLE, TEXT DESCRIPTION, LINK, , LINK BTN TOGGLE, VALUE FUNCTION VARIABLE, BLANK FOR DEFAULT DIV 'full' TO EXPAND FULLY)
infoBox(
    `About Me`, 
    `Hey! My name is Guseyn Zarbaliyev! I’m a Senior currently studying at Staten Island Technical High School. As you can see, I have a passion for Web Development and Computer Science. With college looming ever so closer, I hope to major in some field of engineering or computer science, whether it be Cybersecurity or Electrical Engineering. My favorite genres of music are Garage Rock and Rap, with my favorite artists being the Eagles of Death Metal and Kendrick Lamar. In my spare time, I like to work out and spend time with friends, doing literally anything. Wether it is thrifting in the city or just playing games, I enjoy any time I spend with them. I am also from the country of Azerbaijan and speak Azeri nearly perfectly (aside from my horrendous accent).`,
    `https://floatingqrcode.com/`,
    false,
    currentValue,
    `https://res.cloudinary.com/dtjiibzcn/image/upload/v1670910068/Sun_edsmpc.png`,
    '')

document.getElementById('blogButton').addEventListener('click', function blogButton(){
    bodySection.style.opacity = "0";
    setTimeout(() => { 
        bodySection.innerHTML = "";
        blogButton.disabled = true;
    }, 999);
    setTimeout(() => { 
    infoBox(
    `Blog 1 : (Socio-Political Consciousness)`,
    `All across history: oppression, economic and social inequality, in addition to suffering, were all commonplace throughout society. From famine to war, since humanity's beginning on this planet, suffering was an expected part of daily life. In my eyes, the treatment that humanity endured can often be traced back to a common root - power and corruption. It's apparent that when one man can have control over another, it is inevitable that they will push their power to their very limit and abuse it as such. Even putting aside society, power structures are embedded into the very nature of human life. Look at parenthood, every child is expected to look at their parent as a figure of authority by nature. It’s in human nature to thirst for power since we are inherently selfish. Looking back some of the greatest atrocities known to man have been committed by tyrannical madmen that wish to solidify their power and use it to every extent possible. These people thrive in their own megalomania and develop a fear of losing their power. Historian Ludwig von Mises, once stated "The worst evils which mankind has ever had to endure were inflicted by bad governments.”<br><br> Despite this, I’m not trying to justify an anarchic agenda, quite the opposite actually. Viewing these inequalities that power brings makes me wish for a world where society can have leaders and people who act as true public servants, and will act in the best interest of the people. Changing the system from within rather than tearing it down is what should be done. The state of American politics in the current age is the antithesis of “serving the people”. Powerful politicians now only wish to retain their constituency and remain incumbent, not to mention the divide in government and mentality that American politics have caused within the people. Not to mention the bourgeoisie systemically oppressing the working class.  There is an inherent inequality and oppression in the current political and economic systems. Power is concentrated in the hands of a small group of individuals and corporations, which results in marginalized communities and individuals being denied access to opportunities and basic rights. Some may find the view point extreme or jarring, and people refuse to engage in any conversation with a person of an opposing political idealogy. However, I am all but perplexed by that mindset. You as an individual should always be open to new opinions, no matter how outlandish they may appear. Truely intelligent people surround themselves with even smarter people, it's as simple as that. And even if you felt as though your options were better than anyone else's, shouldn’t you engage in a legitimate, active conversation to try and sway the opinion of another? People have become so opposed to change and have become so in tune with individualism and the fact that they always feel as though they themselves are always right, it has halted the progression of our society.<br><br> However, I digress, since in the modern day, these issues aren't as clear and upfront. Rather than crimes against humanity, modern-day oppression comes in the form of class inequality and systemic oppression for the working class. The unrestrained capitalistic rhetoric this country has “enjoyed” is also leading to the problems of inequality we face as a first-world country. It simply doesn't add up. How can the richest country in the world have nearly 500,000 homeless people and those that still struggle just to live paycheck to paycheck? I look at opposing ideologies that can counter this unrestrained destruction of the middle class. Marxism and social democracy are two political ideologies that focus on issues of inequity, oppression, and power. Both ideologies believe in the need for a more egalitarian and just society, and seek to address issues of inequality and injustice. Though I oppose a true Marxist view, due to the fact of Marxism calls for total and utter revolution and reformation of society, I am keener on a social democratic view of society. Social democrats believe that change can be achieved through the democratic process, rather than through revolution. I believe that the government has a role to play in ensuring that all members of society have access to the necessities of life, such as healthcare, education, and housing. Strong labor unions and progressive taxation will be necessary in order to redistribute wealth and power from the wealthy to the less well-off. I seek to create a more egalitarian society through the use of the ballot box, rather than through violent upheaval. Our very nation is founded on the basis that the power is with the people and that under the Supreme Law of the Land, we can make the change from within without tearing down. <br><br>Despite this, I am not blind to the failures of communism and socialism. My parents themselves grew up in the Azerbaijan SSR, which was a part of the Soviet Union. They enjoyed a higher quality of life in their home country under the influence of the Soviet Union than they would have opposed if it didn't. But is their life in modern America better than it was in Azerbaijan? Certainly so. The Soviet Union is the perfect example of socialism gone wrong and it all came to the men in charge. Stalin and Lenin were both ultra nationalistic-authoritarians. No system of government is perfect, and leadership is key. A true utopia, is truly only accomplished when we can form a nation were a leader truly takes every single action in the best interest of the people, and nothing else, but this remains a dream.`,
    `https://issuu.com/gzr529/docs/myths_-_blog_1`,
    true,
    currentValue,
    `https://images.unsplash.com/photo-1546375570-2ae6a397bbcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80`,
    '')

    infoBox(
    `Blog 2 : (Atomic Habits and Growth)`,
    `As high school draws to a close, and the workload has lightened, I have come to realize many of my internal flaws due to the time I've had to self-introspect. From my chats with my therapist and those long nights left awake thinking, my flaws have risen above my strengths, utterly outweighing them. There are many aspects of myself I wish to improve, both physical and mental. From losing more weight to gaining a generally healthier mindset - I want to change, and my current largest weakness is my horrendous work ethic. It's blatant that I’m a terrible procrastinator. I stay awake until 3-4 am to get all my work done, then pass out once I get home, creating a terrible self-fulfilling cycle of degeneracy. I try and cope with it by powering through with tea and energy drinks, but the artificial sustenance is catching up to my body. But the key thing causing this insomniac cycle is my tendency to brush off work that isn't due the next day. Just a few days ago, I left a month of work to do in one day. I forced myself to go to one of my friend's houses, to prevent my procrastination. I wouldn't be able to fall asleep or procrastinate in any way at their house. It was the only course of action to get the giant pile of work completed. <br><br> I intend to keep up this habit of working alongside my friend, or at least outside of my house or room. In my room, there's so much to do besides work. Reorganizing and cleaning my shelves for the fifth time, playing video games, sleeping, or anything else but work. With the aid of my friend, we both work on our own projects, keeping each other in check, and making sure we are on track. Even just working at Starbucks - the setting just leaves me more motivated to get my work done and get home. <br><br> But this is only a temporary solution. A priority of mine is to finally completely crush this bad habit. It's simply a fact of mind over matter, and before I enter college and the course work only becomes more overbearing, I need to develop a healthier work ethic to prevent burnout and unnecessary stress - and to also produce the best work I possibly can for myself. I need to overcome this before it starts to affect all facets of my life. Currently, I’ve been able to maintain my social life, but it’s more often that I find myself declining invitations to hang out with my closest friends, simply because I am too tired - or have too much work to do since I left everything for the weekend.<br><br> There also comes the problem of sectioning or chunking my work. I often do work in large blocks and leave studying to the last moment. While I do fine on most of my exams, most of what I studied slips away once I hand in that paper. There were points when I would forget the entire Units that I studied. Ironically, it was studying late at night for my Psychology exam that I learned why this is, the premise known as retroactive interference, when old information that has already been encoded is disrupted and forgotten due to the addition of new information.<br><br> I’ve always loved learning, from history to computer science. All of these experiences have led me to the realization that I want to become a better learner overall. I want to understand and truly comprehend the material that I am studying, and not just memorize it for the sake of passing exams. In order to achieve this goal, I know that I need to develop a healthier work ethic and a better study routine. I also intend to continue working alongside my friend and working in different environments to keep myself motivated and productive.`,
    `https://issuu.com/gzr529/docs/myths_-_blog_2`,
    true,
    currentValue,
    `https://images.unsplash.com/photo-1591360236494-e6557e5ffa25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80`,
    '')


    }, 1000);
    setTimeout(() => { 
        bodySection.style.opacity = "1";
        splashImg.style.backgroundImage=`url("https://imgur.com/ufsrP8P.png");`
    }, 1200);
    setTimeout(() => { 
        blogButton.disabled = false;
    }, 7000); 
});

document.getElementById('essayButton').addEventListener('click', function essayButton(){
    bodySection.style.opacity = "0";
    setTimeout(() => { 
    bodySection.innerHTML = "";
    essayButton.disabled = true;
    }, 999); 
    setTimeout(() => { 
    infoBox(
    `Book of the Dead (NatGeo Viewing Reflection)`, 
    `The Ancient Egyptians had a unique perspective on death, viewing it not as the end of life, but as an extension of it. For the Egyptians, death was seen as a natural part of the journey of life, and the journey to the afterlife was considered to be just as important as the journey of life itself. In fact, the Ancient Egyptians believed that the end of one life was the beginning of another, and so death and life were closely intertwined.<br><br> However, the journey to the afterlife was not always an easy one. According to the Ancient Egyptians, there were countless trials and tribulations that one had to face in order to reach the next life. To help guide them on this journey, the Egyptians buried the Book of the Dead with an individual, which acted as a kind of "protection" and guide. Even if one was able to make the journey to the next life, they would still have to face the Hall of Judgement, where they would be judged for their sins and actions in their previous life. The belief in judgment after death was not unique to the Ancient Egyptians and is also found in many other cultures and religions, such as Christianity.<br><br> Personally, my views on death align with those of the Ancient Egyptians in some ways. Though I was raised with Muslim morals, I do not subscribe to the ideologies of the religion and do not believe in an afterlife. As an atheist, I find the final totality of death to be comforting in a strange way, as it means that this life is all we have and therefore makes it worth living. I am not motivated to be a good person simply for the sake of a better afterlife, but rather I strive to be a good person simply because it is the right thing to do. This concept of death giving purpose to life is one that I find to be meaningful, as it helps me to appreciate the time that I have and to make the most of it, since it is the only life I will ever have. Why live life in accordance with something that might not even exist? It is a reminder to live in the present and to strive to be a better person, not just for the sake of a hypothetical afterlife, but for the sake of living a fulfilling and meaningful life in the here and now.`,
    `https://issuu.com/gzr529/docs/myths_-_book_of_the_dead_reflection`,
    true,
    currentValue,
    `https://images.unsplash.com/photo-1584719866406-c76ddee48493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80`,
    '')
    infoBox(
    `No Village for Prideful Men (Fairy Tale Writing Piece)`, 
    `Millennia ago, in the heart of the Shanolian Plains, lay a small, nameless village. The village was a beacon of prosperity and hope within humanity. Every villager was an extremely extraordinary individual. Whether they be master artisans or legendary archers, the village supported the skills of the villagers, allowing them to hone their talents. The people lived peacefully and avoided the outside world, rarely interacting with others, and only doing so purely to trade for goods. Settlers seeking asylum often faced almost no chance of living within the village, except for a handful of prodigies. But life inside the walls was unmatched, and many still desired to liven with its walls. Children were never exposed to acts of violence or brutality, with essentially no knowledge of the distinction between good and evil. They all lived with total trust for one another. The village provided for whatever the people needed at no cost. All were free to practice any religion they wished to do so and were allowed to speak and preach with no bounds. It was even rumored that the people of the village had been enlightened with the secret of true happiness. Their peace was almost… uncanny to anyone that caught a glimpse of life within the village. But alas, nothing can last forever. Decades ago, the village had the unfortunate luck of being at the forefront of a war campaign led by a decrepit wizard tyrant only known as ‘Seytan’. The village had offered no resistance and had been brought to its knees through the use of Seytan’s personal army of mercenaries and the overwhelming prowess of the dark arts. Millennia of pure human enlightenment had been interrupted by a single man. Most believed that his actions were borderline inhuman. Seytan acting off what seemed like a lust guided by pure sadism. He sabotaged food supplies and created blockades to cause manufactured famines forcing the villagers to eat whatever they could manage to get a hold of, by any means necessary. Indiscriminate killings were ordered on a whim, leading to paranoia among the villagers. He separated children from their parents only to then sell them off into slavery, and use the profit to further cement his rule over the village. For his amusement, he used biological warfare to fabricate the spread of disease, leading to multiple epidemics. Escape was also made utterly impossible. Mercenaries gathered all weapons to prevent any possibility of a coup, despite the already lackluster militia that the village supported, and a total-barrier spell was cast, preventing anyone from leaving the village, and essentially forcing every soul under his rule. This nameless village had truly become a repulsive sight to behold. The epitome of human despair. Seytan was in every aspect of the word, a tyrant. However, within all his malice, lay a disturbingly warped sense of pride. Seytan felt as though he was a harbinger of fortune and peace. He saw it that he was allowing the villagers to taste the true capability of humanity, and embracing them with a foreign ‘culture’. His pride was so unbounded, that he believed that as long as he lived, his authority would not falter. In his delusion, he challenged any of the villagers with an opportunity to take his crown. He presented three challenges. A game of wit, a game of power, and a game of luck.  If anyone managed to usurp him, he swore to lift the spell that imprisoned the villagers and allow them to end his occupancy over the land. But no one ever dared to challenge Seytan through the years of fear-mongering and social conditioning. Every soul in the village dread what Seytan might do to them if they failed his challenges. There truly seemed to be nothing left to do. <br><br>In the wake of  Seytan’s rule, the people of this unnamed village began to revert to barbaric instinct, lacking empathy and morals. A once-enlightened society full of humanity's greatest individuals had become a collection of deplorable savages, overcome with overwhelming despair. There were instances of mothers that killed their own children for fear that they had stolen their ration of food. Once unwavering friendships with iron-clad bonds had shattered turning most into bitter rivals. People committed unnameable atrocities towards each other, things I cannot bear to name. After years, most had given up the idea of a better life, with only a handful clinging to the idea that they could free themselves from Seytan. These rare few were the strongest that continued to be filled with hope. For whatever reason that drives them, whether it be religion, family, or the promise of peace, hope remained the one thing that kept this handful of villagers sane. Rhan was one of these bold few. His parents were one of the first victims of one of Seytan’s massacres leaving the boy alone to fend for himself. He was often left starving for days on end and in one instance had almost been murdered by cannibals. Even before Seytan’s rule, Rhan was ordinary, seeming to be extremely average in every aspect. Yet, despite his current circumstances and history, he strangely still hung onto hope. He trudged forward no matter what, full of determination to preserve. However, the boy was still human. Rhan had become overwhelmed with malice. Malice targeted at Seytan. He still couldn't comprehend what he was enduring, that one man in the high chair was the reason for so much suffering. One. Single. Man. He had made it his life goal to take down Seytan. Rhan had no real skill nor talent unlike many of his people but was nevertheless determined to challenge Seytan one day, at any cost. For the sake of his parents and his people. For revenge. <br><br>He knew that he needed liked minded people to achieve his goal. Over time, he had found a group of survivors just like himself, those who clung to hope. They all attempted to preserve life before their occupation, secretly supporting each other, a sort of small rebellion against Seytan, a tiny pocket preserving their previous culture. The group of survivors seemed the one place where laughter and trust could be found in the entire village. They had formed a small hideout in the corner of the village, nearly out of sight from Seytan’s roaming army. Eventually, Rhan began to get accustomed to the life he was creating. He had found comrades that shared his goal. The hope within him only grew. <br><br>One fateful night, as his newfound family feasted, had jumped up out of his seat. Rhan looked around at the people he had entrusted with his very like. He boldly explained his goal to the others. Silence. The overwhelming pressure that had been placed on the poor boy was almost world-shattering. But it wasn’t anything Rhan wasn’t prepared to endure. A round of applause followed. They were all eager to support Rhan in his endeavors. The smartest of the bunch, an elder intellectual, had formulated a plan. Rhan was the youngest out of all of them. So he planned to have the rest of the group train and mold Rhan into a sort of “super soldier”. A man of unlimited talent and skill. The elder had chosen three men to aid Rhan, each according to the three games that Seytan proposed. A master swordsman, a non-native, who was a veteran of a great war, and an expert tactician who was allowed to settle in the village after showing his prowess. The elder intellectual himself, who had studied his entire life to be a scholar. Finally, and most strange of all, a gambling addict, who was notorious for overcoming impossible odds. They all eagerly wished to train Rhan, for they too despised Seytan. After years of being stranded and defenseless, a true beacon of hope stood before them, ready to be crafted into a hero with no bounds. For years, each man took turns teaching the boy. The elder knew that Seytan would base every game on competition, to feed his unnatural ego. He assumed the game of wit would be a chess match, and the game of power would surely be a duel to the death. However, a game of chance was too broad to be interpreted as a single game. Nevertheless, the group pushed on. Almost the entire group’s entire resources were allocated to nurturing Rhan into a well-adjusted and intelligent warrior. They created weapons in secret, under the nose of Seytan, to provide to Rhan in his training. They gave Rhan larger rations to allow him to grow properly and provided him with ample and comfortable rest. When the training began, the swordsman trained Rhan’s body and taught him the secrets of the rapier. He was pushed to his physical limit. Rhan’s body was left abused and scarred after years of training. “No matter,” He thought to himself, “Onwards we go.” His determination was still ironclad, but his hated grew deeper. He could think of nothing but the blood of Seytan flowing into his hands. <br><br>As the years went by, the elder taught the boy the art of chess. Rhan memorized countless openings and pondered over the intricacies of the late game. He studied the games of Tanglus Marlsen and Piparu Papamura. His mind and body had both been pushed to an inhuman factor. It almost seemed like Rhan has become something inhuman. However, when it came to the gambler impart his wisdom onto Rhan, he simply did nothing. He told Rhan, that often, life is unfair, and to simply look around him. “In a game of chance, you must simply leave it to fate! Fortune favors the bold, no?” Rhan begged the gambler to teach him simply how to cheat or even gain a slight edge, but the gambler refused. Rhan grew furious and began to argue with the gambler. “This is bigger than pride, bigger than you and me! Surely even YOU must understand that? We must win by any means necessary!” The gambler stood silent. He simply turned away from Rhan and talked away. Even the others looked at the gambler in disgust. Rhan became consumed by anger and stormed out of the safety of the hideout. “How can he be this irrational? To play fair against a man that deserves nothing?! A man that should meet a fate worse than death?!” Rhan refused to return home, appalled by the choice of the gambler. He roamed the streets for hours. However, when he returned he was mortified. For what he saw, was indescribable. Everything was gone. <br><br>Not a single soul remained. The blood of his comrades spilled across the debris of the hideout. They discovered the contraband weapons that the others had created for Rhan and acted accordingly. Rhan stood emotionless. Again, everything was taken from him. By a single man. Rage flooded into Rhan. Hatred consumed him. Despair overwhelmed him. He could barely formulate his thoughts. All he could think was how the mad-wizards lifeless body feel under the sole of his shoe. He stormed for Seytans cambers. The day he was born for awaiting him, just a few steps away. His destiny. <br><br>He kicked open the doors with such aggression that they both came flying off. Seytan sat before him. After years of anticipation, his goal stood before him. Their eyes both locked, and fiery passion was lit between the two. The atmosphere of the room was heavy, but Rhan stood tall. The guards drew their weapons but Seytan ordered them to stand down. Seytan laughed “Has a true man finally shown himself within this dump? To challenge me?”. Rhan attempted to stand emotionless, but his intention was unable to be contained. It was clear he came to end the tyrant's life. “I challenge you, everything you stand for.” Seytan scoffed then grinned, almost as if he was enjoying himself. “I accept your offer boy!” Seytan stepped down from his throne and presented the first game. He flashed a gold coin from his pocket. A game of chance. Rhan was annoyed. Everything he has worked for could be invalidated by a simple game of chance. Years of work for one moment. Was it truly worth it? He quickly shrugged the thought off.  “Call it.” He claimed. “Heads.” Rhan sneered. Seytan stared in anticipation as the coin was tossed in the air. The coin seemed to float as it was thrown into the air. Heads. Rhan smiles. It seemed like luck was on the side of the villagers for the first time in years. Rhan forced a laugh. “I’m surprised you didn’t try and cheat.” Seytan wiped the smile off his face, looking at Rhan in disgust. “Why would I never need to cheat? I am a god! Unbound by fate!” Rhan scolded the tyrant. “You're no god! You’re just a sad old man! Someone who’s lost their sense of humanity! Onto the next then.” Seytan then ordered his men to pull out a chessboard. ”Just like the old man predicted,” Rhan thought to himself. “A leader must be able to plan and strategize, no?” Seytan snickered. “Come one, go ahead, you can play White.” Rhan was infuriated. “How can he be so confident? So normal? After all the things he's done?”. Nevertheless, Rhan trudged forwards, sat down, and started the game. White, Knight to F3, Black, Pawn to F5, White, Pawn to D3, Black, Pawn to D6… The lingered for what seemed like hours to Rhan until… Checkmate. Rhan won once again. He looked up at Seytan with an otherworldly grin. “I challenge you to a duel.” Seytan didn’t hesitate and questioned Rhan ”And your weapon of choice?” “A rapier.” Rhan stood confidently. A guard handed him a steel rapier, much better than anything he had trained with. “Weapons prove deadly only by the user”. But at this moment Rhan wasn’t listening. This is the moment he was waiting for. The moment he could end the suffering. The battle was swift. Rhan charged into Seytan before he could even react, slashing his legs. Seytan staggered to the ground and fell onto his knees. Rhan pushed the mad tyrant over. Gleaming from eye to eye. He can finally have his way. He pierced Seytans eye and pulled it out as if his sword was a skewer. Seytan yelled in agony. Rhan laughed. He began to stick his finger into Seytans skull and broke his cheekbone from the inside of his own skull. Seytan lay numb with pain. The guards only stood in shock as Rhan continued to laugh uncontrollably. He thrusted his rapier into Seytans left hand, pinning him against the ground. “All of this, this isn't enough. You don't deserve death. You deserve to rot for years, an accumulation of all the pain you've caused for others.” Rhan began to slowly mutilate Seytan as the tyrant slowly bled out. “I AM A GOD!” However, in one instant, he caught himself. He saw fear in the tyrant's eye. A fear he only once saw before, the same fear his people felt under Seytan. He knew he shouldn't be doing this, yet he still wants to. He had lost himself. He had become what he had hated the most. He had let hatred and malice consume him. “You.. you don't deserve death, but I’m no monster…” Rhan slit the tyrant's throat, swiftly ending the tyrant's life. The mercenaries all swiftly fled as the barrier trapping the village fell along with its ruler, as Seytan’s “empire” crumbled. The people cheered for Rhan. He was a hero to all, but a failure to himself. He still left incomplete. He felt as if he had lost himself, and forgotten what it meant to be human. To feel compassion. “Are my actions no better than Seytan's?” He realized that while what he did was necessary, his unnecessary cruelty was no better than what Seytan had done. He enjoyed the suffering of Seytan. A wave of nausea hit Rhan. Like his entire life had surmounted to failure. He wanted to better himself. He wanted to prove to himself he wasn’t like the tyrant leader. With his strongest ability, his determination, he continued on. As time passed, Rhan had begun to rebuild the village to its former glory. The loving, peaceful, nameless, village it once was. He slowly pieced himself back together as well, becoming a compassionate and caring leader. He slowly found his purpose again in life, after the defeat of Seytan. He became the child he once was, undoing Seytan’s evil, swearing to never hurt again.`,
    `https://issuu.com/gzr529/docs/guseyn_zarbaliyev_-_fairy_tale_creative_writing_pi`,
    true,
    currentValue,
    `https://images.unsplash.com/photo-1599689018034-48e2ead82951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1624&q=80`,
    '')
        splashImg.style.backgroundImage=`url("https://i.imgur.com/eYPgI4m.png")`; 
    }, 1000);
    setTimeout(() => { 
        bodySection.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        essayButton.disabled = false;
    }, 7000); 
});

document.getElementById('projButton').addEventListener('click', function projButton(){
    bodySection.style.opacity = "0";
    setTimeout(() => { 
        bodySection.innerHTML = "";
        projButton.disabled = true;
    }, 999);
    projButton.disabled = true;
    setTimeout(() => { 
        presBox(
        `Norse (Gerd and Frey) Presentation`, 
        `<div class="bodyVideoWrapper">
        <iframe class="bodyVideo" src="https://www.youtube.com/embed/u_OlXW4wIGg"></iframe>
        </div>`,
        `https://www.youtube.com/watch?v=u_OlXW4wIGg`,
        true,
        currentValue,
        `https://res.cloudinary.com/dtjiibzcn/image/upload/v1670860334/1x1_vvdr6w.png`,
        'full')
    imgOne.remove()
    }, 1000);
    setTimeout(() => { 
        bodySection.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        projButton.disabled = false;
    }, 6000); 
});

document.getElementById('presButton').addEventListener('click', function presButton(){
    bodySection.style.opacity = "0";
    setTimeout(() => { 
        bodySection.innerHTML = "";
        presButton.disabled = true;
    }, 999);
    setTimeout(() => { 
        presBox(
        `Celtic Mythology Presentation`, 
        `<div class="bodyVideoWrapper">
        <iframe class="bodyVideo" src="https://www.youtube.com/embed/RhtoTgRwoEA"></iframe>
        <iframe class="embedSlides" src="https://docs.google.com/presentation/d/e/2PACX-1vSqdndWInGTun0gMwkWiFG1IwO4ls7X5YvvO3XkL_mj5fhChAAm3mT_rHNVqoiBep_iR9QwjecwkeOe/embed?start=false&loop=false&delayms=3000"></iframe>
        </div>`,
        `https://docs.google.com/presentation/d/1xJjiyg86yTakVPs4nT0KH0Z_YJqIaHfI12vMZ1gQlCE/edit?usp=sharing`,
        true,
        currentValue,
        `https://res.cloudinary.com/dtjiibzcn/image/upload/v1670860334/1x1_vvdr6w.png`,
        'full')
        presBox(
        `David and Goliath Bible Presentation`, 
        `<div class="bodyVideoWrapper">
        <iframe class="embedSlides" src="https://docs.google.com/presentation/d/e/2PACX-1vQApdhhjsWpJTrnwXbOsM3Ahz2L65QeFOIT55nCBfL5EYZhSNNGnaI8N4xOg48eCai3guRJ9O-b6LlY/embed?start=false&loop=false&delayms=3000"></iframe>
        </div>`,
        `https://docs.google.com/presentation/d/1LYHYTYhdTwBgWxtaX1eBp6EPOr7GDYEUPlriF8b1J-c/edit?usp=sharing`,
        true,
        currentValue,
        `https://res.cloudinary.com/dtjiibzcn/image/upload/v1670860334/1x1_vvdr6w.png`,
        'full')
        imgOne.remove();
    }, 1000);
    setTimeout(() => { 
        bodySection.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        presButton.disabled = false;
    }, 6000); 
});

document.getElementById('reflButton').addEventListener('click', function reflButton(){
    bodySection.style.opacity = "0";
    setTimeout(() => { 
        bodySection.innerHTML = "";
        reflButton.disabled = true;
    }, 999);
    setTimeout(() => { 
    infoBox(
    `WIP`, 
    `Swearem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et. Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et tortor diam, id tempor elit. Vivamus sagittis ornare fuck. Nullam lacinia jizzmopper vel diam tempor et consequat ligula porttitor.`,
    `https://www.youtube.com/`,
    false,
    currentValue,
    `https://media.tenor.com/ToI4KGJcIKEAAAAC/clean-cleaning.gif`,
    '')
    imgOne.remove()
    }, 1000);
    setTimeout(() => { 
        bodySection.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        reflButton.disabled = false;
    }, 6000); 
});

