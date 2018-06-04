import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 


import euglossine           from    '../../img/csk-euglossine_1.jpg';
import bv914                from    '../../img/csk-bv914_1.jpg';
import peters2              from    '../../img/csk-peters2_1.jpg';
import edmunson             from    '../../img/csk-edmunson_1.jpg';
import vehementcaress       from    '../../img/csk-vehementcaress_1.jpg';
import acpworc              from    '../../img/csk-acpworc_1.jpg';
import bv912                from    '../../img/csk-bvworc_1.jpg';
import prone912             from    '../../img/csk-proneworc_1.jpg';
import threeiniates         from    '../../img/csk-threeinitiates_1.jpg';
import erich                from    '../../img/csk-erichworc_1.jpg';
import billmiller           from    '../../img/csk-billtmiller_2.jpg';
import ovt                  from    '../../img/csk-ovt_1.jpg';
import mlacp                from    '../../img/csk-mlacp_1.jpg';
import mlprone              from    '../../img/csk-mlprone_1.jpg';
import mlgobby              from    '../../img/csk-mlgobby_1.jpg';
import mlgrutch             from    '../../img/csk-mlgrutch_1.jpg';
import mlcabo               from    '../../img/csk-mlcabo_1.jpg';
import mlancient            from    '../../img/csk-mlancient_1.jpg';
import mlmidi               from    '../../img/csk-mlmidi_1.jpg';
import mlgeddes             from    '../../img/csk-mlgeddes_1.jpg';
import mlmeginsky           from    '../../img/csk-mlmeginsky_1.jpg';
import mlvaleriemartino     from    '../../img/csk-mlvaleriemartino_1.jpg';
import mljahiliyyafields    from    '../../img/csk-mljahiliyyafields_1.jpg';
import mlisa                from    '../../img/csk-mlisa_1.jpg';
import mlgiantclaw          from    '../../img/csk-mlgiantclaw_1.jpg';
import mlfoodman            from    '../../img/csk-mlfoodman_1.jpg';
import mlcontainer          from    '../../img/csk-mlcontainer_1.jpg';
import mlbookworms          from    '../../img/csk-mlbookworms_1.jpg';
import mlsoren              from    '../../img/csk-mlsoren_1.jpg';
import mltrue               from    '../../img/csk-mltrue_1.jpg';
import mldinnersss          from    '../../img/csk-mldinnersss_1.jpg';
import mlexplo              from    '../../img/csk-mlexplo_1.jpg';
import mlvoid               from    '../../img/csk-mlvoid_1.jpg';
import mlmygan              from    '../../img/csk-mlmygan_1.jpg';
import scottdan             from    '../../img/csk-scottdan_1.jpg';
import gifts                from    '../../img/csk-gifts_1.jpg';
import mr2                  from    '../../img/csk-mr2_1.jpg';
import moondrawn            from    '../../img/csk-moondrawn_1.jpg';
import bt2                  from    '../../img/csk-bt2_1.jpg';
import washj1               from    '../../img/csk-washj1_1.jpg';
import washj2               from    '../../img/csk-washj2_1.jpg';
import washcsk              from    '../../img/csk-washcsk_1.jpg';
import washmr               from    '../../img/csk-washmr_1.jpg';
import void550              from    '../../img/csk-void550_1.jpg';
import fife550              from    '../../img/csk-fife550_1.jpg';
import prone550             from    '../../img/csk-prone550_1.jpg';
import churchsub            from    '../../img/csk-churchsub_1.jpg';
import churchsolei          from    '../../img/csk-churchsolei_1.jpg';
import churchod             from    '../../img/csk-churchod_1.jpg';
import churchcloth          from    '../../img/csk-churchcloth_1.jpg';
import churchmidi           from    '../../img/csk-churchmidi_1.jpg';
import churchmm             from    '../../img/csk-churchmm_1.jpg';
import mvgeddes             from    '../../img/csk-mvgeddes_1.jpg';
import mvbelarisk           from    '../../img/csk-belarisk.png';
import isa550               from    '../../img/csk-isa550_1.jpg';
import ww550                from    '../../img/csk-ww550_1.jpg';
import midi550              from    '../../img/csk-midi550_1.jpg';
import mvjada               from    '../../img/csk-mvjada_1.jpg';
import mvsub                from    '../../img/csk-mvsub_1.jpg';
import mvmygan              from    '../../img/csk-mvmygan_1.jpg';
import mvallin              from    '../../img/csk-mvallin_1.jpg';
import geddes550            from    '../../img/csk-geddes550_1.jpg';
import dinnersss550         from    '../../img/csk-dinnersss550_1.jpg';
import prone550b            from    '../../img/csk-prone550b_1.jpg';
import boeldt550            from    '../../img/csk-boeldt550_1.jpg';
import sq550                from    '../../img/csk-sq550_1.jpg';
import sq1                  from    '../../img/csk-sq1_1.jpg';
import sq2                  from    '../../img/csk-sq2_1.jpg';
import sq3                  from    '../../img/csk-sq3_1.jpg';
import sq4                  from    '../../img/csk-sq4_1.jpg';
import sq5                  from    '../../img/csk-sq5_1.jpg';
import sq5e                 from    '../../img/csk-sq5e_1.jpg';
import sq7                  from    '../../img/csk-sq7_1.jpg';
import pr1                  from    '../../img/csk-pr1_1.jpg';
import pr2                  from    '../../img/csk-pr2_1.jpg';
import pr3                  from    '../../img/csk-pr3_1.jpg';
import pr4                  from    '../../img/csk-pr4_1.jpg';
import pr5                  from    '../../img/csk-pr5_1.jpg';
import pr7                  from    '../../img/csk-pr7_1.jpg';
import prsq                 from    '../../img/csk-prsq2_1.jpg';
import chioni               from    '../../img/csk-chioni_1.jpg';
import moose                from    '../../img/csk-moose_1.jpg';
import onewayness           from    '../../img/csk-onewayness_1.jpg';
import trim                 from    '../../img/csk-trim-500x280.jpg';
import mst                  from    '../../img/csk-mst-500x280.jpg';
import mzungu               from    '../../img/csk-mzungu-500x280.jpg';
import prone1021            from    '../../img/csk-prone1021-500x280.jpg';
import theft                from    '../../img/csk-theft-500x280.jpg';
import placeholder          from    '../../img/csk-videocatalog2-500x280.jpg';
import bv923                from    '../../img/csk-bv923-500x280.jpg';
import bto1                 from    '../../img/csk-bto1-500x280.png';
import bto2                 from    '../../img/csk-bto2-500x280.png';
import bajas                from    '../../img/csk-bajas-500x280.png';
import bv06                 from    '../../img/csk-bv06-500x280.png';
import belarisk3            from    '../../img/csk-belarisk3-500x280.png';
import erika                from    '../../img/csk-erika-500x280.png';
import cskonopka1           from    '../../img/csk-cskonopka1-500x280.png';
import zvk                  from    '../../img/csk-zvk-500x280.png';
import oliverdodd           from    '../../img/csk-oliverdodd-500x280.png';
import kompreszzor          from    '../../img/csk-komprezzor-500x280.png';
import glacier23            from    '../../img/csk-glacier23-500x280.png';
import cskonopka2           from    '../../img/csk-cskonopka02-500x280.png';
import prone06              from    '../../img/csk-prone06-500x280.png';


