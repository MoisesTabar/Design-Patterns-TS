import Implementation from './Implementation'
import Implementation2 from './Implementation2'

Implementation();
Implementation2();

//now if we saw the output it should be like this
/*
Bots storaged: 0
Bot one Storaged
---------------------------------
Bots storaged: 1
Bot two Storaged
---------------------------------
Bots storaged: 2
 */

/*
    If we exported the default class everytime we inserted a bot a new instance would be created
    but in this case the same instance gets loaded with a new bot
*/