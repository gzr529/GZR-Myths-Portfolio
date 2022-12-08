import "../../node_modules/aos/src/js/aos.js";
var AOS = require('aos');
AOS.init();

const title = document.getElementById("aboutTitle")
const body = document.getElementById("aboutText")
const splashImg = document.getElementById("splashImage")
const imgOne = document.getElementById("aboutImageOne")
const container = document.getElementById("bodySection")
const bodySection = document.getElementById("bodyContainer")

let currentValue = 0;

function addValue() {
    currentValue += 1;
    console.log(currentValue);
}

function resetValue() {
    currentValue = 0;
}

function infoBox(title, text, linkValue, currentValue){
    bodySection.insertAdjacentHTML("beforeend", `
        <div class="aboutMe" id="bodySection${currentValue}">
        <div class="aboutLeftCol">
            <div class="aboutControls">
            <i class="fa-solid fa-window-minimize resizeButton minimizeButton" id="minList${currentValue}" title="Minimize"></i>
            <i class="fa-solid fa-expand resizeButton maximizeButton" id="maxList${currentValue}" title="Maximize"></i>
            </div>
            <a class="aboutTitle" id="aboutTitle${currentValue}" href="${linkValue}"><p class="aboutTitleText">${title}</p></a>
            <p class="aboutText" id="aboutText${currentValue}">${text}</p>
        </div>
        <div class="aboutRightCol">
            <img class="aboutImg" alt="Picture of Code" id ="aboutImageOne${currentValue}" src="https://drive.google.com/uc?id=14YNDq7DkF4P-NZV1kz9oKWeNvaOgEVai">
        </div>
        </div>
    `);
    document.getElementById("minList"+(currentValue)).addEventListener("click", () => {
    document.getElementById("bodySection"+(currentValue)).style.height = "5rem";
    document.getElementById("aboutText"+(currentValue)).style.color = "rgba(250, 235, 215, 0)";
    });
    document.getElementById("maxList"+(currentValue)).addEventListener("click", () => {
    document.getElementById("bodySection"+(currentValue)).style.height = "30rem";
    document.getElementById("aboutText"+(currentValue)).style.color = "rgba(250, 235, 215, 1)";
    });
    addValue();
};

infoBox(
    `Hello`, 
    `This is text`,
    `https://www.youtube.com/`,
    currentValue)

infoBox(
    `Hello2`, 
    `This is text`,
    `https://www.youtube.com/`,
    currentValue)

infoBox(
    `Hello3`, 
    `This is text`,
    `https://www.youtube.com/`,
    currentValue)