import prone07              from    '../../img/csk-prone7-500x280.png';
import jada2              from    '../../img/csk-jada2-500x280.png';
import substrates2              from    '../../img/csk-substrates2-500x280.png';
import solei2              from    '../../img/csk-solei2-500x280.png';
import offland              from    '../../img/csk-offland-500x280.png';
import melissaweikart              from    '../../img/csk-melissaweikart-500x280.png';
import elliedension              from    '../../img/csk-elliedension-500x280.png';
import archaicfrequency              from    '../../img/csk-archaicfrequency-500x280.png';

import q1              from    '../../img/csk-q1-500x280.png';
import q2              from    '../../img/csk-q2-500x280.png';
import genexp02              from    '../../img/csk-genexp02-500x280.png';
import ancientorigin02              from    '../../img/csk-ancientorigin02-500x280.png';



// import sq6 from '../src/img/csk-sq6_1.jpg';
// import mlsquelcher from '../src/img/csk-mlsquelcher_1.jpg';

export default class LiveVideo extends Component {
  render() {

    return (
      <div >
  

        <Grid stackable={true} columns={4}>

    <br/>
    <Grid.Column>
        <Card 
        image={jada2} 
        header='Jada Yvette'
        href='https://player.vimeo.com/video/253182255'
        meta='01202018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={substrates2} 
        header='Substrates'
        href='https://player.vimeo.com/video/253195085'
        meta='01202018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={solei2} 
        header='Solei'
        href='https://player.vimeo.com/video/253090830'
        meta='01202018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={prone07} 
        header='Prone'
        href='https://player.vimeo.com/video/2530982043333333'
        meta='01202018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={offland} 
        header='Offland'
        href='https://player.vimeo.com/video/252021573'
        meta='01192018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={melissaweikart} 
        header='Melissa Weikart'
        href='https://player.vimeo.com/video/252020128'
        meta='01192018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={elliedension} 
        header='Ellie Denison'
        href='https://player.vimeo.com/video/252018713'
        meta='01192018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={archaicfrequency} 
        header='Archaic Frequency'
        href='https://player.vimeo.com/video/252017018'
        meta='01192018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={q2} 
        header='????'
        href='https://player.vimeo.com/video/251988808'
        meta='01132018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={q1} 
        header='????'
        href='https://player.vimeo.com/video/252015976'
        meta='01132018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={genexp02} 
        header='!@#$%'
        href="https://player.vimeo.com/video/251282333" 
        meta='01132018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column> 
        <Card 
        image={ancientorigin02} 
        header='Ancient Origin'
        href="https://player.vimeo.com/video/251259860" 
        meta='01132018'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={belarisk3} 
        href="https://player.vimeo.com/video/247866927" 
        header='Belarisk'
        meta='12152017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bv06} 
        href="https://player.vimeo.com/video/247902303" 
        header='Bastian Void'
        meta='12152017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={cskonopka1} 
        href="https://player.vimeo.com/video/247905672" 
        header='cskonopka (pt1)'
        meta='12152017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={cskonopka2} 
        href="https://player.vimeo.com/video/248029511" 
        header='cskonopka (pt2)'
        meta='12152017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bajas} 
        href="https://player.vimeo.com/video/249191031" 
        header='Bitchin Bajas'
        meta='12112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bto2} 
        href="https://player.vimeo.com/video/249194950" 
        header='Boston Typewriter Orchestra(pt2)'
        meta='12112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bto1} 
        href="https://player.vimeo.com/video/249106066" 
        header='Boston Typewriter Orchestra (pt1)'
        meta='12112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={erika} 
        href="https://player.vimeo.com/video/249195503" 
        header='Erika Nesse'
        meta='12112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={prone06} 
        href="https://player.vimeo.com/video/249196907" 
        header='Prone'
        meta='12112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={trim} 
        href="https://player.vimeo.com/video/239531795" 
        header='Trim'
        meta='10212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mst} 
        href="https://player.vimeo.com/video/239568745" 
        header='MST'
        meta='10212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mzungu} 
        href="https://player.vimeo.com/video/239521155" 
        header='Mzungu'
        meta='10212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={prone1021} 
        href="https://player.vimeo.com/video/239514775" 
        header='Prone'
        meta='10212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={theft} 
        href="https://player.vimeo.com/video/239699672" 
        header='Id M Theft Able'
        meta='10212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={placeholder}
        header='Chroma'
        meta='09232017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bv923} 
        href="https://player.vimeo.com/video/236135183" 
        header='Bastian Void'
        meta='09232017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={placeholder}
        header='Field Book'
        meta='09232017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={euglossine} 
        href="https://player.vimeo.com/video/234176724" 
        header='Euglossine'
        meta='09142017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bv914} 
        href="https://player.vimeo.com/video/234973971" 
        header='Bastian Void'
        meta='09142017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={peters2} 
        href="https://player.vimeo.com/video/234552049" 
        header='Peter Seligman'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={edmunson} 
        href="https://player.vimeo.com/video/234092594" 
        header='Edmunson'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={vehementcaress} 
        href="https://player.vimeo.com/video/234970554" 
        header='Vehement Caress'
        meta='09142017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bv912} 
        href="https://player.vimeo.com/video/234966512" 
        header='Bastian Void'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={acpworc} 
        href="https://player.vimeo.com/video/235103367" 
        header='A Campbell Payne'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={prone912} 
        href="https://player.vimeo.com/video/234158474" 
        header='Prone'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={threeiniates} 
        href="https://player.vimeo.com/video/234076360" 
        header='Three Initiates'
        meta='09142017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={erich} 
        href="https://player.vimeo.com/video/234234266" 
        header='Erich Hochstrasser'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={billmiller} 
        href="https://player.vimeo.com/video/234152589" 
        header='Bill T Miller'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={oliverdodd} 
        href="https://player.vimeo.com/video/237148015" 
        header='Oliver Dodd (w/Jake Metz)'
        meta='09092017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={zvk} 
        href="https://player.vimeo.com/video/237137087" 
        header='Z_VK'
        meta='09092017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={kompreszzor} 
        href="https://player.vimeo.com/video/237135855" 
        header='Komprezzor (pt2)'
        meta='09092017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={glacier23} 
        href="https://player.vimeo.com/video/237129552" 
        header='Glacial23 (w/Chris LeBlanc, Jake Metz, Michael Lund)'
        meta='09092017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={moondrawn} 
        href="https://player.vimeo.com/video/232856059" 
        header='Moondrawn'
        meta='07282017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={gifts} 
        href="https://player.vimeo.com/video/228630318" 
        header='The Gifts'
        meta='07282017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={bt2} 
        href="https://player.vimeo.com/video/228628220" 
        header='Bromp Treb'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mr2} 
        href="https://player.vimeo.com/video/227664719" 
        header='Matt Reed'
        meta='09122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={ovt} 
        href="https://player.vimeo.com/video/227928929" 
        header='Akito Troyer'
        meta='07142017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlfoodman} 
        href="https://player.vimeo.com/video/229335288" 
        header='食品まつり a.k.a FOODMAN'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlgeddes} 
        href="https://player.vimeo.com/video/229331778" 
        header='M Geddes Gengras'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlgiantclaw} 
        href="https://player.vimeo.com/video/226612474" 
        header='Giant Claw'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlmeginsky} 
        href="https://player.vimeo.com/video/225051920" 
        header='Jake Meginsky'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlvoid} 
        href="https://player.vimeo.com/video/225044891" 
        header='Bastian Void'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlvaleriemartino} 
        href="https://player.vimeo.com/video/229331778" 
        header='Valerie Martino'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlacp} 
        href="https://player.vimeo.com/video/226611194" 
        header='A Campbell Payne'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlmeginsky} 
        href="https://player.vimeo.com/video/226603308" 
        header='Bromp Treb'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlmygan} 
        href="https://player.vimeo.com/video/225049104" 
        header='Joe Mygan'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlmidi} 
        href="https://player.vimeo.com/video/225051920" 
        header='Midisexual'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlprone} 
        href="https://player.vimeo.com/video/229664961" 
        header='Prone'
        meta='07112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlcontainer} 
        href="https://player.vimeo.com/video/229341471" 
        header='Container'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mljahiliyyafields} 
        href="https://player.vimeo.com/video/229666242" 
        header='Jahiliyya Fields'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlbookworms} 
        href="https://player.vimeo.com/video/229339076" 
        header='Bookworms'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlisa} 
        href="https://player.vimeo.com/video/225047302" 
        header='Isabella'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlsoren} 
        href="https://player.vimeo.com/video/226661787" 
        header='Soren Roi'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlgobby} 
        href="https://player.vimeo.com/video/229665903" 
        header='Gobby'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlgrutch} 
        href="https://player.vimeo.com/video/225042778" 
        header='Grutch'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mlcabo} 
        href="https://player.vimeo.com/video/225041808" 
        header='Cabo Boing'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        image={mltrue} 
        href="https://player.vimeo.com/video/225041131" 
        header='Modular Moose'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/229661850" 
        image={mldinnersss}
        header='Dinnersss'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/225040121" 
        image={mlexplo}
        header='em>!@#$%'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/225038509" 
        image={mlancient}
        header='Ancient Origin'
        meta='07102017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/225051920" 
        image={washj1}
        header='Jernie'
        meta='05262017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/226602754" 
        image={washcsk}
        header='cskonopka'
        meta='05262017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/226604076" 
        image={washmr}
        header='Matt Reed'
        meta='05262017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/226603308" 
        image={washj2}
        header='Jernie (Encore)'
        meta='05262017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/215446135" 
        image={void550}
        header='Bastian Void'
        meta='04292017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/215380803" 
        image={fife550}
        header='Timothy Fife'
        meta='04292017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/215448451" 
        image={prone550}
        header='Prone'
        meta='04292017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214357881" 
        image={churchsub}
        header='Substrates'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214440914" 
        image={churchsolei}
        header='Solei'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214414263" 
        image={churchod}
        header='Omnious Descent'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214427064" 
        image={churchcloth}
        header='CLOTH & Amy Pierce'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214431499" 
        image={churchmidi}
        header='Midisexual'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214429176" 
        image={churchmm}
        header='Meta Mora'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/232771020" 
        image={mvgeddes}
        header='M Geddes Gengras'
        meta='03112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/232897040" 
        image={mvbelarisk}
        header='Belarisk'
        meta='03112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/204961066" 
        image={isa550}
        header='Isabella'
        meta='02182017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/204966526" 
        image={ww550}
        header='World War'
        meta='02182017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/204953723" 
        image={midi550}
        header='Midisexual'
        meta='02182017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199783267" 
        image={mvjada}
        header='Jada Yvette'
        meta='01132017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199946253" 
        image={mvsub}
        header='Substrates'
        meta='01132017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199784510" 
        image={mvmygan}
        header='Joe Mygan'
        meta='01132017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/200518649" 
        image={mvallin}
        header='Charles Allin'
        meta='01132017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199780266" 
        image={scottdan}
        header='Dan Gonzales'
        meta='12292016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195345541" 
        image={geddes550}
        header='M Geddes Gengras'
        meta='12102016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199261373" 
        image={sq550}
        header='Squelcher'
        meta='12102016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199278251" 
        image={boeldt550}
        header='Benjamin Boeldt'
        meta='12102016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199226020" 
        image={dinnersss550}
        header='Dinnersss'
        meta='12102016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195324829" 
        image={prone550b}
        header='Prone'
        meta='12102016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/196043256" 
        image={sq7}
        header='Squelcher'
        meta='12092016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/196032612" 
        image={pr7}
        header='Prone'
        meta='12092016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/196054756" 
        image={prsq}
        header='Squelcher'
        meta='12072016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/196200402" 
        image={onewayness}
        header='onewayness'
        meta='12062016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195552512" 
        image={moose}
        header='ModularMoose'
        meta='12062016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195318754" 
        image={sq5}
        header='Squelcher'
        meta='12062016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195322640" 
        image={sq5e}
        header='Encore'
        meta='12062016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195256850" 
        image={pr5}
        header='Prone'
        meta='12062016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/201478820" 
        image={sq4}
        header='Squelcher'
        meta='12052016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/201482986" 
        image={pr4}
        header='Prone'
        meta='12052016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/195218345" 
        image={sq3}
        header='Squelcher'
        meta='12042016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/194932829" 
        image={pr3}
        header='Prone'
        meta='12042016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199280708" 
        image={sq2}
        header='Squelcher'
        meta='12032016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/199284301" 
        image={pr2}
        header='Prone'
        meta='12032016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/194140804" 
        image={sq1}
        header='Squelcher'
        meta='12022016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/194139316" 
        image={pr1}
        header='Prone'
        meta='12022016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/194139984" 
        image={chioni}
        header='Simon Chioni'
        meta='12022016'
        fluid={true}/>
    </Grid.Column>
</Grid>

      </div>
    );
  }
}

