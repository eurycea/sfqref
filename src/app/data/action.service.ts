import { Injectable } from '@angular/core';
import { RuleService } from './rule.service';
import { RuleItem } from './rule-item.model';

@Injectable({
  providedIn: 'root',
  useFactory: () => new ActionService(),
})
export class ActionService implements RuleService {

  readonly actions: Array<RuleItem> = [
    new RuleItem(
      'Melee Attack',
      'With a melee weapon, you can strike any opponent in a square adjacent to your space.',
      'With a melee weapon, you can strike any opponent in a square adjacent to your space.' +
        ' You add your **Strength modifier to your melee attack rolls and to your melee damage rolls**.' +
        '\n\nSome melee weapons in **Chapter 7** have the *reach* special property, as indicated in their' +
        ' descriptions, and some monsters have natural reach. Typically, a character or monster with' +
        ' reach can attack any foe within their reach (see *Reach and Threatened Squares* on **page 255** for more details).'
    ),
    new RuleItem(
      'Ranged Attack',
      'With a ranged weapon, you can shoot or otherwise attack a target that is within the weapon’s' +
        ' maximum range and in your line of effect.',
      'With a ranged weapon, you can shoot or otherwise attack a target that is within the weapon’s' +
        ' maximum range and in your line of effect (see **page 271**).\n\n' +
        'You add your **Dexterity modifier to your ranged attack rolls**, but not to your ranged damage rolls.\n\n' +
        'A ranged weapon’s range increment is listed along with its other statistics (see **Chapter 7**).\n\n' +
        ' If you make an attack with a ranged weapon from a distance greater than its listed range, you take a' +
        ' cumulative –2 penalty to the attack roll for each full range increment of distance between you and the' +
        ' target beyond the first (or fraction thereof).\n\nFor most ranged weapons, the maximum range is 10 range' +
        ' increments, or 10× the number listed as the weapon’s range.' +
        ' Some ranged weapons have different maximum ranges, but if so, their descriptions specify their maximum ranges.'
    ),
    new RuleItem(
      'Thrown Weapon Attack',
      'With a thrown weapon or a grenade, you can make a ranged attack at a target that is within the' +
        ' weapon’s maximum range and in your line of effect.',
      'With a thrown weapon or a grenade, you can make a ranged attack at a target that is within the' +
        ' weapon’s maximum range and in your line of effect (see **page 271**).\n\n' +
        'You add your **Strength modifier to your ranged attack rolls** with a thrown weapon,' +
        ' and to your damage rolls with weapons with the thrown special property. Do not add your' +
        ' Strength modifier to damage rolls with grenades.\n\n' +
        'When using a thrown weapon that has an area effect, such as a grenade, you target a' +
        ' specific grid intersection on a tactical battle map, rather than a specific creature.' +
        ' Treat this as a ranged attack against AC 5.\n\n' +
        'For thrown weapons, the maximum range is 5 range increments.\n\n' +
        'If you miss on a ranged attack with a thrown weapon, the weapon lands in a random square or' +
        ' grid intersection as appropriate near your target. To determine where it lands, roll 1d8.' +
        ' This determines the initial misdirection of the throw, with 1 falling short (off-target in a' +
        ' straight line toward the thrower), and 2 through 8 rotating around the target creature or grid' +
        ' intersection in a clockwise direction, as illustrated in the diagram above. After you’ve' +
        ' determined the misdirection of the throw, roll 1d4. The result is how many squares away in' +
        ' that direction the weapon lands.\n\n' +
        'For example, after a missed ranged attack with a grenade, a player rolls 1d8 with a result of 1.' +
        ' This indicates that the grenade’s initial misdirection falls short of the target intersection.' +
        ' Then, the player rolls 1d4 with a result of 2. This determines that the grenade actually lands at' +
        ' an intersection 2 squares in front of the target intersection.'
    ),
    new RuleItem(
      'Use a Special Ability',
      'Using a special ability is usually a standard action, ' +
        'unless it is an ongoing ability or the ability says otherwise.',
      'There are three types of special abilities: *extraordinary*, *spell-like*,' +
        ' and *supernatural*. Special abilities often carry the parenthetical' +
        ' abbreviations *(Ex)*, *(Sp)*, or *(Su)* to indicate whether they are extraordinary,' +
        ' spell-like, or supernatural abilities. Some are ongoing, while others are' +
        ' use-activated. For more details, including descriptions of specific special abilities, see **page 262**.\n\n' +
        'Using a special ability is usually a standard action, unless it is an ongoing ability' +
        ' or the ability says otherwise. In rare cases, an ability might take a full action or a' +
        ' move action to activate. In most cases, a use-activated special ability cannot be' +
        ' activated as a swift action.\n\nUsing a spell-like ability typically provokes attacks of' +
        ' opportunity (see **page 248**) unless stated otherwise.'
    ),
    new RuleItem(
      'Cast a spell',
      'Most spells require a standard action',
      'The vast majority of spells require at least a' +
        ' standard action to cast, and sometimes more. Spells that take more' +
        ' than a round to cast require a full action each round until they are' +
        ' complete. For more information about how spells and magic work, see *Chapter 10.*\n\n' +
        'Casting a spell takes a significant amount of concentration, forcing you to lower your' +
        ' defenses briefly. When you cast a spell, it gives **targets threatening you in melee a' +
        ' chance to make an attack of opportunity** against you (see *Attack of Opportunity* on **page 248**),' +
        ' unless the spell specifies otherwise—normally only the case for a few spells with a' +
        ' range of touch. If this attack of opportunity hits and damages you, you fail to cast' +
        ' the spell and lose the spell slot. For more information about threatened squares, see **page 255**.'
    ),
    new RuleItem(
      'Concentrate',
      'Concentrate to maintain a spell',
      'Some spells require continued concentration to keep them going. Concentrating' +
      ' to maintain a spell is a standard action (see Duration on **page 270** for more ' +
      'information about concentration).'
    ),
    new RuleItem(
      'Dismiss a Spell',
      'Dismissing an active spell is a standard action',
      'Dismissing an active spell is a standard action' +
        ' (see Duration on **page 270** for more information about dismissible spells). '
    ),
    new RuleItem(
      'Combat Maneuver: Bull Rush',
      'Attempt to knock the target back',
      'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8**.\n\n' +
        ' You knock the target back 5 feet,' +
        ' plus 5 additional feet for every 5 by which the result of your **attack roll exceeds the target’s' +
        ' KAC + 8**. If an obstacle is in the way, the target stops at the obstacle instead.'),
    new RuleItem(
      'Combat Maneuver: Dirty Trick',
      'You make an unorthodox attack to briefly hinder the target. ',
      'You make an unorthodox attack to briefly hinder the target.' +
        ' A dirty trick could be throwing sand in the target’s eyes, jamming a rock into his actuators,' +
        ' or any other improvised action designed to put your opponent at a disadvantage.\n\n' +
        'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8**.\n\n' +
        ' Your target is **blinded, deafened, entangled, off-target, shaken, or sickened (your choice)** for 1 round,' +
        ' plus 1 additional round for every 5 by which the result of **your attack roll exceeds the target’s KAC + 8**' +
        ' (see [Conditions](/conditions) beginning on **page 273** for information on these conditions).' +
        ' \n\nThe target can remove the condition as a move action.\n\nA dirty trick is normally a melee attack,' +
        ' but a GM can allow certain actions to count as dirty tricks at range, in which case you take a –2 penalty' +
        ' to your attack roll for every 5 feet between you and the target.'
      ),
    new RuleItem(
      'Combat Maneuver: Disarm',
      'You knock an item the target is holding out of the target’s hands and onto the ground.',
      'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8.**\n\n' +
        'You knock an item the target is holding out of the target’s hands and onto the ground.\n\n' +
        'If you have a hand free, you can automatically grab the item with your hand before it falls.'
    ),
    new RuleItem(
      'Combat Maneuver: Grapple',
      'You hold the target in place.',
      'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8**.\n\n' +
        'You hold the target in place. You must have at least one hand free to perform a grapple combat' +
        ' maneuver. Your target has the grappled condition, meaning she can’t move from her current' +
        ' space and takes further penalties until she either uses a standard action to attempt a ' +
        'grapple combat maneuver to grapple you (giving you the grappled condition) or uses the escape' +
        ' task of the Acrobatics skill to break free.\n\n If the result of your **attack roll equals or ' +
        'exceeds the target’s KAC + 13**, the target is instead pinned for the same duration, and she ' +
        'can’t take any actions that involve moving her limbs other than to attempt to escape.\n\nThe ' +
        'grappled or pinned condition lasts until the end of your next turn, unless you renew it on ' +
        'your next turn with another grapple combat maneuver. The condition ends immediately if you move ' +
        'away. As long as you have one target grappled or pinned, you cannot attempt to grapple another.' +
        ' The grappled and pinned conditions are further detailed in [Conditions](/conditions) on **pages 276–277**. When' +
        ' you renew a grapple, you can remove one item from the target’s body that can be easily accessed,' +
        ' including most weapons and equipment (but not worn armor). Doing so immediately ends the grapple. '
    ),
    new RuleItem(
      'Combat Maneuver: Reposition',
      'You change the target’s position to a different location still within your reach and within 5 feet of its original placement.',
      'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8**.\n\n' +
        'You change the target’s position to a different location still within your reach and ' +
        'within 5 feet of its original placement.\n\nYou can move the target 5 additional feet for ' +
        'every 5 by which the result of your attack roll exceeds the target’s KAC + 8, but all ' +
        'movement must remain within your reach. You cannot move the target past an obstacle. ' +
        'If you reposition a creature as a full action, you can move a distance equal to the ' +
        'distance you repositioned your target (up to your move speed), dragging the target along with you.'
    ),
    new RuleItem(
      'Combat Maneuver: Sunder',
      'You deal damage to one object held in the target’s hand or accessible on its body.',
      'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8**.\n\n' +
        'You deal damage to one object held in the target’s hand or accessible on its body. ' +
        'The object must be something that could be drawn easily by the target as a move action' +
        ' (see *Draw or Sheathe a Weapon* on **page 247**). The damage is reduced by an amount equal ' +
        'to the object’s hardness (see *Smashing an Object* **page 409**). '
    ),
    new RuleItem(
      'Combat Maneuver: Trip',
      'You knock the target prone if it is on the ground.',
      'Choose an opponent within your reach (including your weapon’s reach, if applicable)' +
        ' and then make a **melee attack roll against the opponent’s KAC + 8**.\n\n' +
        'You knock the target prone if it is on the ground. A target in the air instead' +
        ' descends 10 feet, falling prone if this causes it to fall to the ground. ' +
        'A target in zero gravity is instead knocked offkilter.\n\nThe prone and off-kilter ' +
        '[conditions](/conditions) are further detailed on **pages 276–277**.'
    ),
    new RuleItem(
      'Covering Fire',
      'Make a ranged attack that provides covering fire for an ally',
      'You can use your standard action to make a ranged attack that provides covering fire' +
        ' for an ally. Make a **ranged attack roll against AC 15**.\n\nIf you hit, you deal no damage' +
        ' but the selected **ally gains a +2 circumstance bonus to AC against the next attack ' +
        'from a creature in your line of effect** (see **page 271**), so long as that attack occurs ' +
        'before your next turn.'
    ),
    new RuleItem(
      'Harrying Fire',
      'Distract an enemy',
      'You can use your standard action to make a ranged attack that distracts a foe' +
        ' in your line of effect. Make an attack roll against AC 15. If you hit, you deal' +
        ' no damage, but the next ally to attack that foe gains a +2 circumstance bonus' +
        ' to her next attack roll, as long as that attack occurs before your next turn. '
    ),
    new RuleItem(
      'Feint',
      'Bluff to make an enemy flat-footed',
      'You can use your standard action to feint by attempting a Bluff check. The DC of this check' +
        ' is equal to either 10 + your opponent’s Sense Motive total skill bonus or 15 + 1-1/2 × ' +
        'the opponent’s CR, whichever is greater.\n\nYou can’t feint against a creature that lacks an' +
        ' Intelligence score, and you cannot take 10 or take 20 (see page 133 in Chapter 5) on a ' +
        'Bluff check to feint.\n\nWhen you successfully feint, you treat your opponent as flat-footed ' +
        'for your next attack against him before the end of your next turn. '
    ),
    new RuleItem(
      'Fight Defensively',
      'Temporarily gain +2 AC at the expense of a -4 attack penalty',
      'You can fight defensively when attacking as part of a standard action.' +
        ' If you do, you take a –4 penalty to attacks you make in that round but gain ' +
        'a +2 bonus to AC until the start of your next turn.'
    ),
    new RuleItem(
      'Total Defense',
      'Forego an attack for +4 AC until your next turn',
      'You can defend yourself as a standard action. Starting at the beginning of this' +
        ' action, you get a +4 bonus to your Armor Class until the start of your next turn.' +
        ' You can’t combine total defense with other actions that increase your AC, nor can' +
        ' you make attacks of opportunity while benefiting from total defense. '
    ),
    new RuleItem(
      'Activate an Item',
      'Certain items need to be activated to have an effect.',
      'Many technological and magic items ' +
       'such as a cybernetic hand, don’t need to be activated. ' +
       'Certain items, however, do need to be activated to have an effect. ' +
       'Unless otherwise noted, activating such an item is a standard action.'
    ),
  ];

  rules() {
    return this.actions;
  }
}