document.getElementById('essayButton').addEventListener('click', function essayButton(){
    container.style.opacity = "0";
    essayButton.disabled = true;
    setTimeout(() => { 
    title.innerHTML = `<p class="aboutTitleText">No Village for Prideful Men (Fairy Tale Writing Piece)<span><i class="fa-solid fa-link"></i></span>`;
    body.innerHTML = `<p style="margin-top:0">&nbsp; &nbsp;&nbsp;Millennia ago, in the heart of the Shanolian Plains, lay a small, nameless village. The village was a beacon of prosperity and hope within humanity. Every villager was an extremely extraordinary individual. Whether they be master artisans or legendary archers, the village supported the skills of the villagers, allowing them to hone their talents. The people lived peacefully and avoided the outside world, rarely interacting with others, and only doing so purely to trade for goods. Settlers seeking asylum often faced almost no chance of living within the village, except for a handful of prodigies. But life inside the walls was unmatched, and many still desired to liven with its walls. Children were never exposed to acts of violence or brutality, with essentially no knowledge of the distinction between good and evil. They all lived with total trust for one another. The village provided for whatever the people needed at no cost. All were free to practice any religion they wished to do so and were allowed to speak and preach with no bounds. It was even rumored that the people of the village had been enlightened with the secret of true happiness. Their peace was almost&hellip; uncanny to anyone that caught a glimpse of life within the village. But alas, nothing can last forever. Decades ago, the village had the unfortunate luck of being at the forefront of a war campaign led by a decrepit wizard tyrant only known as&nbsp;&lsquo;Seytan&rsquo;.&nbsp;The village had offered no resistance and had been brought to its knees through the use of Seytan&rsquo;s personal army of mercenaries and the overwhelming prowess of the dark arts. Millennia of pure human enlightenment had been interrupted by a single man. Most believed that his actions were borderline inhuman. Seytan acting off what seemed like a lust guided by pure sadism. He sabotaged food supplies and created blockades to cause manufactured famines forcing the villagers to eat whatever they could manage to get a hold of,&nbsp;by any means necessary.&nbsp;Indiscriminate killings were ordered on a whim, leading to paranoia among the villagers. He separated children from their parents only to then sell them off into slavery, and use the profit to further cement his rule over the village. For his amusement, he used biological warfare to fabricate the spread of disease, leading to multiple epidemics. Escape was also made utterly impossible. Mercenaries gathered all weapons to prevent any possibility of a coup, despite the already lackluster militia that the village supported, and a total-barrier spell was cast, preventing anyone from leaving the village, and essentially forcing every soul under his rule. This nameless village had truly become a repulsive sight to behold. The epitome of human despair. Seytan was in every aspect of the word, a tyrant. However, within all his malice, lay a disturbingly warped sense of pride. Seytan felt as though he was a harbinger of fortune and peace. He saw it that he was allowing the villagers to taste the true capability of humanity, and embracing them with a foreign &lsquo;culture&rsquo;. His pride was so unbounded, that he believed that as long as he lived, his authority would not falter. In his delusion, he challenged any of the villagers with an opportunity to take his crown. He presented three challenges. A game of wit, a game of power, and a game of luck. &nbsp;If anyone managed to usurp him, he swore to lift the spell that imprisoned the villagers and allow them to end his occupancy over the land. But no one ever dared to challenge Seytan through the years of fear-mongering and social conditioning. Every soul in the village dread what Seytan might do to them if they failed his challenges. There truly seemed to be nothing left to do.</p>
<p>&nbsp;&nbsp;&nbsp;In the wake of Seytan&rsquo;s rule, the people of this unnamed village began to revert to barbaric instinct, lacking empathy and morals. A once-enlightened society full of humanity&apos;s greatest individuals had become a collection of deplorable savages, overcome with overwhelming despair. There were instances of mothers that killed their own children for fear that they had stolen their ration of food. Once unwavering friendships with iron-clad bonds had shattered turning most into bitter rivals. People committed unnameable atrocities towards each other, things I cannot bear to name. After years, most had given up the idea of a better life, with only a handful clinging to the idea that they could free themselves from Seytan. These rare few were the strongest that continued to be filled with hope. For whatever reason that drives them, whether it be religion, family, or the promise of peace, hope remained the one thing that kept this handful of villagers sane. Rhan was one of these bold few. His parents were one of the first victims of one of Seytan&rsquo;s massacres leaving the boy alone to fend for himself. He was often left starving for days on end and in one instance had almost been murdered by cannibals. Even before Seytan&rsquo;s rule, Rhan was ordinary, seeming to be extremely average in every aspect. Yet, despite his current circumstances and history, he strangely&nbsp;still&nbsp;hung onto hope. He trudged forward no matter what, full of determination to preserve. However, the boy was still human. Rhan had become overwhelmed with malice. Malice targeted at Seytan. He still couldn&apos;t comprehend what he was enduring, that one man in the high chair was the reason for so much suffering. One. Single. Man. He had made it his life goal to take down Seytan. Rhan had no real skill nor talent unlike many of his people but was nevertheless determined to challenge Seytan one day, at any cost. For the sake of his parents and his people. For revenge.&nbsp;</p>
<p>He knew that he needed liked minded people to achieve his goal. Over time, he had found a group of survivors just like himself, those who clung to hope. They all attempted to preserve life before their occupation, secretly supporting each other, a sort of small rebellion against Seytan, a tiny pocket preserving their previous culture. The group of survivors seemed the one place where laughter and trust could be found in the entire village. They had formed a small hideout in the corner of the village, nearly out of sight from Seytan&rsquo;s roaming army. Eventually, Rhan began to get accustomed to the life he was creating. He had found comrades that shared his goal. The hope within him only grew.</p>
<p>One fateful night, as his newfound family feasted, had jumped up out of his seat. Rhan looked around at the people he had entrusted with his very like. He boldly explained his goal to the others. Silence. The overwhelming pressure that had been placed on the poor boy was almost world-shattering. But it wasn&rsquo;t anything Rhan wasn&rsquo;t prepared to endure. A round of applause followed. They were all eager to support Rhan in his endeavors. The smartest of the bunch, an elder intellectual, had formulated a plan. Rhan was the youngest out of all of them. So he planned to have the rest of the group train and mold Rhan into a sort of &ldquo;super soldier&rdquo;. A man of unlimited talent and skill. The elder had chosen three men to aid Rhan, each according to the three games that Seytan proposed. A master swordsman, a non-native, who was a veteran of a great war, and an expert tactician who was allowed to settle in the village after showing his prowess. The elder intellectual himself, who had studied his entire life to be a scholar. Finally, and most strange of all, a gambling addict, who was notorious for overcoming impossible odds. They all eagerly wished to train Rhan, for they too despised Seytan. After years of being stranded and defenseless, a true beacon of hope stood before them, ready to be crafted into a hero with no bounds. For years, each man took turns teaching the boy. The elder knew that Seytan would base every game on competition, to feed his unnatural ego. He assumed the game of wit would be a chess match, and the game of power would surely be a duel to the death. However, a game of chance was too broad to be interpreted as a single game. Nevertheless, the group pushed on. Almost the entire group&rsquo;s entire resources were allocated to nurturing Rhan into a well-adjusted and intelligent warrior. They created weapons in secret, under the nose of Seytan, to provide to Rhan in his training. They gave Rhan larger rations to allow him to grow properly and provided him with ample and comfortable rest. When the training began, the swordsman trained Rhan&rsquo;s body and taught him the secrets of the rapier. He was pushed to his physical limit. Rhan&rsquo;s body was left abused and scarred after years of training. &ldquo;No matter,&rdquo; He thought to himself, &ldquo;Onwards we go.&rdquo; His determination was still ironclad, but his hated grew deeper. He could think of nothing but the blood of Seytan flowing into his hands.</p>
<p>As the years went by, the elder taught the boy the art of chess. Rhan memorized countless openings and pondered over the intricacies of the late game. He studied the games of Tanglus Marlsen and Piparu Papamura. His mind and body had both been pushed to an inhuman factor. It almost seemed like Rhan has become&nbsp;something inhuman. However, when it came to the gambler impart his wisdom onto Rhan, he simply did nothing. He told Rhan, that often, life is unfair, and to simply look around him. &ldquo;In a game of chance, you must simply leave it to fate! Fortune favors the bold, no?&rdquo; Rhan begged the gambler to teach him simply how to cheat or even gain a slight edge, but the gambler refused. Rhan grew furious and began to argue with the gambler. &ldquo;This is bigger than pride, bigger than you and me! Surely even&nbsp;YOU&nbsp;must&nbsp;understand that? We must win by any means necessary!&rdquo; The gambler stood silent. He simply turned away from Rhan and talked away. Even the others looked at the gambler in disgust. Rhan became consumed by anger and stormed out of the safety of the hideout. &ldquo;How can he be this irrational? To play fair against a man that deserves nothing?! A man that should meet a fate worse than death?!&rdquo; Rhan refused to return home, appalled by the choice of the gambler. He roamed the streets for hours. However, when he returned he was mortified. For what he saw, was indescribable. Everything was gone.&nbsp;</p>
<p>Not a single soul remained. The blood of his comrades spilled across the debris of the hideout. They discovered the contraband weapons that the others had created for Rhan and acted accordingly. Rhan stood emotionless. Again, everything was taken from him. By a single man. Rage flooded into Rhan. Hatred consumed him. Despair overwhelmed him. He could barely formulate his thoughts. All he could think was how the mad-wizards lifeless body feel under the sole of his shoe. He stormed for Seytans cambers. The day he was born for awaiting him, just a few steps away. His destiny.&nbsp;</p>
<p>He kicked open the doors with such aggression that they both came flying off. Seytan sat before him. After years of anticipation, his goal stood before him. Their eyes both locked, and fiery passion was lit between the two. The atmosphere of the room was heavy, but Rhan stood tall. The guards drew their weapons but Seytan ordered them to stand down. Seytan laughed &ldquo;Has a true man finally shown himself within this dump? To challenge me?&rdquo;. Rhan attempted to stand emotionless, but his intention was unable to be contained. It was clear he came to end the tyrant&apos;s life. &ldquo;I challenge you, everything you stand for.&rdquo; Seytan scoffed then grinned, almost as if he was enjoying himself. &ldquo;I accept your offer boy!&rdquo; Seytan stepped down from his throne and presented the first game. He flashed a gold coin from his pocket. A game of chance. Rhan was annoyed. Everything he has worked for could be invalidated by a simple game of chance. Years of work for one moment. Was it truly worth it? He quickly shrugged the thought off. &nbsp;&ldquo;Call it.&rdquo; He claimed. &ldquo;Heads.&rdquo; Rhan sneered. Seytan stared in anticipation as the coin was tossed in the air. The coin seemed to float as it was thrown into the air. Heads. Rhan smiles. It seemed like luck was on the side of the villagers for the first time in years. Rhan forced a laugh. &ldquo;I&rsquo;m surprised you didn&rsquo;t try and cheat.&rdquo; Seytan wiped the smile off his face, looking at Rhan in disgust. &ldquo;Why would I never need to cheat? I am a god! Unbound by fate!&rdquo; Rhan scolded the tyrant. &ldquo;You&apos;re no god! You&rsquo;re just a sad old man! Someone who&rsquo;s lost their sense of humanity! Onto the next then.&rdquo; Seytan then ordered his men to pull out a chessboard. &rdquo;Just like the old man predicted,&rdquo; Rhan thought to himself. &ldquo;A leader must be able to plan and strategize, no?&rdquo; Seytan snickered. &ldquo;Come one, go ahead, you can play White.&rdquo; Rhan was infuriated. &ldquo;How can he be so confident? So normal? After all the things he&apos;s done?&rdquo;. Nevertheless, Rhan trudged forwards, sat down, and started the game. White, Knight to F3, Black, Pawn to F5, White, Pawn to D3, Black, Pawn to D6&hellip; The lingered for what seemed like hours to Rhan until&hellip; Checkmate. Rhan won once again. He looked up at Seytan with an otherworldly grin. &ldquo;I challenge you to a duel.&rdquo; Seytan didn&rsquo;t hesitate and questioned Rhan &rdquo;And your weapon of choice?&rdquo; &ldquo;A rapier.&rdquo; Rhan stood confidently. A guard handed him a steel rapier, much better than anything he had trained with. &ldquo;Weapons prove deadly only by the user&rdquo;. But at this moment Rhan wasn&rsquo;t listening. This is the moment he was waiting for. The moment he could end the suffering. The battle was swift. Rhan charged into Seytan before he could even react, slashing his legs. Seytan staggered to the ground and fell onto his knees. Rhan pushed the mad tyrant over. Gleaming from eye to eye. He can finally have his way. He pierced Seytans eye and pulled it out as if his sword was a skewer. Seytan yelled in agony. Rhan laughed. He began to stick his finger into Seytans skull and broke his cheekbone from the inside of his own skull. Seytan lay numb with pain. The guards only stood in shock as Rhan continued to laugh uncontrollably. He thrusted his rapier into Seytans left hand, pinning him against the ground. &ldquo;All of this, this isn&apos;t enough. You don&apos;t deserve death. You deserve to rot for years, an accumulation of all the pain you&apos;ve caused for others.&rdquo; Rhan began to slowly mutilate Seytan as the tyrant slowly bled out. &ldquo;I AM A GOD!&rdquo; However, in one instant, he caught himself. He saw fear in the tyrant&apos;s eye. A fear he only once saw before, the same fear his people felt under Seytan.He knew he shouldn&apos;t be doing this, yet he still wants to. He had lost himself. He had become what he had hated the most. He had let hatred and malice consume him. &ldquo;You.. you don&apos;t deserve death, but I&rsquo;m no monster&hellip;&rdquo; Rhan slit the tyrant&apos;s throat, swiftly ending the tyrant&apos;s life. The mercenaries all swiftly fled as the barrier trapping the village fell along with its ruler, as Seytan&rsquo;s &ldquo;empire&rdquo; crumbled. The people cheered for Rhan. He was a hero to all, but a failure to himself. He still left incomplete. He felt as if he had lost himself, and forgotten what it meant to be human. To feel compassion. &ldquo;Are my actions no better than Seytan&apos;s?&rdquo; He realized that while what he did was necessary, his unnecessary cruelty was no better than what Seytan had done. He enjoyed the suffering of Seytan. A wave of nausea hit Rhan. Like his entire life had surmounted to failure. He wanted to better himself. He wanted to prove to himself he wasn&rsquo;t like the tyrant leader. With his strongest ability, his determination, he continued on. As time passed, Rhan had begun to rebuild the village to its former glory. The loving, peaceful, nameless, village it once was. He slowly pieced himself back together as well, becoming a compassionate and caring leader. He slowly found his purpose again in life, after the defeat of Seytan. He became the child he once was, undoing Seytan&rsquo;s evil, swearing to never hurt again.&nbsp;</p>`;
    imgOne.remove()
    title.href="https://issuu.com/gzr529/docs/guseyn_zarbaliyev_-_fairy_tale_creative_writing_pi";
    splashImg.style.backgroundImage=`url("https://i.imgur.com/eYPgI4m.png")`; 
    }, 1000);
    setTimeout(() => { 
    container.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
    essayButton.disabled = false;
    }, 6000); 
});

document.getElementById('projButton').addEventListener('click', function projButton(){
    container.style.opacity = "0";
    projButton.disabled = true;
    setTimeout(() => { 
    title.innerHTML = `<p class="aboutTitleText">Hey! Still A Work in Progress!</p>`;
    body.innerHTML = `ლ(ಠ_ಠლ)`;
    imgOne.remove()
    title.href="https://issuu.com/gzr529/docs/guseyn_zarbaliyev_-_fairy_tale_creative_writing_pi"; 
    }, 1000);
    setTimeout(() => { 
        container.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        projButton.disabled = false;
    }, 6000); 
});

document.getElementById('presButton').addEventListener('click', function presButton(){
    container.style.opacity = "0";
    presButton.disabled = true;
    setTimeout(() => { 
    title.innerHTML = `<p class="aboutTitleText">Celtic Mythology Presentation</p>`;
    body.innerHTML = `<div class="bodyVideoWrapper"><iframe class="bodyVideo" src="https://www.youtube.com/embed/RhtoTgRwoEA"></iframe><iframe src="https://docs.google.com/presentation/d/e/2PACX-1vREk9uheugytWonYUcAKtyiXLOWZ5ZsVwu_-NIXBpqmWyw3WYB23qTDAyYgt-ICUDc4SNxPZI1e13W9/embed?start=false&loop=false&delayms=5000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>
</iframe></div>`;
    imgOne.remove()
    title.href="https://issuu.com/gzr529/docs/guseyn_zarbaliyev_-_fairy_tale_creative_writing_pi";
    splashImg.style.backgroundImage=`url("https://imgur.com/Y0VplhX.png")`; 
    }, 1000);
    setTimeout(() => { 
        container.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        presButton.disabled = false;
    }, 6000); 
});

document.getElementById('blogButton').addEventListener('click', function blogButton(){
    container.style.opacity = "0";
    blogButton.disabled = true;
    setTimeout(() => { 
    title.innerHTML = `<p class="aboutTitleText">Hey! Still A Work in Progress!</p>`;
    body.innerHTML = `ლ(ಠ_ಠლ)`;
    imgOne.remove()
    }, 1000);
    setTimeout(() => { 
        container.style.opacity = "1";
    }, 1200);
    setTimeout(() => { 
        blogButton.disabled = false;
    }, 6000); 
});
